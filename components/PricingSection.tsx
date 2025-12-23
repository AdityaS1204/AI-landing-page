'use client';

import React, { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const PricingCard = ({
    title,
    price,
    description,
    features,
    isPopular,
    delay = 0
}: {
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    delay?: number;
}) => {
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
            className={`relative group bg-[#050505] border shadow-2xl overflow-hidden flex flex-col p-8 lg:p-12 transition-colors duration-500 
                ${isPopular ? 'border-cyan-500/30 ring-1 ring-cyan-500/10' : 'border-white/10'}`}
        >
            {/* Spotlight Effect */}
            <div
                className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${isPopular ? 'rgba(34,211,238,0.08)' : 'rgba(255,255,255,0.03)'}, transparent 80%)`
                }}
            />

            {/* Background Grid */}
            <div className={`absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] ${isPopular ? 'opacity-[0.05]' : ''}`} />

            {/* Corner Markers */}
            <div className={`absolute top-0 left-0 w-2 h-[1px] ${isPopular ? 'bg-cyan-500/50' : 'bg-white/20'}`} />
            <div className={`absolute top-0 left-0 w-[1px] h-2 ${isPopular ? 'bg-cyan-500/50' : 'bg-white/20'}`} />
            <div className={`absolute top-0 right-0 w-2 h-[1px] ${isPopular ? 'bg-cyan-500/50' : 'bg-white/20'}`} />
            <div className={`absolute top-0 right-0 w-[1px] h-2 ${isPopular ? 'bg-cyan-500/50' : 'bg-white/20'}`} />
            <div className={`absolute bottom-0 left-0 w-2 h-[1px] ${isPopular ? 'bg-cyan-500/50' : 'bg-white/20'}`} />
            <div className={`absolute bottom-0 left-0 w-[1px] h-2 ${isPopular ? 'bg-cyan-500/50' : 'bg-white/20'}`} />
            <div className={`absolute bottom-0 right-0 w-2 h-[1px] ${isPopular ? 'bg-cyan-500/50' : 'bg-white/20'}`} />
            <div className={`absolute bottom-0 right-0 w-[1px] h-2 ${isPopular ? 'bg-cyan-500/50' : 'bg-white/20'}`} />

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                    <div className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border transition-colors 
                        ${isPopular ? 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5 shadow-[0_0_15px_rgba(34,211,238,0.1)]' : 'text-white/40 border-white/10'}`}>
                        {title}
                    </div>
                </div>

                <div className="mb-10 min-h-[160px] flex items-center justify-center relative">
                    <div className={`text-6xl lg:text-7xl font-bold tracking-tighter transition-colors ${isHovered && isPopular ? 'text-cyan-400' : 'text-white'}`}>
                        {price}<span className="text-xl text-white/20 font-light tracking-normal">/mo</span>
                    </div>
                    {isPopular && (
                        <div className="absolute inset-0 bg-cyan-500/10 blur-[60px] rounded-full scale-50 opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                    )}
                </div>

                <div className="mb-10 text-center lg:text-left">
                    <p className="text-white/40 text-sm leading-relaxed font-light mb-8">
                        {description}
                    </p>
                    <div className="space-y-4">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 group/item">
                                <Icon icon="ph:check-circle-light" className={`text-sm ${isPopular ? 'text-cyan-500/50' : 'text-white/20'}`} />
                                <span className="text-[11px] text-white/30 group-hover/item:text-white/60 transition-colors uppercase tracking-wider">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-auto pt-8 flex justify-end">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 flex items-center justify-center transition-all duration-300
                        ${isPopular ? 'bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'bg-white/5 text-white/40 border border-white/10 hover:border-white/20 hover:text-white'}`}
                    >
                        <Icon icon="ph:arrow-up-right-bold" className="text-xl" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

const PricingSection = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <section className="w-full bg-black py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6"
                    >
                        Simple, transparent pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 text-lg md:text-xl font-light mb-12"
                    >
                        For studios, startups and solo makers using Kreona Studio.
                    </motion.p>

                    {/* Toggle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center p-1 bg-[#111] border border-white/5 rounded-full"
                    >
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-white/10 text-white shadow-xl' : 'text-white/40 hover:text-white'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-white/10 text-white shadow-xl' : 'text-white/40 hover:text-white'}`}
                        >
                            Yearly
                            <span className="text-[9px] text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-1.5 py-0.5 rounded-full">-20%</span>
                        </button>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 lg:gap-0 lg:divide-x divide-white/5 border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                    <PricingCard
                        title="Light"
                        price={billingCycle === 'monthly' ? '$0' : '$0'}
                        description="Fundamental structural analysis for solo developers and experimentation."
                        features={['Basic Synthesis', 'Community Support', 'Static Analysis']}
                        delay={0.1}
                    />
                    <PricingCard
                        title="Most Popular"
                        price={billingCycle === 'monthly' ? '$49' : '$39'}
                        description="Unlock full architectural suites, collaborative drafting, and real-time review units."
                        features={['Production Synthesis', 'Team Multiplayer', '85% lighter builds', 'Pattern Enforcement']}
                        isPopular
                        delay={0.2}
                    />
                    <PricingCard
                        title="Pro"
                        price={billingCycle === 'monthly' ? '$99' : '$79'}
                        description="High-performance architecture at scale with dedicated isolation and custom policies."
                        features={['Custom Policies', 'SSO/SAML Integration', 'Dedicated Compute', 'VIP Support']}
                        delay={0.3}
                    />
                </div>

            </div>
        </section>
    );
};

export default PricingSection;
