import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export function ScrollRevealText({ text, className, wordClassName }: ScrollRevealProps) {
  const targetRef = useRef<HTMLParagraphElement>(null);
  
  // We use useScroll to tie the animation directly to the user's scroll position
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 90%", "end 60%"],
  });

  const words = text.split(" ");

  return (
    <p ref={targetRef} className={cn("flex flex-wrap gap-x-[0.25em] gap-y-1", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} className={wordClassName}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ 
  children, 
  progress, 
  range,
  className
}: { 
  children: string; 
  progress: any; 
  range: [number, number];
  className?: string;
}) => {
  // Opacity transitions from 20% to 100% as the scroll hits the word's range
  const opacity = useTransform(progress, range, [0.15, 1]);
  // We can also add a slight Y translation for a much more premium feel
  const y = useTransform(progress, range, [10, 0]);
  
  return (
    <motion.span style={{ opacity, y }} className={cn("relative inline-block", className)}>
      {children}
    </motion.span>
  );
};

// Also export a container that reveals lines one by one as they come into view
export function StaggeredTextReveal({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
