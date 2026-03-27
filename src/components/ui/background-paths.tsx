"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-[#12387B]"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.05 + path.id * 0.015}
                        initial={{ pathLength: 0.3, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.1, 0.3, 0.1],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-white">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none z-0" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-0" />

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter leading-tight">
                        {words.map((word, wordIndex) => {
                            const isPurpose = word.toUpperCase().includes("PURPOSE");
                            return (
                                <span
                                    key={wordIndex}
                                    className={`inline-block mx-[0.2em] md:mx-[0.25em] ${
                                        isPurpose ? "text-[#3b82f6]" : "text-[#111]"
                                    }`}
                                >
                                    {word.split("").map((letter, letterIndex) => (
                                        <motion.span
                                            key={`${wordIndex}-${letterIndex}`}
                                            initial={{ y: 80, opacity: 0, filter: "blur(10px)" }}
                                            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{
                                                duration: 1.2,
                                                delay: wordIndex * 0.15 + letterIndex * 0.05,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="inline-block"
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                            );
                        })}
                    </h2>

                    <div className="flex flex-col items-center justify-center gap-8 mt-12">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#12387B]/90 font-bold tracking-[0.25em] text-sm md:text-lg uppercase">
                            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.8 }} className="cursor-default hover:text-[#CC2B2B] transition-colors">We Solve.</motion.span>
                            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.95 }} className="cursor-default hover:text-[#CC2B2B] transition-colors">We Build.</motion.span>
                            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 1.1 }} className="cursor-default hover:text-[#CC2B2B] transition-colors">We Deliver.</motion.span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 1.5 }}
                            className="relative w-full max-w-3xl mx-auto mt-12"
                        >
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#12387B]/20 to-transparent" />
                            <div className="relative inline-block bg-white px-8 py-2">
                                <p className="text-[#12387B]/60 font-semibold tracking-[0.35em] text-xs md:text-sm uppercase cursor-default hover:text-[#12387B] transition-colors duration-700">
                                    Preferred Digital Partner For Forward-Thinking Enterprises
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
