'use client';

import React, { useState, MouseEvent } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const CornerIcon = ({ className }: { className?: string }) => (
    <Icon
        icon="grommet-icons:bottom-corner"
        width="16"
        height="16"
        className={`text-white/5 group-hover:text-white/80 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-500 ${className}`}
    />
);

const SpotlightCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative group overflow-hidden border border-white/[0.08] bg-gradient-to-br from-[#0D0D0D] to-black ${className}`}
        >
            <div
                className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
                }}
            />

            <CornerIcon className="absolute top-3 left-3 rotate-180 size-5" />
            <CornerIcon className="absolute top-3 right-3 -rotate-90 size-5" />
            <CornerIcon className="absolute bottom-3 left-3 rotate-90 size-5" />
            <CornerIcon className="absolute bottom-3 right-3 size-5" />

            {children}
        </motion.div>
    );
};

const BentoSection = () => {
    return (
        <section className="w-full bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">

                {/* TOP WIDE BENTO (Header Block) */}
                <SpotlightCard className="w-full min-h-[360px] p-8 md:p-14 flex flex-col justify-center">
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.15] group-hover:opacity-[0.4] transition-opacity duration-1000">
                        <Image
                            src="/images/service-map-tracing.png"
                            alt="Architecture illustration"
                            fill
                            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    </div>

                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] -mr-48 -mt-48 pointer-events-none" />

                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-3xl md:text-5xl tracking-tight text-white mb-8 leading-[1.15]">
                            Building frontend architecture <br />
                            <span className="text-white/30 font-light">should not feel like guesswork.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/40 max-w-xl font-light leading-relaxed">
                            Yet most teams waste time fixing structure instead of shipping features.
                        </p>
                    </div>
                </SpotlightCard>

                {/* BOTTOM GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* LEFT TALL BENTO (Primary Pain) */}
                    <SpotlightCard className="lg:col-span-5 min-h-[500px] md:min-h-[640px] flex flex-col p-10" delay={0.1}>
                        <div className="absolute top-0 left-0 w-full h-full bg-red-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="mb-6 relative z-10">
                            <span className="px-4 py-1.5 border border-red-500/10 bg-red-500/5 text-red-500/80 text-[10px] font-bold uppercase tracking-[0.2em]">
                                Breaks scalability
                            </span>
                        </div>
                        <h3 className="text-3xl text-white mb-5 tracking-tight relative z-10">Messy component structure</h3>
                        <p className="text-white/40 mb-10 max-w-sm leading-relaxed font-light relative z-10">
                            Single components handling layout, state, data fetching, and UI logic. Hard to reuse. Harder to maintain.
                        </p>

                        <div className="mt-auto relative w-full h-[320px] overflow-hidden rounded-t-lg">
                            {/* Image Masking Effect */}
                            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            <Image
                                src="/images/mtr.jpg"
                                alt="Metric visualization"
                                fill
                                className="object-cover rounded-t-lg opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                            />
                        </div>
                    </SpotlightCard>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-7 flex flex-col gap-6">

                        {/* RIGHT TOP BENTO (Secondary Pain) */}
                        <SpotlightCard className="flex-1 min-h-[300px]" delay={0.2}>
                            <div className="absolute top-0 right-0 w-full h-full bg-orange-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="absolute inset-0 flex flex-col md:flex-row">
                                <div className="flex-1 p-10 flex flex-col justify-center relative z-10">
                                    <div className="mb-4">
                                        <span className="px-4 py-1.5 border border-orange-500/10 bg-orange-500/5 text-orange-500/80 text-[10px] font-bold uppercase tracking-[0.2em]">
                                            Slows teams down
                                        </span>
                                    </div>
                                    <h3 className="text-2xl text-white mb-4 tracking-tight">Architecture guesswork</h3>
                                    <p className="text-white/40 text-sm leading-relaxed font-light max-w-[280px]">
                                        Folder structures and patterns decided by habit, tutorials, or copying old projects. No clear system.
                                    </p>
                                </div>
                                <div className="w-full md:w-[50%] h-[320px] relative overflow-hidden rounded-lg">
                                    {/* Image Masking */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-l from-black via-transparent to-transparent flex items-center" />
                                    <Image
                                        src="/images/explain-with-ai.png"
                                        alt="Confusion visualization"
                                        fill
                                        className="object-cover opacity-20 filter grayscale group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-1000 translate-x-4"
                                    />
                                </div>
                            </div>
                        </SpotlightCard>

                        {/* RIGHT BOTTOM BENTO (Outcome Pain) */}
                        <SpotlightCard className="min-h-[220px] p-10" delay={0.3}>
                            <div className="flex flex-col md:flex-row gap-8 items-center h-full relative z-10">
                                <div className="flex-1">
                                    <div className="mb-6">
                                        <span className="px-4 py-1.5 border border-purple-500/10 bg-purple-500/5 text-purple-500/80 text-[10px] font-bold uppercase tracking-[0.2em]">
                                            Costly rewrites
                                        </span>
                                    </div>
                                    <h3 className="text-2xl text-white mb-3 tracking-tight">Refactoring pain</h3>
                                    <p className="text-white/40 text-sm leading-relaxed font-light max-w-sm">
                                        Projects start fast, then collapse under tech debt. Cleanups turn into rewrites when it is already too late.
                                    </p>
                                </div>
                                <div className="w-full md:w-76 h-56 relative overflow-hidden flex-shrink-0 rounded-b-lg">
                                    {/* Image Masking */}
                                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-black/80 via-transparent to-transparent opacity-80" />
                                    <Image
                                        src="/images/post-mortems.png"
                                        alt="Refactoring pain illustration"
                                        fill
                                        className="object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-1000 scale-110 group-hover:scale-100"
                                    />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </SpotlightCard>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoSection;
