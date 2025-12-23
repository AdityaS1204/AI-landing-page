'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from '@iconify/react';

const faqs = [
    {
        question: "How does the AI understand our existing architectural patterns?",
        answer: "Our Synthesis Engine performs a deep semantic scan of your directory structure, import graphs, and component boundaries. It generates an 'Architecture Fingerprint' that maps your team's specific habits and elevates them into a consistent project policy."
    },
    {
        question: "Is Kreona compatible with large-scale Next.js mono-repos?",
        answer: "Yes. Kreona is built for complexity. It has native support for Turborepo, NX, and standard Next.js directory structures, with specialized optimization layers for React Server Components (RSC) and server actions."
    },
    {
        question: "Does the AI move my code files automatically?",
        answer: "Security and stability come first. Kreona suggests refactorings through an interactive blueprint mode. You review the proposed structural changes in a 3D visual workspace before executing them with a single click."
    },
    {
        question: "How does 'self-healing' actually work?",
        answer: "It continuously monitors for 'architectural drift'—instances where new code deviates from your project's defined patterns. When drift is detected, the system provides real-time linting and instant fix suggestions to bring the code back into alignment."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="w-full bg-black py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20 space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-white/40" />
                        <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-bold">Inquiries</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl text-white tracking-tight leading-tight">
                        Deep <span className="text-white/20 font-playfair-italic font-light">Technical</span> Insights.
                    </h2>
                </div>

                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-white/5 bg-transparent transition-all duration-500 overflow-hidden ${openIndex === index ? 'bg-white/[0.02] border-white/10' : 'hover:bg-white/[0.01]'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-10 flex items-center justify-between text-left group"
                            >
                                <span className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-500 ${openIndex === index ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-10 h-10 border border-white/10 flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-45 border-white/30' : ''}`}>
                                    <Icon icon="ph:plus-light" className="text-white/40" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-10">
                                            <div className="max-w-2xl">
                                                <p className="text-white/40 text-sm md:text-base leading-relaxed font-light">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
