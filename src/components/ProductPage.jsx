import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { APPLICATIONS } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductPage = ({ product }) => {
    const navigate = useNavigate();
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [product]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(".p-breadcrumb", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8 })
                .fromTo(".p-hero-image", { opacity: 0, scale: 0.9, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1 }, "-=0.6")
                .fromTo(".p-hero-content", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1 }, "-=0.8")
                .fromTo(".p-spec-card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 }, "-=0.6");

            gsap.fromTo(".p-specs-table", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".p-specs-table", start: "top 85%" } });
            gsap.fromTo(".p-feature-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, scrollTrigger: { trigger: ".p-features", start: "top 80%" } });
            gsap.fromTo(".p-cta", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, scrollTrigger: { trigger: ".p-cta", start: "top 85%" } });
        }, containerRef);
        return () => ctx.revert();
    }, [product]);

    const scrollToContact = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div ref={containerRef} className="relative overflow-hidden min-h-screen pt-24 pb-20">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand-deep/10 rounded-full blur-[150px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-glow-mid/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="p-breadcrumb flex items-center gap-2 mb-10 text-sm text-text-secondary font-medium opacity-0">
                    <button onClick={() => navigate('/')} className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-brand-glow-light transition-all group cursor-pointer">
                        <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back
                    </button>
                    <span className="w-1 h-1 bg-border-subtle rounded-full"></span>
                    <button onClick={() => { navigate('/'); setTimeout(() => { document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-brand-glow-light transition-all cursor-pointer">
                        Products
                    </button>
                    <span className="material-symbols-outlined text-xs text-border-subtle">chevron_right</span>
                    <span className="px-3 py-2 text-brand-glow-light font-bold text-glow">{product.name}</span>
                </nav>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
                    <div className="lg:col-span-5 p-hero-image opacity-0 sticky top-32">
                        <div className="relative aspect-square w-full max-w-md mx-auto rounded-[2rem] bg-surface-glass border border-white/10 overflow-hidden shadow-2xl group animate-float-slow">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="eager" />
                            <div className="absolute top-6 right-6 z-20">
                                <span className="px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/10 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-xl">{product.category}</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 p-hero-content opacity-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <div className="mb-2">
                            <div className="inline-flex flex-wrap items-center gap-3 mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-deep/20 border border-brand-deep/40 rounded-full text-xs font-bold text-brand-glow-light uppercase tracking-wider shadow-[0_0_10px_rgba(158,240,26,0.2)]">
                                    <span className="w-1.5 h-1.5 bg-brand-glow-light rounded-full animate-pulse" />
                                    In Stock
                                </span>
                                {product.standard && <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-text-secondary uppercase tracking-wider"><span className="material-symbols-outlined text-sm">verified</span>IS Standard</span>}
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">{product.name}</h1>
                        <div className="prose prose-invert max-w-none text-lg text-text-secondary mb-10 font-light leading-relaxed">
                            <p>{product.description}</p>
                            <p className="mt-4 text-base opacity-80 border-l-2 border-brand-glow-mid/30 pl-4 italic">Engineered for high-performance applications requiring superior reliability and long-term durability.</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-10">
                            {product.specs.map((spec, idx) => (
                                <div key={idx} className="p-spec-card bg-surface-glass border border-white/5 rounded-2xl p-5 hover:border-brand-glow-mid/30 transition-all group hover:-translate-y-1 hover:bg-white/5">
                                    <div className="flex items-center gap-2 mb-2 text-text-secondary/60 text-xs font-bold uppercase tracking-widest group-hover:text-brand-glow-mid transition-colors">{spec.label}</div>
                                    <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-glow-light transition-colors group-hover:text-glow">{spec.value}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/5">
                            <button onClick={scrollToContact} className="btn-premium-solid flex items-center justify-center gap-2 text-center"><span className="material-symbols-outlined">request_quote</span>Request Quote</button>
                        </div>
                    </div>
                </section>

                {product.detailedSpecs && (
                    <section className="p-specs-table mb-20 opacity-0 max-w-5xl mx-auto">
                        <div className="glass-panel overflow-hidden rounded-2xl border border-white/10">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[640px]">
                                    <thead>
                                        <tr className="bg-white/5 text-xs text-text-secondary uppercase tracking-widest font-semibold">
                                            <th className="px-6 py-5">Capacitance</th>
                                            <th className="px-6 py-5">Tolerance</th>
                                            <th className="px-6 py-5">Dimensions (mm)</th>
                                            {product.detailedSpecs[0]?.voltage && <th className="px-6 py-5">Voltage</th>}
                                            {product.detailedSpecs[0]?.tempRange && <th className="px-6 py-5">Temp Range</th>}

                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {product.detailedSpecs.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-6 py-5 font-bold text-white group-hover:text-brand-glow-light transition-colors group-hover:text-glow">{row.capacitance}</td>
                                                <td className="px-6 py-5 text-text-secondary">{row.tolerance}</td>
                                                <td className="px-6 py-5 text-text-secondary font-mono text-xs">{row.dimensions}</td>
                                                {row.voltage && <td className="px-6 py-5 text-text-secondary">{row.voltage}</td>}
                                                {row.tempRange && <td className="px-6 py-5 text-text-secondary">{row.tempRange}</td>}

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                )}

                <section className="p-features grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20 max-w-6xl mx-auto">
                    <div className="p-feature-card glass-panel p-8 rounded-[2rem] hover:border-brand-glow-mid/30 transition-all opacity-0">
                        <div className="w-12 h-12 rounded-full bg-brand-deep/20 flex items-center justify-center mb-6 border border-brand-deep/30">
                            <span className="material-symbols-outlined text-brand-glow-light">verified_user</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
                        <ul className="space-y-4">
                            {product.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 group">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-glow-mid group-hover:bg-brand-glow-light transition-colors shadow-[0_0_8px_rgba(158,240,26,0.5)]"></span>
                                    <span className="text-text-secondary group-hover:text-white transition-colors leading-relaxed text-sm lg:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-feature-card glass-panel p-8 rounded-[2rem] hover:border-brand-glow-mid/30 transition-all opacity-0">
                        <div className="w-12 h-12 rounded-full bg-brand-deep/20 flex items-center justify-center mb-6 border border-brand-deep/30">
                            <span className="material-symbols-outlined text-brand-glow-light">settings_power</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-6">Typical Applications</h3>
                        <div className="flex flex-wrap gap-2">
                            {(() => {
                                const appsToShow = product.applications ||
                                    (product.detailedSpecs
                                        ? Array.from(new Set(product.detailedSpecs.map(s => s.application).filter(Boolean)))
                                        : APPLICATIONS);

                                const isSpecific = !!product.applications;
                                const isDerived = !isSpecific && product.detailedSpecs;

                                return appsToShow.map((app, index) => (
                                    isDerived ? (
                                        <div key={index} className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 hover:border-brand-glow-mid/30 hover:bg-white/10 transition-all cursor-default text-sm text-text-secondary hover:text-white">
                                            {app}
                                        </div>
                                    ) : (
                                        <div key={index} className="px-4 py-3 bg-white/5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/10 transition-all cursor-default flex items-center gap-3 group w-full sm:w-auto">
                                            <span className="material-symbols-outlined text-brand-glow-mid text-xl group-hover:scale-110 transition-transform">{app.icon}</span>
                                            <span className="text-sm font-medium text-text-secondary">{app.label}</span>
                                        </div>
                                    )
                                ));
                            })()}
                        </div>
                    </div>
                </section>

                <div className="p-cta relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-deep/30 via-bg-void to-brand-deep/10 border border-white/10 p-10 sm:p-20 text-center opacity-0 max-w-5xl mx-auto">
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-glow">Ready to Optimize Your Systems?</h2>
                        <p className="text-text-secondary mb-10 max-w-2xl mx-auto text-lg">Contact our engineering team for custom solutions, technical datasheets, and bulk pricing availability.</p>
                        <button onClick={scrollToContact} className="btn-premium-solid px-12 py-4 text-lg inline-flex items-center gap-3 shadow-[0_0_20px_rgba(112,224,0,0.2)]">Get Started<span className="material-symbols-outlined">arrow_forward</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;