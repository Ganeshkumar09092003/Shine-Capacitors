import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
                }
            );

            // Staggered Cards Animation
            gsap.fromTo(".product-card",
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)",
                    scrollTrigger: { trigger: gridRef.current, start: "top 85%" }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="products" ref={sectionRef} className="py-24 bg-bg-void relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Compact Header */}
                <div ref={titleRef} className="flex flex-col items-center text-center mb-16 relative">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-cyan-neon/50"></div>
                        <span className="text-cyan-neon text-xs font-mono tracking-[0.3em] uppercase">CATALOG_2026</span>
                        <div className="h-[1px] w-12 bg-cyan-neon/50"></div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-6 relative inline-block">
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-neon to-blue-electric">PRODUCTS</span>
                        {/* Decorative Underline */}
                        <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-neon/50 to-transparent"></div>
                    </h2>

                    <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Precision-engineered capacitors designed for maximum efficiency and industrial reliability.
                    </p>
                </div>

                {/* The Component Rack (Grid/Carousel) */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {PRODUCTS.slice(0, 4).map((product, index) => (
                        <div
                            key={product.id}
                            onClick={() => navigate(`/product/${product.id}`)}
                            className="product-card group relative bg-bg-panel/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-cyan-neon/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,229,255,0.15)] flex flex-col h-[400px]"
                        >
                            {/* Technical Overlay Graphics */}
                            <div className="absolute top-2 right-2 text-[10px] font-mono text-white/20 z-20">MOD_0{index + 1}</div>
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-neon/0 to-transparent group-hover:via-cyan-neon/50 transition-all duration-500"></div>

                            {/* Image Area (Compact) */}
                            <div className="relative h-1/2 p-6 flex items-center justify-center bg-gradient-to-b from-transparent to-black/20">
                                <div className="absolute inset-0 bg-cyan-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-3xl transform scale-50"></div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 ease-out will-change-transform"
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-5 flex flex-col flex-grow bg-black/20 border-t border-white/5 group-hover:border-cyan-neon/10 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-cyan-neon transition-colors line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <span className="material-symbols-outlined text-cyan-neon bg-cyan-neon/10 rounded-full p-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">arrow_outward</span>
                                </div>

                                <div className="text-xs font-mono text-text-secondary mb-3 opacity-60">
                                    {product.specs[0].value}
                                </div>

                                {/* Mini Spec grid */}
                                <div className="mt-auto grid grid-cols-2 gap-2">
                                    {product.specs.slice(1, 3).map((spec, i) => (
                                        <div key={i} className="bg-white/5 rounded px-2 py-1.5 border border-white/5">
                                            <div className="text-[9px] text-text-dim uppercase tracking-wider">{spec.label}</div>
                                            <div className="text-[10px] text-white font-mono truncate">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
