'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const CollaborativeSection = () => {
    return (
        <section className="w-full bg-black py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-40">

                {/* Feature 1: Live Collaborative Logic */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 relative aspect-square lg:aspect-video overflow-hidden group bg-[#050505] border border-white/10"
                    >
                        {/* Corner Markers */}
                        <div className="absolute top-0 left-0 w-2 h-[1px] bg-white/40" />
                        <div className="absolute top-0 left-0 w-[1px] h-2 bg-white/40" />
                        <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/40" />
                        <div className="absolute top-0 right-0 w-[1px] h-2 bg-white/40" />
                        <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-white/40" />
                        <div className="absolute bottom-0 left-0 w-[1px] h-2 bg-white/40" />
                        <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-white/40" />
                        <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-white/40" />

                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

                        {/* Central Scene */}
                        <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">
                            <motion.div
                                whileHover={{ rotateX: 5, rotateY: 5 }}
                                className="relative w-72 h-44 bg-[#0D0D0D] border border-white/10 shadow-2xl rotate-x-12 -rotate-y-12 flex flex-col transition-all duration-700 p-1 group-hover:border-purple-500/30"
                            >
                                {/* Window UI */}
                                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/20" />
                                    </div>
                                    <div className="w-12 h-1 bg-white/5 rounded-full ml-auto" />
                                </div>
                                <div className="flex-1 p-3 grid grid-cols-2 gap-3 relative">
                                    <div className="bg-purple-500/5 border border-purple-500/10 rounded group-hover:bg-purple-500/10 transition-colors" />
                                    <div className="bg-blue-500/5 border border-blue-500/10 rounded" />

                                    {/* Threaded Comment Popup */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            opacity: [0, 1, 1, 0]
                                        }}
                                        transition={{ duration: 6, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
                                        className="absolute -right-20 -top-8 bg-[#1A1A1A] border border-white/10 p-3 shadow-2xl w-44 z-30"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-[8px] flex items-center justify-center font-bold">JD</div>
                                            <span className="text-[8px] text-white/40">Architectural Review</span>
                                        </div>
                                        <p className="text-[10px] text-white/80 leading-snug font-light">
                                            Should we inject this context at the root or per-feature?
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Cursors */}
                            <Cursor name="Sarah" color="#A855F7" delay={0} />
                            <Cursor name="Marcus" color="#22C55E" delay={1.5} />
                        </div>

                        {/* Status Bar */}
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-white/5 flex items-center justify-center text-[10px] font-bold">
                                        {['S', 'M', '+2'][i - 1]}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-400 uppercase tracking-widest font-mono font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                Interactive Review Mode
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="mb-6 flex items-center gap-2">
                            <div className="w-1 h-1 bg-purple-500" />
                            <span className="text-[10px] text-purple-500/80 font-bold uppercase tracking-widest">Multiplayer Logic</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">
                            Live Collaborative <span className="text-white/20 italic font-light">Architecture</span>
                        </h3>
                        <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
                            Work together on complex state machines and folder structures in real-time.
                            Vote on patterns, share component states, and resolve structural debt without a single screen share.
                        </p>
                        <ul className="space-y-5">
                            {['Structural cursors & live drafting', 'Threaded spatial decision logs', 'Real-time branching for pattern trials'].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 group cursor-default">
                                    <div className="w-5 h-5 flex items-center justify-center border border-purple-500/20 bg-purple-500/5 group-hover:bg-purple-500/20 transition-colors">
                                        <Icon icon="ph:check-bold" className="text-purple-500 text-xs" />
                                    </div>
                                    <span className="text-sm text-white/60 font-light group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Feature 2: Production-Ready Synthesis */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-2 relative aspect-square lg:aspect-video overflow-hidden group bg-[#050505] border border-white/10"
                    >
                        {/* Corner Markers */}
                        <div className="absolute top-0 left-0 w-2 h-[1px] bg-white/40" />
                        <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/40" />
                        <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-white/40" />
                        <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-white/40" />

                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

                        {/* Production Synthesis Visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full max-w-lg h-60 px-8 flex items-center justify-between">
                                {/* Synthesis Lines SVG */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                    <defs>
                                        <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#22C55E" stopOpacity="0" />
                                            <stop offset="50%" stopColor="#22C55E" />
                                            <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M 50 80 Q 200 80, 250 120" stroke="white" strokeWidth="0.5" fill="none" />
                                    <path d="M 50 120 Q 200 120, 250 120" stroke="white" strokeWidth="0.5" fill="none" />
                                    <path d="M 50 160 Q 200 160, 250 120" stroke="white" strokeWidth="0.5" fill="none" />
                                </svg>

                                <div className="flex flex-col gap-4 z-10">
                                    {['GEOMETRY', 'TEXTURING', 'OPTIMIZATION'].map((label, i) => (
                                        <div key={i} className="flex items-center gap-3 p-2 bg-[#111] border border-white/5 shadow-xl w-32">
                                            <div className="w-6 h-6 bg-white/5 flex items-center justify-center">
                                                <Icon icon={i === 0 ? "ph:triangle" : i === 1 ? "ph:image" : "ph:lightning"} className="text-white/40 group-hover:text-green-500 transition-colors" />
                                            </div>
                                            <span className="text-[8px] font-mono font-bold text-white/30 tracking-widest">{label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative h-20 w-20 flex items-center justify-center z-10">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border border-green-500/20 border-dashed rounded-full"
                                    />
                                    <div className="w-14 h-14 bg-[#0D0D0D] border border-green-500/40 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                                        <Icon icon="ph:shield-check-bold" className="text-green-500 text-2xl" />
                                    </div>
                                </div>

                                <div className="z-10 w-44 bg-[#0D0D0D] border border-green-500/30 p-4 shadow-3xl">
                                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                                        <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase">PRODUCTION UNIT</span>
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]" />
                                    </div>
                                    <div className="space-y-2">
                                        <StatRow label="Mesh Compression" val="Instanced" />
                                        <StatRow label="Texture Baking" val="KTX2 / 4K" />
                                        <StatRow label="Logic Minification" val="85.4% Saved" color="text-green-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-1"
                    >
                        <div className="mb-6 flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-500" />
                            <span className="text-[10px] text-green-500/80 font-bold uppercase tracking-widest">Synthesis Engine</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">
                            Production-Ready <span className="text-white/20 italic font-light">Synthesis</span>
                        </h3>
                        <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
                            Beyond standard code generation. Our engine compresses structural logic, bakes state management, and optimizes for RSC performance out of the box.
                            The result is 85% lighter than manual refactoring.
                        </p>
                        <button className="group relative px-6 py-3 border border-white/10 hover:border-green-500/50 transition-all text-sm text-white/60 hover:text-white flex items-center gap-3">
                            <span className="relative z-10">Read the architectural paper</span>
                            <Icon icon="ph:arrow-right-light" className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

const Cursor = ({ name, color, delay }: { name: string, color: string, delay: number }) => (
    <motion.div
        animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay }}
        className="absolute z-20 pointer-events-none"
    >
        <div className="flex flex-col items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill={color} style={{ transform: 'rotate(-20deg)' }}>
                <path d="M5.5 3.21l10.8 5.4a1 1 0 0 1 .16 1.7l-4.2 2.1 2.1 4.2a1 1 0 0 1-1.8.9l-2.1-4.2-4.2 2.1a1 1 0 0 1-1.45-1.09l1.69-11.11z" />
            </svg>
            <div className="bg-neutral-900 border border-white/10 px-2 py-0.5 mt-1">
                <span className="text-[9px] font-bold text-white px-1" style={{ color }}>{name}</span>
            </div>
        </div>
    </motion.div>
);

const StatRow = ({ label, val, color }: { label: string, val: string, color?: string }) => (
    <div className="flex justify-between items-center text-[9px] font-mono">
        <span className="text-white/30 uppercase tracking-tighter">{label}</span>
        <span className={color || "text-white/60"}>{val}</span>
    </div>
);

export default CollaborativeSection;
