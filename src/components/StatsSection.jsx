import React, { useRef, useEffect } from 'react';
import { STATS } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ stat, index }) => {
    return (
        <div className="glass-panel p-8 text-center group hover-lift transition-all duration-700 opacity-0 scale-90">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-glow-light to-brand-glow-mid bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(158,240,26,0.3)]">
                {stat.value}
            </div>
            <p className="text-sm sm:text-base font-medium text-text-secondary uppercase tracking-widest group-hover:text-text-primary transition-colors">
                {stat.label}
            </p>
        </div>
    );
};

const StatsSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".glass-panel", {
                opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.5)",
                scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 sm:py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-glow-mid/10 rounded-full blur-[100px] animate-pulse-slow" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                    {STATS.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;