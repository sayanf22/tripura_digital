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

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Preload all images into browser cache on first mount
  useEffect(() => {
    carouselData.forEach((slide) => {
      const img = new Image();
      img.src = slide.imageSrc;
    });
  }, []);

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

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* 
        DESKTOP: Full viewport height with absolute centered content
        MOBILE: Natural flow layout with proper stacking 
      */}

      {/* ── DESKTOP LAYOUT (md+) ── */}
      <div className="hidden md:flex relative min-h-[calc(100vh-80px)] min-h-[750px] flex-col justify-between">
        <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-16">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`desktop-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-12"
            >
              {/* Left Text */}
              <div className="z-20 text-left flex flex-col justify-center h-full">
                <motion.p variants={itemVariants} className="max-w-[280px] lg:max-w-sm text-base lg:text-lg leading-relaxed text-foreground/80 font-medium">
                  {slide.mainText}
                </motion.p>
                <motion.a variants={itemVariants} href="/about" className="mt-8 inline-block text-sm font-bold text-[#111] uppercase tracking-wider hover:text-[#CC2B2B] transition-colors underline decoration-2 underline-offset-4 decoration-[#CC2B2B]/40 hover:decoration-[#CC2B2B] w-max">
                  Read More
                </motion.a>
              </div>

              {/* Center Image */}
              <div className="relative flex justify-center items-center w-[400px] lg:w-[480px] min-h-[480px]">
                <motion.div
                  variants={itemVariants}
                  className={`absolute z-0 h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] rounded-full shadow-2xl transition-colors duration-1000 ${slide.circleColor}`}
                />
                <motion.div variants={itemVariants} className="relative z-10 w-72 lg:w-80 aspect-square">
                  <img
                    src={slide.imageSrc}
                    alt="Digital Marketing"
                    className="w-full h-full object-cover rounded-full border-[10px] border-white shadow-2xl scale-125 hover:scale-[1.3] transition-transform duration-1000 ease-out"
                  />
                </motion.div>
              </div>

              {/* Right Text */}
              <motion.div variants={itemVariants} className="z-20 flex items-center justify-start h-full">
                <h1 className="text-[80px] lg:text-[120px] font-black text-[#111] tracking-tighter leading-[0.85] text-left">
                  {slide.overlayText.part1}
                  <br />
                  <span className="text-[#CC2B2B]">{slide.overlayText.part2}</span>
                </h1>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Dots */}
        <div className="absolute bottom-12 left-0 right-0 z-50 flex justify-center items-center space-x-4">
          {carouselData.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  isActive 
                    ? "w-14 h-4 bg-[#111]" 
                    : "w-4 h-4 bg-slate-200 hover:bg-slate-400 border border-slate-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Desktop Footer */}
        <footer className="absolute bottom-4 left-0 right-0 z-40 px-8 lg:px-16 flex w-full items-center justify-end pointer-events-none">
          <div className="text-sm font-bold text-[#111] tracking-[0.2em] uppercase">
            TRIPURA, INDIA
          </div>
        </footer>
      </div>

      {/* ── MOBILE LAYOUT (below md) ── */}
      <div className="md:hidden flex flex-col items-center px-6 pt-4 pb-6">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`mobile-${currentIndex}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col items-center w-full"
          >
            {/* Circle + Image */}
            <div className="relative flex justify-center items-center w-full min-h-[240px] mb-4">
              <motion.div
                variants={itemVariants}
                className={`absolute z-0 h-[230px] w-[230px] rounded-full shadow-xl transition-colors duration-1000 ${slide.circleColor}`}
              />
              <motion.div variants={itemVariants} className="relative z-10 w-44 aspect-square">
                <img
                  src={slide.imageSrc}
                  alt="Digital Marketing"
                  className="w-full h-full object-cover rounded-full border-[5px] border-white shadow-2xl scale-110"
                />
              </motion.div>
            </div>

            {/* Text */}
            <motion.p variants={itemVariants} className="text-center text-sm leading-relaxed text-foreground/80 font-medium max-w-[300px] mb-4">
              {slide.mainText}
            </motion.p>

            <motion.a variants={itemVariants} href="/about" className="text-xs font-bold text-[#111] uppercase tracking-wider hover:text-[#CC2B2B] transition-colors underline decoration-2 underline-offset-4 decoration-[#CC2B2B]/40 mb-4">
              Read More
            </motion.a>

            {/* Big Text */}
            <motion.div variants={itemVariants} className="text-center mb-2">
              <h1 className="text-5xl font-black text-[#111] tracking-tighter leading-[0.85]">
                {slide.overlayText.part1}
                <br />
                <span className="text-[#CC2B2B]">{slide.overlayText.part2}</span>
              </h1>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Dots — always below content, never overlapping */}
        <div className="flex justify-center items-center space-x-3 mt-5">
          {carouselData.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  isActive 
                    ? "w-10 h-3 bg-[#111]" 
                    : "w-3 h-3 bg-slate-200 hover:bg-slate-400 border border-slate-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Mobile Location */}
        <div className="text-xs font-bold text-[#111]/60 tracking-[0.2em] uppercase mt-4">
          TRIPURA, INDIA
        </div>
      </div>
    </div>
  );
};
