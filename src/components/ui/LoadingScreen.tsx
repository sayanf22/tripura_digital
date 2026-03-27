import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// All hero carousel images that need to be preloaded
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
          img.onerror = () => resolve(); // don't block on errors
          img.src = url;
        })
    )
  );
}

interface LoadingScreenProps {
  children: React.ReactNode;
}

export const LoadingScreen = ({ children }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;

    // Animate progress bar smoothly
    const progressInterval = setInterval(() => {
      if (!isMounted) return;
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    // Actually preload images
    preloadImages(PRELOAD_IMAGES).then(() => {
      if (!isMounted) return;
      clearInterval(progressInterval);
      setProgress(100);
      // Small delay after 100% to let the bar finish animating
      setTimeout(() => {
        if (isMounted) setIsLoading(false);
      }, 600);
    });

    // Safety timeout: never block more than 4 seconds
    const safetyTimeout = setTimeout(() => {
      if (isMounted) {
        clearInterval(progressInterval);
        setProgress(100);
        setTimeout(() => {
          if (isMounted) setIsLoading(false);
        }, 300);
      }
    }, 4000);

    return () => {
      isMounted = false;
      clearInterval(progressInterval);
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 text-center"
            >
              <h1 className="text-3xl md:text-4xl font-black tracking-wider text-[#111]">
                TRIPURA
              </h1>
              <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#12387B] mt-1">
                DIGITAL TECHNOLOGIES
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 md:w-64 h-[3px] bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#12387B] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-xs text-slate-400 tracking-widest uppercase"
            >
              Loading
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content — always rendered but hidden behind loader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
};
