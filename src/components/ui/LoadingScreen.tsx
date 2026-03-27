import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PRELOAD_IMAGES = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
];

function preloadImages(urls: string[]): Promise<void[]> {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = url;
        })
    )
  );
}

const BRAND_LINE_1 = "TRIPURA";
const BRAND_LINE_2 = "DIGITAL TECHNOLOGIES";

interface LoadingScreenProps {
  children: React.ReactNode;
}

export const LoadingScreen = ({ children }: LoadingScreenProps) => {
  const [showLoader, setShowLoader] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const imagesReady = useRef(false);

  useEffect(() => {
    preloadImages(PRELOAD_IMAGES).then(() => {
      imagesReady.current = true;
    });

    // Typing animation takes ~2s, then hold for 0.5s
    const typingDuration = (BRAND_LINE_1.length + BRAND_LINE_2.length) * 60 + 800;

    const exitTimer = setTimeout(() => {
      const doExit = () => {
        // Step 1: Start fading out the loader (takes 1s)
        setShowLoader(false);
        // Step 2: After loader is fully gone, reveal the page content
        setTimeout(() => setContentReady(true), 400);
      };

      if (imagesReady.current) {
        doExit();
      } else {
        setTimeout(doExit, 1000);
      }
    }, typingDuration);

    // Safety: never block more than 5s
    const safety = setTimeout(() => {
      setShowLoader(false);
      setTimeout(() => setContentReady(true), 300);
    }, 5000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(safety);
    };
  }, []);

  return (
    <>
      {/* ── LOADER OVERLAY ── */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loader"
            exit={{
              opacity: 0,
              transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          >
            {/* Line 1: TRIPURA */}
            <div className="flex overflow-hidden mb-1">
              {BRAND_LINE_1.split("").map((char, i) => (
                <motion.span
                  key={`l1-${i}`}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-4xl md:text-5xl font-black tracking-[0.15em] text-[#111] inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Line 2: DIGITAL TECHNOLOGIES */}
            <div className="flex overflow-hidden">
              {BRAND_LINE_2.split("").map((char, i) => (
                <motion.span
                  key={`l2-${i}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.4,
                    delay: BRAND_LINE_1.length * 0.06 + 0.15 + i * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-xs md:text-sm font-bold tracking-[0.35em] text-[#12387B] inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Red accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: (BRAND_LINE_1.length + BRAND_LINE_2.length) * 0.04 + 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-16 h-[2px] bg-[#CC2B2B] mt-6 origin-left"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PAGE CONTENT ── */}
      {/* Starts hidden, then slowly rises from below with blur-to-sharp */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={
          contentReady
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 80 }
        }
        transition={{
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
