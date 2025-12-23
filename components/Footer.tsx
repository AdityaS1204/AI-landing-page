'use client';

import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="w-full bg-black pt-32 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">

                    {/* Brand Column */}
                    <div className="col-span-2 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white flex items-center justify-center">
                                <Icon icon="ph:square-half-bottom-fill" className="text-black text-xl" />
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-white uppercase">Kreona</span>
                        </div>
                        <p className="max-w-xs text-white/30 text-sm leading-relaxed font-light">
                            Synthesizing the future of frontend architecture through deep semantic analysis and AI-driven precision.
                        </p>
                        <div className="flex items-center gap-4">
                            {['ph:twitter-logo-light', 'ph:github-logo-light', 'ph:discord-logo-light'].map((icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all">
                                    <Icon icon={icon} className="text-white/40 hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-[10px] text-white/20 uppercase font-bold tracking-[0.3em] mb-8">Platform</h4>
                        <ul className="space-y-4">
                            {['Synthesis Engine', 'Multiplayer Mode', 'Clean Export', 'Architecture DRI'].map(link => (
                                <li key={link}><a href="#" className="text-[13px] text-white/40 hover:text-white transition-colors font-light">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] text-white/20 uppercase font-bold tracking-[0.3em] mb-8">Company</h4>
                        <ul className="space-y-4">
                            {['About System', 'Research Papers', 'Careers', 'Brand Assets'].map(link => (
                                <li key={link}><a href="#" className="text-[13px] text-white/40 hover:text-white transition-colors font-light">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] text-white/20 uppercase font-bold tracking-[0.3em] mb-8">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Protocol', 'Service Agreement', 'Cookie Policy', 'Security Info'].map(link => (
                                <li key={link}><a href="#" className="text-[13px] text-white/40 hover:text-white transition-colors font-light">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6 text-[11px] text-white/20 font-mono">
                        <span>© 2025 KREONA SYSTEMS.</span>
                        <span className="hidden md:block select-none">/</span>
                        <a href="mailto:core@kreona.ai" className="hover:text-white/40 transition-colors">CORE@KREONA.AI</a>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-[10px] text-green-400 uppercase tracking-widest font-mono font-bold">
                        <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                        SYSTEMS NOMINAL
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
