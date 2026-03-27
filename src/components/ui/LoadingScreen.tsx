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
  const [exiting, setExiting] = useState(false);
  const imagesReady = useRef(false);

  useEffect(() => {
    // Start preloading images immediately
    preloadImages(PRELOAD_IMAGES).then(() => {
      imagesReady.current = true;
    });

    // After the typing animation finishes (~2s), start exit
    const typingDuration = (BRAND_LINE_1.length + BRAND_LINE_2.length) * 60 + 600;

    const exitTimer = setTimeout(() => {
      // If images loaded, exit. Otherwise wait a bit more.
      const tryExit = () => {
        setExiting(true);
        setTimeout(() => setShowLoader(false), 900);
      };

      if (imagesReady.current) {
        tryExit();
      } else {
        // Give images 1 more second then exit anyway
        setTimeout(tryExit, 1000);
      }
    }, typingDuration);

    // Hard safety: never block more than 4.5s total
    const safety = setTimeout(() => {
      setExiting(true);
      setTimeout(() => setShowLoader(false), 600);
    }, 4500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(safety);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={
              exiting
                ? { opacity: 0, filter: "blur(20px)", scale: 1.05 }
                : { opacity: 1, filter: "blur(0px)", scale: 1 }
            }
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          >
            {/* Line 1: TRIPURA — typed letter by letter with blur-to-sharp */}
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

            {/* Line 2: DIGITAL TECHNOLOGIES — typed after line 1 with blur-to-sharp */}
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

            {/* Accent line that draws in */}
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

      {/* Main content — slides up from bottom with blur-to-sharp after loader */}
      <motion.div
        initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
        animate={
          showLoader
            ? { opacity: 0, y: 60, filter: "blur(10px)" }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
        }
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay: showLoader ? 0 : 0.1,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
