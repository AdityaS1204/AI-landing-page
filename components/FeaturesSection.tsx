'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from '@iconify/react';

const bentoItems = [
    {
        id: 1,
        className: "lg:col-span-1 lg:row-span-2 bg-[#0A0A0A] border border-white/5 p-8 flex flex-col justify-between group",
        content: (
            <>
                <div className="space-y-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-7xl font-bold text-white tracking-tighter">10x</span>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em]">Velocity</span>
                            <div className="h-[2px] w-8 bg-cyan-400/30" />
                        </div>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed font-light mt-8">
                        Accelerate development. Go from raw idea to deployed frontend in seconds.
                    </p>
                </div>
                <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
                    />
                </div>
            </>
        )
    },
    {
        id: 2,
        className: "lg:col-span-1 lg:row-span-1 bg-[#0A0A0A] border border-white/5 p-6 flex flex-col items-start gap-4 group hover:bg-white/[0.02] transition-colors relative overflow-hidden",
        content: (
            <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg">
                    <Icon icon="ph:eye-light" className="text-white/40 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">Real-time Visuals</span>
                    <Icon icon="ph:arrow-up-right" className="text-white/20 group-hover:text-white/60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
            </>
        )
    },
    {
        id: 3,
        className: "lg:col-span-1 lg:row-span-1 bg-[#0A0A0A] border border-white/5 p-6 flex flex-col items-start gap-4 group hover:bg-white/[0.02] transition-colors relative overflow-hidden",
        content: (
            <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg">
                    <Icon icon="ph:code-light" className="text-white/40 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">Clean Code Export</span>
                    <Icon icon="ph:arrow-up-right" className="text-white/20 group-hover:text-white/60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
            </>
        )
    },
    {
        id: 4,
        className: "lg:col-span-2 lg:row-span-2 bg-[#0A0A0A] border border-white/5 p-8 relative overflow-hidden group min-h-[300px]",
        content: (
            <div className="relative h-full w-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                    </div>
                    <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">Generating...</span>
                </div>

                <div className="flex-1 flex items-center justify-center relative">
                    <div className="w-full max-w-sm aspect-video bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-center relative">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-4 bg-cyan-400/5 blur-xl rounded-full"
                        />
                        <Icon icon="ph:lightning-fill" className="text-cyan-400/30 text-4xl" />

                        <div className="absolute bottom-4 left-4 right-4 space-y-2">
                            <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-cyan-400/40 w-full"
                                    initial={{ x: "-100%" }}
                                    whileInView={{ x: "0%" }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                                />
                            </div>
                            <div className="h-1 bg-white/5 w-2/3 rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400" />
                        <span className="text-[10px] text-white/40 uppercase tracking-widest">Processing Prompt</span>
                    </div>
                    <span className="text-[10px] text-white/20 font-mono italic">0.8s</span>
                </div>
            </div>
        )
    }
];

const features = [
    {
        title: "Natural Language Prompts",
        description: "Describe your vision: \"A dark mode SaaS landing page with a pricing grid,\" and watch Kreona build it pixel-perfectly."
    },
    {
        title: "Production-Ready Code",
        description: "Clean, semantic HTML and Tailwind CSS. No lock-in, just code you can ship."
    },
    {
        title: "Responsive by Default",
        description: "Every generated layout is mobile-optimized and adapts to any screen size automatically."
    }
];

const FeaturesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="features" className="w-full bg-black py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

                {/* LEFT: BENTO GRID */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 gap-4">
                    {bentoItems.map((item) => (
                        <div key={item.id} className={item.className}>
                            {item.content}
                        </div>
                    ))}
                </div>

                {/* RIGHT: TEXT INTERACTION */}
                <div className="lg:w-[450px] flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-1 bg-white/40" />
                        <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-bold">Capabilities</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl text-white tracking-tight mb-16 leading-tight">
                        full-featured <span className="font-playfair-italic text-white/40">websites.</span>
                    </h2>

                    <div className="relative space-y-12">
                        {/* Moving Side Line */}
                        <motion.div
                            className="absolute -left-8 top-0 w-[1px] bg-cyan-400"
                            initial={false}
                            animate={{
                                height: 60, // Fixed height for the active line segment
                                y: activeIndex * 128 + 4 // 128 is rough height of each feature block
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="absolute inset-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                        </motion.div>

                        {/* Feature List */}
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group cursor-pointer relative"
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <h3 className={`text-xl font-medium transition-colors duration-500 mb-4 ${activeIndex === index ? 'text-white' : 'text-white/20'}`}>
                                    {feature.title}
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-white/40 text-sm leading-relaxed font-light">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Placeholder text to maintain height when inactive if needed, 
                                    but here we use active state for a 'reveal' effect */}
                                {activeIndex !== index && (
                                    <div className="h-0 invisible">
                                        <p className="text-sm font-light">{feature.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <button className="bg-white text-black px-8 py-4 rounded-none font-medium text-sm hover:bg-white/90 transition-all flex items-center justify-center w-full md:w-auto">
                            Start Building for Free
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;
