'use client';

import React, { useState, MouseEvent, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from '@iconify/react';

const PixelSpotlight = ({ color }: { color: string }) => {
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
        <div
            className="absolute inset-0 z-0 pointer-events-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Pixel Grid */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${color} 0%, transparent 60%)`,
                    maskImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAACBJREFUGFdjZEADDAwM/xmYGCB8EB8mABIDicAsYICAIAA9BQYGAjUaswAAAABJRU5ErkJggg==")',
                    maskSize: '4px 4px',
                    WebkitMaskImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAACBJREFUGFdjZEADDAwM/xmYGCB8EB8mABIDicAsYICAIAA9BQYGAjUaswAAAABJRU5ErkJggg==")',
                    WebkitMaskSize: '4px 4px',
                }}
            />

            {/* Ambient Noise / Grain Effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

interface SolutionCardProps {
    children: ReactNode;
    className: string;
    color: string;
    icon: string;
    title: string;
    description: string;
    delay?: number;
}

const SolutionCard = ({ children, className, color, icon, title, description, delay = 0 }: SolutionCardProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
            className={`group relative bg-[#050505] border border-white/10 overflow-hidden flex flex-col ${className}`}
        >
            {/* Pixel Highlight Effect */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                style={{
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${color}22, transparent 80%)`,
                }}
            />

            {/* Pixel Grid Mask Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-0"
                style={{
                    background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, ${color}, transparent 100%)`,
                    maskImage: 'linear-gradient(to right, black 2px, transparent 2px), linear-gradient(to bottom, black 2px, transparent 2px)',
                    maskSize: '3px 3px',
                    WebkitMaskImage: 'linear-gradient(to right, black 2px, transparent 2px), linear-gradient(to bottom, black 2px, transparent 2px)',
                    WebkitMaskSize: '3px 3px',
                }}
            />

            <div className="p-8 flex flex-col h-full relative z-10">
                <div className="h-48 mb-8 relative">
                    {children}
                </div>

                <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <Icon icon={icon} className="text-white/40 group-hover:text-white transition-colors duration-300" width="20" />
                        <h3 className="text-lg font-medium text-white tracking-tight">{title}</h3>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-300">
                        {description}
                    </p>
                </div>
            </div>

            {/* Corner Markers (Sharp) */}
            <div className="absolute top-0 left-0 w-2 h-[1px] bg-white/20 group-hover:bg-white/40 transition-colors" />
            <div className="absolute top-0 left-0 w-[1px] h-2 bg-white/20 group-hover:bg-white/40 transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-[1px] bg-white/20 group-hover:bg-white/40 transition-colors" />
            <div className="absolute top-0 right-0 w-[1px] h-2 bg-white/20 group-hover:bg-white/40 transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-white/20 group-hover:bg-white/40 transition-colors" />
            <div className="absolute bottom-0 left-0 w-[1px] h-2 bg-white/20 group-hover:bg-white/40 transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-white/20 group-hover:bg-white/40 transition-colors" />
            <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-white/20 group-hover:bg-white/40 transition-colors" />
        </motion.div>
    );
};

