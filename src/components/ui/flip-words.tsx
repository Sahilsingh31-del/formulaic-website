import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function FlipWords({
  words,
  duration = 3000,
  className,
  animateLetters = true,
}: {
  words: string[];
  duration?: number;
  className?: string;
  animateLetters?: boolean;
}) {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = window.setTimeout(() => {
        startAnimation();
      }, duration);

      return () => window.clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <span className="relative inline-flex min-h-[1.15em] overflow-hidden">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className={cn('inline-block whitespace-nowrap text-left text-foreground', className)}
        >
          {animateLetters
            ? currentWord.split(' ').map((word, wordIndex) => (
                <motion.span
                  key={`${currentWord}-${word}-${wordIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: wordIndex * 0.12, duration: 0.25 }}
                  className="inline-block whitespace-nowrap"
                >
                  {word}
                  {wordIndex < currentWord.split(' ').length - 1 ? '\u00A0' : ''}
                </motion.span>
              ))
            : currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
