'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const CTA = () => {
    return (
        <section className="relative w-full bg-black py-40 px-4 overflow-hidden">
            {/* Background Grid & Decor */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-8"
                >
                    <div className="px-4 py-1.5 border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[10px] uppercase font-bold tracking-[0.4em]">
                        Ready to synthesize
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl text-white tracking-tight mb-8 leading-[1.05]"
                >
                    Build the architecture <br />
                    <span className="text-white/20 font-playfair-italic font-light">you've always debated.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/40 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Join 2,000+ engineering teams who have traded guesswork for precision synthesis.
                    Start your architectural transition today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button className="group relative px-10 py-5 bg-white text-black font-bold text-sm tracking-widest uppercase overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                        <span className="relative z-10 flex items-center gap-3">
                            Start Building Now
                            <Icon icon="ph:arrow-right-bold" className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    <button className="px-10 py-5 border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm tracking-widest uppercase">
                        Book a Workshop
                    </button>
                </motion.div>
            </div>

            {/* Sharp Corner Decors in Section Bounds */}
            <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20" />
            <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/20" />
            <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/20" />
            <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20" />
        </section>
    );
};

export default CTA;
