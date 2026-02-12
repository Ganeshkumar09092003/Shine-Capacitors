import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
const logo = "https://res.cloudinary.com/duvo27ycs/image/upload/v1770919250/logo5_kqfxso.png";
// Import the context effectively (assuming it's exported from App.jsx or similar, but for now accessing via relative import if circular dep avoided, or just expecting it)
import { HeaderContext } from '../App';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Consume context, default to visible if context missing (safety)
    const { isVisible } = useContext(HeaderContext) || { isVisible: true };

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (href.includes('#')) {
            const sectionId = href.split('#')[1];

            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            } else {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        } else {
            navigate(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                } ${isScrolled
                    ? 'bg-bg-void/90 border-b border-cyan-neon/20 backdrop-blur-md py-2'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative">

                {/* HUD Decor elements */}
                <div className="absolute left-0 bottom-0 w-2 h-2 border-b border-l border-cyan-neon hidden sm:block"></div>
                <div className="absolute right-0 bottom-0 w-2 h-2 border-b border-r border-cyan-neon hidden sm:block"></div>

                {/* Logo */}
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-3 group relative"
                >
                    <div className="relative p-3 bg-bg-panel/80 backdrop-blur-md rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all duration-300">
                        {/* Corner Accents for Logo */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-neon"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-neon"></div>

                        <img src={logo} alt="Shine Capacitors" loading="eager" decoding="async" className='h-8 sm:h-10 w-auto object-contain' />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-12">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href, link.id)}
                            className="relative text-sm font-bold tracking-[0.15em] text-text-secondary hover:text-cyan-neon transition-colors duration-300 group uppercase font-mono"
                        >
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 text-cyan-neon">[</span>
                            {link.label}
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3 text-cyan-neon">]</span>

                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-cyan-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[0_0_8px_#00E5FF]"></span>
                        </a>
                    ))}
                    <button
                        onClick={(e) => handleNavClick(e, '/#contact', 'contact')}
                        className="relative px-6 py-2 overflow-hidden border border-cyan-neon/50 text-cyan-neon font-bold tracking-wider text-sm hover:bg-cyan-neon/10 transition-all duration-300 group"
                    >
                        <span className="relative z-10">CONTACT // US</span>
                        <div className="absolute inset-0 bg-cyan-neon/20 transform -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>

                        {/* Corner Accents */}
                        <span className="absolute top-0 left-0 w-1 h-1 bg-cyan-neon"></span>
                        <span className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-neon"></span>
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-cyan-neon hover:text-white transition-colors border border-cyan-neon/30 bg-cyan-neon/5"
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-bg-void/95 backdrop-blur-xl border-b border-cyan-neon/30 lg:hidden">
                    <div className="flex flex-col p-6 gap-2">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href, link.id)}
                                className="text-lg font-bold text-text-primary hover:text-cyan-neon hover:bg-cyan-neon/10 py-4 px-6 border-l-2 border-transparent hover:border-cyan-neon transition-all font-mono tracking-widest"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;