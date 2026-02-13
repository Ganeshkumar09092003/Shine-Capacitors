import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const capacitorImage = "https://res.cloudinary.com/duvo27ycs/image/upload/v1770919116/Capacitor_k2mgpe.png";
const capacitorVideo = "https://res.cloudinary.com/duvo27ycs/image/upload/v1770919936/ezgif.com-video-to-webp-converter_2_t1fdky.webp";

// CONFIGURATION: strict 3.5-second delay for the reveal
const REVEAL_DELAY_MS = 4000;

const HeroSection = ({ startAnimation = false, onReveal }) => {
    const heroRef = useRef(null);
    const videoRef = useRef(null);
    const contentRef = useRef(null);
    const mainTextRef = useRef(null);
    const subTextRef = useRef(null);
    const ctaRef = useRef(null);
    const capacitorRef = useRef(null);
    const [showUI, setShowUI] = useState(false);

    // Initial Setup: Hide UI elements completely
    useEffect(() => {
        gsap.set(contentRef.current, { autoAlpha: 0 }); // Hidden initially
        gsap.set(mainTextRef.current, { y: 50, opacity: 0 });
        gsap.set(subTextRef.current, { y: 30, opacity: 0 });
        gsap.set(ctaRef.current, { y: 30, opacity: 0 });
        gsap.set(capacitorRef.current, { x: 50, opacity: 0, filter: 'blur(10px)' });
    }, []);

    // The Reveal Timer Logic
    useEffect(() => {
        if (!startAnimation) return;

        // Reset video to start (force reload to restart animation if needed)
        // For simple img src switch or just relying on loop:
        // If we really want it to "start" now, we might need to re-mount it or similar, 
        // but since it's an image, let's just assume the 6s delay is what's key.

        const timer = setTimeout(() => {
            setShowUI(true);
            playRevealSequence();
            if (onReveal) onReveal();
        }, REVEAL_DELAY_MS);

        return () => clearTimeout(timer);
    }, [startAnimation, onReveal]);

    const playRevealSequence = () => {
        const tl = gsap.timeline();

        // Phase 1: Show Content Container (Background remains as is)
        tl.to(contentRef.current, {
            autoAlpha: 1,
            duration: 1.5, // Smoother fade in
            ease: "power2.out"
        }, "reveal");

        // Phase 3: Staggered Reveal of Text Elements
        tl.to(mainTextRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }, "reveal+=0.2");

        tl.to(subTextRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        }, "reveal+=0.4"); // 0.2s after headline

        tl.to(ctaRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "reveal+=0.6"); // 0.2s after subtext

        // Capacitor Floating Entry (Optional but nice)
        if (capacitorRef.current) {
            tl.to(capacitorRef.current, {
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1.2,
                ease: "power3.out"
            }, "reveal+=0.5");
        }
    };

    const scrollToProducts = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-bg-void flex items-center justify-center">
            {/* 0.0s - 4.0s: The Raw Hook (Fullscreen Video) */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                {startAnimation && (
                    <img
                        ref={videoRef}
                        src={capacitorVideo}
                        alt="Capacitor Animation"
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover"
                    />
                )}
                {/* Overlay only visible after reveal starts, handled by GSAP brightness filter or an overlay div */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-[1500ms] pointer-events-none ${showUI ? 'opacity-40' : 'opacity-0'}`}></div>
            </div>

            {/* Content Container (Revealed after 4s) */}
            <div
                ref={contentRef}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center invisible"
            >
                {/* Text Content */}
                <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">


                    <h1 ref={mainTextRef} className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 text-white font-display uppercase drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        Industrial <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-neon to-blue-electric drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                            Power
                        </span>
                    </h1>

                    <div className="relative lg:pl-6 lg:border-l border-white/10">
                        <p ref={subTextRef} className="text-lg sm:text-xl text-gray-300 font-light max-w-lg leading-relaxed mb-8 mix-blend-screen">
                            High-fidelity motor run capacitors engineered for extreme electrical stress resistance and 99.9% reliability.
                        </p>
                    </div>

                    <div ref={ctaRef} className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                        <button
                            onClick={scrollToProducts}
                            className="group relative px-8 py-4 bg-transparent overflow-hidden"
                        >
                            {/* Glass Button Background */}
                            <div className="absolute inset-0 bg-cyan-neon/5 backdrop-blur-md border border-cyan-neon/50 skew-x-[-15deg] group-hover:bg-cyan-neon/20 transition-all duration-300 ease-out"></div>

                            <span className="relative z-10 flex items-center gap-3 font-bold tracking-widest text-cyan-neon uppercase text-sm group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-lg">bolt</span>
                                Initialize System
                            </span>
                        </button>

                        {/* <button
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                            className="group relative px-6 py-4 text-xs font-mono tracking-[0.2em] text-gray-400 uppercase hover:text-white transition-colors duration-300"
                        >
                            <span className="relative z-10">Documentation</span>
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-neon group-hover:w-full transition-all duration-500 ease-out"></div>
                        </button> */}
                    </div>
                </div>

                {/* Visual Content (Capacitor) */}
                <div ref={capacitorRef} className="lg:col-span-5 relative mt-12 lg:mt-0 hidden lg:block">
                    {/* Glass Backing */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transform rotate-3 scale-95 opacity-50 -z-10"></div>

                    <div className="relative z-10 p-2">
                        <img
                            src={capacitorImage}
                            alt="Industrial Capacitor"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] filter contrast-125 hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-white/10 animate-pulse transition-opacity duration-1000 ${showUI ? 'opacity-100' : 'opacity-0'}`}>
                <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
            </div>
        </section>
    );
};

export default HeroSection;