import React, { useRef, useEffect } from 'react';
import { FEATURES } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ feature, index }) => {
    return (
        <div className="feature-card glass-panel p-8 group hover-lift transition-all duration-500 opacity-0 translate-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-deep/20 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-brand-glow-mid/30">
                <span className="material-symbols-outlined text-3xl text-brand-glow-mid group-hover:text-brand-glow-light transition-colors drop-shadow-[0_0_8px_rgba(112,224,0,0.5)]">
                    {feature.icon}
                </span>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-glow-light transition-colors">
                {feature.title}
            </h3>
            <p className="text-text-secondary leading-relaxed text-sm group-hover:text-text-primary transition-colors">
                {feature.description}
            </p>
        </div>
    );
};

const WhyChooseUsSection = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: headerRef.current, start: "top 80%" } }
            );

            gsap.fromTo(".feature-card",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".features-grid", start: "top 75%" } }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const benefits = [
        { icon: 'bolt', label: 'High Performance' },
        { icon: 'local_shipping', label: 'Fast Delivery' },
        { icon: 'support_agent', label: '24/7 Support' },
    ];

    return (
        <section ref={sectionRef} className="py-20 sm:py-24 relative" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div ref={headerRef} className="text-center mb-16 opacity-0">
                    <span className="text-sm font-bold text-brand-glow-mid tracking-[0.2em] uppercase">
                        Why Shine Capacitors
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                        Built for <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">Industrial Demands</span>
                    </h2>
                    <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
                        Our capacitors are engineered to withstand extreme conditions, delivering consistent performance in the most demanding industrial environments.
                    </p>
                </div>

                <div className="features-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {benefits.map((item, index) => (
                        <div key={index} className="glass-panel flex items-center justify-center lg:justify-start gap-4 p-5 hover:bg-white/5 transition-all duration-300 cursor-default border-l-2 border-transparent hover:border-l-brand-glow-mid">
                            <span className="material-symbols-outlined text-2xl text-brand-glow-mid animate-float-slow" style={{ animationDelay: `${index * 0.5}s` }}>
                                {item.icon}
                            </span>
                            <span className="font-semibold text-text-primary tracking-wide">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;