const SolutionSection = () => {
    return (
        <section className="w-full bg-black py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                        The Architectural <span className="text-white/20 font-light italic">Standard</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl font-light text-lg">
                        Turn guesswork into precision. Our AI-driven suite ensures your codebase remains scalable, maintainable, and pristine—automatically.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Card 1: Component Architecture */}
                    <SolutionCard
                        className="border-r-0 border-b-0 md:border-b"
                        color="#a855f7" // Purple
                        icon="ph:cube-light"
                        title="Semantic Component Isolation"
                        description="Automatically separates UI logic from business concerns using deep dependency analysis."
                        delay={0.1}
                    >
                        <div className="w-full h-full flex flex-col gap-3 justify-center">
                            <div className="h-6 w-3/4 bg-white/5 rounded-full relative overflow-hidden">
                                <motion.div
                                    animate={{ x: [-100, 300] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
                                />
                                <div className="absolute top-1/2 left-4 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full blur-[4px]" />
                            </div>
                            <div className="h-6 w-1/2 self-center bg-white/5 rounded-full relative overflow-hidden">
                                <motion.div
                                    animate={{ x: [300, -100] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                                />
                                <div className="absolute top-1/2 right-4 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full blur-[4px]" />
                            </div>
                            <div className="h-6 w-5/6 bg-white/5 rounded-full relative overflow-hidden">
                                <motion.div
                                    animate={{ x: [-100, 300] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"
                                />
                                <div className="absolute top-1/2 left-8 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full blur-[4px]" />
                            </div>
                        </div>
                    </SolutionCard>

                    {/* Card 2: Folder Structure */}
                    <SolutionCard
                        className="border-r-0 md:border-r-0 border-b-0 md:border-b"
                        color="#3b82f6" // Blue
                        icon="ph:folder-open-light"
                        title="Automated Pattern Enforcement"
                        description="No more tutorial-copying. AI enforces your project's unique architectural patterns in real-time."
                        delay={0.2}
                    >
                        <div className="w-full h-full flex flex-col gap-2 py-4">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="h-1 bg-white/5 w-full relative">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${Math.random() * 60 + 20}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="h-full bg-white/10"
                                    />
                                </div>
                            ))}
                        </div>
                    </SolutionCard>

                    {/* Card 3: Contextual Suggestions */}
                    <SolutionCard
                        className="md:border-b"
                        color="#ef4444" // Red
                        icon="ph:lightning-light"
                        title="Context-Aware Arch-Linter"
                        description="Get structural advice exactly when you need it. High-resolution feedback on every import."
                        delay={0.3}
                    >
                        <div className="w-full h-full flex items-center justify-center p-4">
                            <div className="w-full h-full bg-gradient-to-br from-red-500/40 to-pink-500/10 rounded-lg relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            </div>
                        </div>
                    </SolutionCard>

                    {/* Row 2: Wide Card */}
                    <SolutionCard
                        className="md:col-span-2 border-r-0"
                        color="#22c55e" // Green
                        icon="ph:magic-wand-bold"
                        title="Self-Healing Codebase"
                        description="Identify and resolve technical debt before it becomes a rewrite. Our AI identifies 'refactoring pain' points and offers one-click migrations to modern patterns."
                        delay={0.4}
                    >
                        <div className="flex gap-4 h-full items-center px-4">
                            <div className="flex-1 bg-white/[0.03] p-4 border border-white/5 border-l-red-500/50">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <Icon icon="ph:warning-circle" className="text-red-500" />
                                    </div>
                                    <span className="text-[10px] text-red-500 uppercase tracking-widest font-bold">Debt Detected</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 mt-4" />
                                <div className="h-2 w-2/3 bg-white/5 mt-2" />
                            </div>

                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Icon icon="ph:arrow-right-light" className="text-white/20" width="24" />
                            </motion.div>

                            <div className="flex-1 bg-white/[0.03] p-4 border border-white/5 border-l-green-500/50">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Icon icon="ph:check-circle" className="text-green-500" />
                                    </div>
                                    <span className="text-[10px] text-green-500 uppercase tracking-widest font-bold">Optimized</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 mt-4" />
                                <div className="h-2 w-2/3 bg-white/5 mt-2" />
                            </div>
                        </div>
                    </SolutionCard>

                    {/* Card 5: Analysis */}
                    <SolutionCard
                        className=""
                        color="#f59e0b" // Amber
                        icon="ph:chart-line-up-light"
                        title="Drift Analytics"
                        description="Visualize how your architecture evolves over time. Prevent gradual decay with high-fidelity drift tracking."
                        delay={0.5}
                    >
                        <div className="w-full h-full flex items-end gap-2 px-4 pb-4">
                            {[40, 70, 45, 90, 65, 80].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="flex-1 bg-white/5 relative group/bar"
                                >
                                    <div className="absolute top-0 inset-x-0 h-1 bg-amber-500 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </div>
                    </SolutionCard>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
