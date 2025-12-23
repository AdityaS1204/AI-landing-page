'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Integrations', href: '#collaborative' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 mt-5 px-4 md:px-6">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 border border-white/10 bg-black/50 backdrop-blur-md relative">
                <div className="flex items-center justify-between py-2 md:py-3">
                    <a href="#" className="flex items-center gap-2">
                        <span className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Kreona Assembly</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
                        {navLinks.map((link) => (
                            <a key={link.name} className="hover:text-white transition font-geist uppercase tracking-widest text-[10px] font-bold" href={link.href}>
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <a className="hidden sm:inline-flex text-[10px] uppercase font-bold tracking-widest text-white/80 hover:text-white transition font-geist" href="#">
                            Sign in
                        </a>
                        <a href="#" className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2.5 text-[10px] uppercase font-bold tracking-widest hover:bg-white/10 transition font-geist">
                            Create account
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-white/10 overflow-hidden bg-black"
                        >
                            <nav className="flex flex-col gap-4 p-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                                    <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                                        Sign in
                                    </a>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Header;
