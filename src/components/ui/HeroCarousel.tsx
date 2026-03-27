import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselData = [
  {
    id: 1,
    mainText: "We run data-driven strategies to boost your online visibility, drive organic traffic, and maximize ROI locally and internationally.",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    overlayText: { part1: "design", part2: "matters." },
    circleColor: "bg-yellow-400/90"
  },
  {
    id: 2,
    mainText: "Our creative team masterminds transformational brand campaigns that deliver stunning, measurable results globally.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    overlayText: { part1: "growth", part2: "happens." },
    circleColor: "bg-[#CC2B2B]/90"
  },
  {
    id: 3,
    mainText: "We craft user-first digital experiences, pushing the boundaries of technology and creativity to exponentially scale your business.",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    overlayText: { part1: "build", part2: "faster." },
    circleColor: "bg-[#12387B]/90"
  }
];

// Removed social icons as per user request

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "10%" : "-10%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween", duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 1 },
        staggerChildren: 0.25,
        delayChildren: 0.2,
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "10%" : "-10%",
      opacity: 0,
      transition: {
        x: { type: "tween", duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.6 }
      }
    }),
  };

  const itemVariants = {
    enter: { opacity: 0, y: 50, filter: "blur(12px)" },
    center: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -30, filter: "blur(12px)", transition: { duration: 0.5 } }
  };

  const slide = carouselData[currentIndex];

  // Social links removed

  return (
    <div 
      className="relative w-full overflow-hidden bg-white min-h-[calc(100vh-80px)] min-h-[850px] flex flex-col justify-between"
    >
      {/* Absolute positioning container for the slides perfectly centered */}
      <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-16">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-12 pt-12 md:pt-0"
          >
            {/* Left Text Content */}
            <div className="z-20 order-2 md:order-1 text-center md:text-left flex flex-col justify-center h-full pt-8 md:pt-0">
              <motion.p variants={itemVariants} className="mx-auto max-w-[280px] lg:max-w-sm text-base lg:text-lg leading-relaxed text-foreground/80 md:mx-0 font-medium">
                {slide.mainText}
              </motion.p>
              <motion.a variants={itemVariants} href="/about" className="mt-8 inline-block text-sm font-bold text-[#111] uppercase tracking-wider hover:text-[#CC2B2B] transition-colors underline decoration-2 underline-offset-4 decoration-[#CC2B2B]/40 hover:decoration-[#CC2B2B] w-max mx-auto md:mx-0">
                Read More
              </motion.a>
            </div>

            {/* Center Image with Circle */}
            <div className="relative order-1 md:order-2 flex justify-center items-center py-6 md:py-0 w-full md:w-[400px] lg:w-[480px] mx-auto min-h-[350px] md:min-h-[480px]">
              <motion.div
                 variants={itemVariants}
                 className={`absolute z-0 h-[300px] w-[300px] rounded-full shadow-2xl md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] transition-colors duration-1000 ${slide.circleColor}`}
              />
              <motion.div variants={itemVariants} className="relative z-10 w-56 md:w-72 lg:w-80 aspect-square">
                <img
                   src={slide.imageSrc}
                   alt="Digital Marketing Highlight"
                   className="w-full h-full object-cover rounded-full border-[6px] md:border-[10px] border-white shadow-2xl scale-125 hover:scale-[1.3] transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>

            {/* Right Text */}
            <motion.div variants={itemVariants} className="z-20 order-3 flex items-center justify-center text-center md:justify-start h-full">
              <h1 className="text-6xl sm:text-7xl md:text-[80px] lg:text-[120px] font-black text-[#111] tracking-tighter leading-[0.85] text-center md:text-left">
                {slide.overlayText.part1}
                <br />
                <span className="text-[#CC2B2B]">{slide.overlayText.part2}</span>
              </h1>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots (Bottom Center) - Fixed z-[50] to always be clickable */}
      <div className="absolute bottom-16 left-0 right-0 z-50 flex justify-center items-center space-x-4">
        {carouselData.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] rounded-full ${
                isActive 
                  ? "w-14 h-4 bg-[#111]" 
                  : "w-4 h-4 bg-slate-200 hover:bg-slate-400 border border-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>

      {/* Footer Elements inside Hero (Location) */}
      <footer className="absolute bottom-6 left-0 right-0 z-40 px-8 lg:px-16 flex w-full items-center justify-between pointer-events-none">
        <div className="flex items-center space-x-6 pointer-events-auto">
          {/* Social Links Removed */}
        </div>
        <div className="text-sm font-bold text-[#111] tracking-[0.2em] uppercase">
          TRIPURA, INDIA
        </div>
      </footer>
    </div>
  );
};
