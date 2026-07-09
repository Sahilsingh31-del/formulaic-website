"use client";
import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  text?: string;
  quote?: string;
  image?: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, quote, image, name, role }, i) => {
                const displayQuote = text || quote || "";
                const initials = name
                  ? name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()
                  : "";

                return (
                  <div
                    className="p-5 sm:p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 max-w-xs w-full select-none"
                    key={`${index}-${i}`}
                  >
                    <p className="text-slate-600 leading-relaxed text-sm">"{displayQuote}"</p>
                    <div className="flex items-center gap-3 mt-5">
                      {image ? (
                        <img
                          width={40}
                          height={40}
                          src={image}
                          alt={name}
                          className="h-10 w-10 rounded-full object-cover border border-slate-100"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs shadow-sm border border-slate-100">
                          {initials}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <div className="font-semibold text-slate-800 text-sm tracking-tight leading-none mb-1">
                          {name}
                        </div>
                        <div className="text-xs text-slate-500 font-medium tracking-tight leading-none">
                          {role}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
