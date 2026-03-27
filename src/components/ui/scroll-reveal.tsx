import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  /** Where the animation starts relative to the viewport, e.g. "start 85%" */
  scrollStart?: string;
  /** Where the animation ends relative to the viewport, e.g. "start 40%" */
  scrollEnd?: string;
}

export function ScrollRevealText({ 
  text, 
  className, 
  wordClassName,
  scrollStart = "start 85%",
  scrollEnd = "start 40%",
}: ScrollRevealProps) {
  const targetRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [scrollStart, scrollEnd] as any,
  });

  const words = text.split(" ");

  return (
    <p ref={targetRef} className={cn("flex flex-wrap gap-x-[0.25em] gap-y-1", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(start + 1.5 / words.length, 1);
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
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [4, 0]);
  
  return (
    <motion.span 
      style={{ opacity, y }} 
      className={cn("relative inline-block", className)}
    >
      {children}
    </motion.span>
  );
};

// Container that reveals children one by one as they scroll into view
export function StaggeredTextReveal({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  const ref = useRef(null);
  // Only trigger when 30% of the element is visible, fires once
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -10% 0px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15,
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
              hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
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
