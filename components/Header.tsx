'use client';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 mt-5 px-6" data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; header:nth-of-type(1)">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 border border-white/10 bg-black/50 backdrop-blur-md">
                <div className="flex items-center justify-between py-2">
                    <a href="#" className="flex items-center gap-2">
                        <span className="text-white font-bold text-[10px] uppercase tracking-widest">Kreona Assembly</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
                        <a className="hover:text-white transition font-geist uppercase tracking-widest text-[10px] font-bold" href="#">
                            Features
                        </a>
                        <a className="hover:text-white transition font-geist uppercase tracking-widest text-[10px] font-bold" href="#">
                            Solutions
                        </a>
                        <a className="hover:text-white transition font-geist uppercase tracking-widest text-[10px] font-bold" href="#">
                            Integrations
                        </a>
                        <a className="hover:text-white transition font-geist uppercase tracking-widest text-[10px] font-bold" href="#">
                            Pricing
                        </a>
                    </nav>
                    <div className="flex items-center gap-3">
                        <a className="hidden sm:inline-flex text-[10px] uppercase font-bold tracking-widest text-white/80 hover:text-white transition font-geist" href="#">
                            Sign in
                        </a>
                        <a href="#" className="inline-flex items-center gap-2 border-gradient before:rounded-none bg-white/5 px-4 py-2.5 text-[10px] uppercase font-bold tracking-widest hover:bg-white/10 transition font-geist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4">
                                <path d="m10 17 5-5-5-5" className=""></path>
                                <path d="M15 12H3" className=""></path>
                                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" className=""></path>
                            </svg>
                            Create account
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header