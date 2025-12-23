'use client';

import { motion } from "motion/react";
import { Terminal, PenTool, Box, MessageSquare, Search, ArrowRight, Zap } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-black flex flex-col items-center justify-start pt-40 px-4 overflow-hidden bg-zinc-950">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `linear-gradient(to right, #80808089 1px, transparent 1px), linear-gradient(to bottom, #80808090 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

            {/* Margin Lines - Vertical */}
            {[
                { side: 'left', pos: 'left-[12%]' },
                { side: 'right', pos: 'right-[12%]' }
            ].map((config) => (
                <div key={config.side} className={`absolute top-0 ${config.pos} w-[1px] h-full z-0 pointer-events-none bg-white/5 hidden md:block`}>
                    <motion.div
                        initial={{ y: "-100%", opacity: 0, scaleY: 0 }}
                        animate={{
                            y: ["-100%", "0%", "200%", "300%"],
                            opacity: [0, 1, 1, 0],
                            scaleY: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.9, 1]
                        }}
                        className="w-full h-40 bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.6)] origin-bottom"
                    />
                </div>
            ))}

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="z-10 mb-10"
            >
                <div className="px-4 py-1.5 rounded-none border border-blue-500/40 bg-blue-500/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">NEW V2.0 ASSEMBLY</span>
                </div>
            </motion.div>

            {/* Main Heading - Corrected Gradient */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="z-10 text-center max-w-5xl mb-12"
            >
                <h1 className="text-4xl md:text-8xl font-black tracking-tight leading-[1.1] mb-8">
                    <span className="bg-gradient-to-b from-slate-50 via-slate-200 to-slate-500 bg-clip-text text-transparent inline-block font-thin ">
                        AI-Powered Code &
                    </span><br />
                    <span className="bg-gradient-to-b from-slate-400 via-slate-600 to-slate-800 bg-clip-text text-transparent inline-block font-thin">
                        <span className="font-playfair-italic">Architecture</span> Design
                    </span>
                </h1>
                <p className="text-white/50 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide px-4">
                    Kreona Studio is your source for high-quality, scalable web assembly.
                    Generate components, create designs, and chat with AI in seconds.
                </p>
            </motion.div>

            {/* CTA Button Area with Converging Lines */}
            <div className="relative z-20 w-full flex items-center justify-center mb-32 h-20">
                {/* Left Converging Line */}
                <div className="absolute left-0 right-[55%] h-[1px] bg-white/5 z-0 pointer-events-none overflow-hidden hidden md:block">
                    <motion.div
                        animate={{ x: ['-100%', '300%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        className="w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] mt-[0.5px]"
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 md:px-12 py-4 bg-zinc-800 border border-white/80 text-white font-black tracking-[0.4em] text-[10px] md:text-[11px] uppercase transition-all rounded-none z-10"
                >
                    Start Building Free
                </motion.button>

                {/* Right Converging Line */}
                <div className="absolute right-0 left-[55%] h-[1px] bg-white/5 z-0 pointer-events-none overflow-hidden hidden md:block">
                    <motion.div
                        animate={{ x: ['300%', '-100%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        className="w-1/2 h-[1px] bg-gradient-to-l from-transparent via-blue-500 to-transparent blur-[1px] mt-[0.5px]"
                    />
                </div>
            </div>

            {/* Interactive Feature Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

                    {/* Features - Mobile Top / Desktop Left */}
                    <div className="order-2 lg:order-1 lg:col-span-3 flex flex-row lg:flex-col gap-8 md:gap-20 lg:gap-40 items-center lg:items-end justify-center lg:pr-20">
                        <FeatureItem icon={Terminal} label="Code Gen" />
                        <FeatureItem icon={Box} label="Components" />
                    </div>

                    {/* Central Terminal Area */}
                    <div className="order-1 lg:order-2 col-span-1 lg:col-span-6 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="group relative w-full"
                        >
                            {/* Terminal Window - SHARP CORNERS */}
                            <div className="rounded-none border border-white/10 bg-zinc-950 p-1.5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden w-full max-w-[700px] mx-auto">
                                <div className="absolute inset-0 border border-blue-500/10 rounded-none pointer-events-none" />

                                <div className="bg-zinc-800 mb-px p-4 md:p-5 min-h-[120px] md:min-h-[150px] flex flex-col justify-between w-full">
                                    <textarea className="text-white/30 font-mono text-sm md:text-base leading-relaxed max-w-[95%] resize-none outline-none w-full bg-transparent" placeholder="ASK: Generate a complex component architecture..."></textarea>
                                </div>
                                <div className="pt-6 md:pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                                    <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
                                        <div className="w-10 h-10 md:w-12 md:h-11 rounded-none border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all cursor-pointer">
                                            <Zap className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-blue-400" />
                                        </div>
                                        <div className="flex-1 md:flex-none px-4 md:px-6 py-[10px] md:py-[12px] rounded-none border border-white/10 bg-white/5 flex items-center gap-2 md:gap-3 group-hover:border-blue-500/20 transition-all cursor-pointer">
                                            <Search className="w-4 h-4 text-white/30" />
                                            <span className="text-white/30 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase group-hover:text-blue-400 truncate">/Search-Command</span>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                                        className="w-full md:w-12 h-10 md:h-11 rounded-none border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    >
                                        <ArrowRight className="w-5 h-5 text-white/50" />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Decorative Lines Above/Below */}
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent hidden md:block" />
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-80 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent hidden md:block" />
                        </motion.div>
                    </div>

                    {/* Features - Mobile Bottom / Desktop Right */}
                    <div className="order-3 lg:col-span-3 flex flex-row lg:flex-col gap-8 md:gap-20 lg:gap-40 items-center lg:items-start justify-center lg:pl-20">
                        <FeatureItem icon={PenTool} label="Design Sys" />
                        <FeatureItem icon={MessageSquare} label="AI Support" />
                    </div>
                </div>
            </div>

            {/* Background Decorative Blur */}
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1400px] h-[600px] bg-blue-600/[0.03] blur-[180px] rounded-full z-0 pointer-events-none" />
        </section>
    );
};

const FeatureItem = ({ icon: Icon, label }: { icon: any, label: string }) => (
    <motion.div
        whileHover={{ y: -8 }}
        className="flex flex-col gap-4 items-center"
    >
        <motion.div
            animate={{
                backgroundColor: ["rgba(255, 255, 255, 0.05)", "rgba(63, 63, 70, 0.3)", "rgba(255, 255, 255, 0.05)"],
                borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.1)"],
                boxShadow: [
                    "0 0 0px rgba(255, 255, 255, 0)",
                    "0 0 15px rgba(255, 255, 255, 0.05)",
                    "0 0 0px rgba(255, 255, 255, 0)"
                ]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
            }}
            className="w-20 h-20 border flex items-center justify-center rounded-none hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer group shadow-black"
        >
            <Icon className="w-8 h-8 text-white/30 group-hover:text-blue-400 transition-colors" />
        </motion.div>
        <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em]">{label}</span>
    </motion.div>
);

export default HeroSection;