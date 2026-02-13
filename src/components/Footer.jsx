import React from 'react';
import { COMPANY_INFO } from '../constants';
const logo = "https://res.cloudinary.com/duvo27ycs/image/upload/v1770919250/logo5_kqfxso.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Products',
            links: [
                { label: 'Fan Capacitor', href: '/product/fan-capacitor' },
                { label: 'Motor Capacitor', href: '/product/motor-run-capacitor' },
                { label: 'Lighting Capacitor', href: '/product/lighting-capacitor' },
                { label: 'Heavy Duty', href: '/product/heavy-duty-capacitor' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About Us', href: '/#about' },
                { label: 'Contact', href: '/#contact' },
            ],
        },
    ];

    return (
        <footer className="relative bg-bg-void border-t border-cyan-neon/20 pt-10 pb-6 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-neon/50 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-electric/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">

                    {/* Brand Section */}
                    <div className="flex-1 space-y-4 max-w-sm">
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="relative overflow-hidden p-1">
                                <img src={logo} alt="Shine Capacitors" className='h-10 w-auto object-contain brightness-90 group-hover:brightness-110 transition-all duration-300' />
                            </div>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed font-light text-justify">
                            Precision engineered electronic components for industrial excellence. Over 25 years of powering the future.
                        </p>
                    </div>

                    {/* Links Sections */}
                    <div className="flex gap-12 sm:gap-16">
                        {footerSections.map((section, index) => (
                            <div key={index}>
                                <h5 className="text-cyan-neon font-bold mb-4 text-xs tracking-widest uppercase font-mono">
                                    {section.title}
                                </h5>
                                <ul className="space-y-2 text-xs sm:text-sm">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                className="text-text-secondary hover:text-white transition-colors block py-0.5 relative group"
                                            >
                                                <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-neon">›</span>
                                                <span className="group-hover:translate-x-1 transition-transform inline-block duration-200">
                                                    {link.label}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-center items-center gap-4 text-[10px] sm:text-xs text-text-secondary/50 font-mono uppercase tracking-wider">
                    <p>© {currentYear} {COMPANY_INFO.name}.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;