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
            className={`relative group bg-white/[0.02] border backdrop-blur-3xl shadow-2xl overflow-hidden flex flex-col p-10 lg:p-14 transition-all duration-500 
                ${isPopular ? 'border-cyan-500/40 ring-1 ring-cyan-500/20 shadow-cyan-500/10' : 'border-white/5 hover:border-white/20'}`}
        >
            {/* Spotlight Effect */}
            <div
                className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${isPopular ? 'rgba(34,211,238,0.1)' : 'rgba(255,255,255,0.05)'}, transparent 80%)`
                }}
            />

            {/* Corner Markers - Only for Popular/Hovered */}
            <div className={`absolute top-0 left-0 w-4 h-[1px] transition-all duration-700 ${isPopular || isHovered ? 'bg-cyan-500/50' : 'bg-transparent'}`} />
            <div className={`absolute top-0 left-0 w-[1px] h-4 transition-all duration-700 ${isPopular || isHovered ? 'bg-cyan-500/50' : 'bg-transparent'}`} />
            <div className={`absolute bottom-0 right-0 w-4 h-[1px] transition-all duration-700 ${isPopular || isHovered ? 'bg-cyan-500/50' : 'bg-transparent'}`} />
            <div className={`absolute bottom-0 right-0 w-[1px] h-4 transition-all duration-700 ${isPopular || isHovered ? 'bg-cyan-500/50' : 'bg-transparent'}`} />

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10 flex items-center justify-between">
                    <span className={`text-[11px] font-black uppercase tracking-[0.3em] 
                        ${isPopular ? 'text-cyan-400' : 'text-white/40'}`}>
                        {title}
                    </span>
                    {isPopular && (
                        <span className="text-[9px] bg-cyan-400 text-black font-black px-2 py-1 uppercase tracking-tighter">
                            Most Adopted
                        </span>
                    )}
                </div>

                <div className="mb-12">
                    <div className="flex items-baseline gap-1">
                        <span className={`text-6xl md:text-7xl font-bold tracking-tighter transition-colors duration-500 ${isHovered && isPopular ? 'text-cyan-400' : 'text-white'}`}>
                            {price}
                        </span>
                        <span className="text-lg text-white/20 font-playfair-italic">/mo</span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed font-light mt-6 max-w-[240px]">
                        {description}
                    </p>
                </div>

                <div className="space-y-5 mb-14 flex-grow">
                    {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 group/item">
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isPopular ? 'bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'bg-white/10 group-hover/item:bg-white/40'}`} />
                            <span className="text-xs text-white/30 group-hover/item:text-white/70 transition-colors tracking-wide font-light">{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-auto">
                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-5 flex items-center justify-center gap-3 text-[10px] uppercase font-black tracking-[0.2em] transition-all duration-300
                        ${isPopular
                                ? 'bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-cyan-400/40'
                                : 'bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'}`}
                    >
                        {isPopular ? 'Synthesize Now' : 'Initialize Access'}
                        <Icon icon="ph:arrow-right-bold" className="text-sm" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};


const PixelGrid = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: 0.4 }}>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(circle at center, #22d3ee 0.5px, transparent 0.5px)`,
                    backgroundSize: '24px 24px',
                }}
            />
            <motion.div
                className="absolute inset-0 bg-black"
                style={{
                    maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), transparent 0%, black 100%)',
                    WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), transparent 0%, black 100%)',
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                    backgroundSize: '4px 4px',
                    opacity: 0.8
                }}
            />
        </div>
    );
};

const PricingSection = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
    const sectionRef = React.useRef<HTMLElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
        sectionRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section
            id="pricing"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="w-full bg-black py-40 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
        >
            <PixelGrid />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl text-white tracking-tight mb-8"
                    >
                        Pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto"
                    >
                        Flexible plans designed for teams of all sizes.
                        Start for free and scale as you grow.
                    </motion.p>

                    {/* Toggle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center p-1 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full"
                    >
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-white text-black shadow-xl' : 'text-white/40 hover:text-white'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-white text-black shadow-xl' : 'text-white/40 hover:text-white'}`}
                        >
                            Yearly
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${billingCycle === 'yearly' ? 'bg-black/10 text-black' : 'bg-cyan-500/10 text-cyan-400'}`}>-20%</span>
                        </button>
                    </motion.div>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
