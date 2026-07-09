"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "motion/react";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface TeamMember {
    name: string;
    role: string;
    credentials: string;
    summary: string;
    photo: string;
}

interface ScrollMorphHeroProps {
    members: TeamMember[];
}

interface FlipCardProps {
    key?: string;
    src: string;
    name: string;
    role: string;
    credentials: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
    isActive: boolean;
    onHoverStart: () => void;
    onHoverEnd: () => void;
}

// --- FlipCard Component ---
const IMG_WIDTH = 140;
const IMG_HEIGHT = 190;

function FlipCard({
    src,
    name,
    role,
    credentials,
    index,
    total,
    phase,
    target,
    isActive,
    onHoverStart,
    onHoverEnd,
}: FlipCardProps) {
    return (
        <motion.div
            // Smoothly animate to the coordinates defined by the parent
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}

            // Initial style
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d", // Essential for the 3D hover effect
                perspective: "1000px",
            }}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            className="cursor-pointer group z-20"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className={`absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-lg border transition-all duration-300 ${
                        isActive 
                            ? "border-blue-500 shadow-blue-500/25 ring-2 ring-blue-500/20" 
                            : "border-slate-200"
                    } bg-slate-100`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                    {/* Vignette/gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-70 group-hover:opacity-25 transition-opacity duration-300" />
                    
                    {/* Name tag at the bottom of the card on front */}
                    <div className="absolute bottom-3 inset-x-2 text-center pointer-events-none">
                        <p className="text-xs font-bold text-white tracking-wide truncate drop-shadow-md">{name}</p>
                    </div>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-lg bg-slate-950 flex flex-col justify-between p-4 border border-slate-800"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="flex flex-col h-full justify-between text-left">
                        <div>
                            <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest leading-tight">{role}</p>
                            <h4 className="text-xs font-bold text-white mt-1 font-serif leading-tight">{name}</h4>
                        </div>
                        <p className="text-[9px] text-slate-400 leading-tight border-t border-slate-800 pt-2 select-none">{credentials}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const MAX_SCROLL = 2500; // Virtual scroll range

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function ScrollMorphHero({ members }: ScrollMorphHeroProps) {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const TOTAL_IMAGES = members.length;

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        // Initial set
        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Virtual Scroll Logic ---
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0); // Keep track of scroll value without re-renders

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            const current = scrollRef.current;
            const delta = e.deltaY;
            const target = current + delta;
            
            // If scrolling up at 0, or down at MAX_SCROLL, let the page scroll normally!
            if ((current === 0 && delta < 0) || (current === MAX_SCROLL && delta > 0)) {
                return;
            }
            
            // Intercept scroll
            e.preventDefault();
            const newScroll = Math.min(Math.max(target, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        // Touch support
        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            touchStartY = touchY;

            const current = scrollRef.current;
            const target = current + deltaY;

            if ((current === 0 && deltaY < 0) || (current === MAX_SCROLL && deltaY > 0)) {
                return;
            }

            e.preventDefault();
            const newScroll = Math.min(Math.max(target, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        // Attach listeners to container instead of window for portability
        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: true });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll]);

    // 1. Morph Progress: 0 (Circle) -> 1 (Bottom Arc)
    // Happens between scroll 0 and 600
    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

    // 2. Scroll Progress (for rotation): Starts after morph (e.g. > 600)
    const scrollProgress = useTransform(virtualScroll, [600, MAX_SCROLL], [0, 1]);
    const smoothScrollProgress = useSpring(scrollProgress, { stiffness: 45, damping: 18 });

    // --- Mouse Parallax ---
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;

            // Normalize -1 to 1
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            // Move +/- 80px
            mouseX.set(normalizedX * 80);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // --- Intro Sequence ---
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2200);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // --- Random Scatter Positions ---
    const scatterPositions = useMemo(() => {
        return members.map(() => ({
            x: (Math.random() - 0.5) * 800,
            y: (Math.random() - 0.5) * 500,
            rotation: (Math.random() - 0.5) * 90,
            scale: 0.6,
            opacity: 0,
        }));
    }, [members]);

    // --- Render Loop state mapping ---
    const [morphValue, setMorphValue] = useState(0);
    const [progressValue, setProgressValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeProgress = smoothScrollProgress.on("change", setProgressValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeProgress();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollProgress, smoothMouseX]);

    // --- Content Opacity ---
    // Fade in content when arc is formed (morphValue > 0.75)
    const contentOpacity = useTransform(smoothMorph, [0.75, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.75, 1], [20, 0]);

    // Calculate active indices
    const scrolledActiveIndex = Math.min(
        Math.max(Math.round(progressValue * (TOTAL_IMAGES - 1)), 0),
        TOTAL_IMAGES - 1
    );

    const activeMemberIndex = hoveredIndex !== null ? hoveredIndex : scrolledActiveIndex;

    return (
        <div ref={containerRef} className="relative w-full h-full bg-slate-50 border-y border-slate-200 overflow-hidden select-none">
            {/* Main Interactive Screen */}
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">

                {/* Intro Text (Fades out when morphing to bottom arc) */}
                <div className="absolute z-10 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                    <motion.h3
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 font-serif"
                    >
                        The Team Driving Execution
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.6 - morphValue * 1.2 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 text-xs font-bold tracking-[0.25em] text-blue-600 uppercase"
                    >
                        SCROLL TO EXPLORE LEADERSHIP
                    </motion.p>
                </div>

                {/* Arc Active Content (Fades in when morphed) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[8%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4 max-w-2xl"
                >
                    <div className="h-[220px] flex flex-col justify-center items-center">
                        {morphValue > 0.75 && (
                            <motion.div
                                key={activeMemberIndex}
                                initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex flex-col items-center"
                            >
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-2 px-3.5 py-1 bg-blue-50 rounded-full border border-blue-100 shadow-sm">
                                    {members[activeMemberIndex]?.role}
                                </span>
                                <h3 className="text-2xl md:text-4xl font-bold font-serif text-slate-900 tracking-tight mb-2">
                                    {members[activeMemberIndex]?.name}
                                </h3>
                                <p className="text-xs md:text-sm font-semibold text-slate-500 mb-4 tracking-wide">
                                    {members[activeMemberIndex]?.credentials}
                                </p>
                                <p className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed font-normal italic">
                                    "{members[activeMemberIndex]?.summary}"
                                </p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Main Cards Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {members.map((member, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        // 1. Intro Phases (Scatter -> Line)
                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const isSmallContainer = containerSize.width < 1400;
                            const lineScale = isSmallContainer ? Math.max(containerSize.width / 1450, 0.6) : 1.0;
                            const lineSpacing = 155 * lineScale; // 140px width + 15px spacing
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2 + (155 * lineScale / 2); // centering offset
                            target = { x: lineX, y: 0, rotation: 0, scale: lineScale, opacity: 1 };
                        } else {
                            // 2. Circle Phase & Morph Logic
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width, containerSize.height);

                            // A. Circle Position calculation (adjusted for larger cards)
                            const circleRadius = Math.min(minDimension * 0.35, 330);
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            // B. Bottom Arc Position calculation (adjusted scale & radius for legibility)
                            const spreadAngle = isMobile ? 80 : 120;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (TOTAL_IMAGES - 1);

                            // Rotate calculation: shifts items as we scroll
                            const rotateValue = (0.5 - progressValue) * spreadAngle;
                            const currentArcAngle = startAngle + (i * step) + rotateValue;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.3);
                            const arcRadius = baseRadius * (isMobile ? 1.45 : 1.1);

                            const arcApexY = containerSize.height * (isMobile ? 0.42 : 0.32);
                            const arcCenterY = arcApexY + arcRadius;

                            const circleScale = isMobile ? 0.7 : 1.0;
                            const arcScale = isMobile ? 0.85 : 1.15;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: arcScale,
                            };

                            // C. Interpolation (Morph)
                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(circleScale, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        const isActiveCard = morphValue > 0.75 && activeMemberIndex === i;

                        return (
                            <FlipCard
                                key={member.name}
                                src={member.photo}
                                name={member.name}
                                role={member.role}
                                credentials={member.credentials}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={introPhase}
                                target={target}
                                isActive={isActiveCard}
                                onHoverStart={() => setHoveredIndex(i)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
