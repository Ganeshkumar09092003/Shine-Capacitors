import React, { useEffect, useState } from 'react';
import capacitorVideo from '../assets/Capacitor_video.mp4';
import logo from '../assets/logo5.png';

const IntroOverlay = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [bootText, setBootText] = useState([]);

    const bootLines = [
        "INITIALIZING CORE SYSTEM...",
        "CHECKING CAPACITOR INTEGRITY...",
        "LOADING DIELECTRIC MODULES...",
        "POWER FACTOR CORRECTION: OK",
        "ESTABLISHING SECURE CONNECTION...",
    ];

    useEffect(() => {
        // Boot text sequence
        let lineIndex = 0;
        const textInterval = setInterval(() => {
            if (lineIndex < bootLines.length) {
                setBootText(prev => [...prev, bootLines[lineIndex]]);
                lineIndex++;
            } else {
                clearInterval(textInterval);
            }
        }, 500);

        // Progress bar animation
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2; // Adjust speed here
            });
        }, 50);

        // Completion timer
        const timer = setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 800); // Wait for fade out animation
        }, 3500); // Total duration

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[100] bg-bg-void flex flex-col items-center justify-center transition-opacity duration-800 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    src={capacitorVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20 scale-105"
                />
                <div className="absolute inset-0 bg-bg-void/80" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-6">

                {/* Logo */}
                <div className="mb-12 relative group">
                    <div className="absolute inset-0 bg-cyan-neon/10 blur-xl rounded-full animate-pulse"></div>
                    <img
                        src={logo}
                        alt="Shine Capacitors"
                        className="h-24 w-auto object-contain  relative z-10"
                    />
                </div>

                {/* Loading Text */}
                <div className="flex flex-col items-start gap-1 mb-8 w-full font-mono text-xs sm:text-sm text-cyan-neon/80 h-32 overflow-hidden border border-cyan-neon/20 p-4 bg-bg-panel/50 backdrop-blur-sm rounded-sm">
                    {bootText.map((line, index) => (
                        <div key={index} className="typewriter">
                            <span className="text-white mr-2">root@shine-sys:~#</span>
                            {line}
                        </div>
                    ))}
                    <div className="animate-flicker">_</div>
                </div>

                {/* Progress Bar */}
                <div className="w-full mb-2">
                    <div className="flex justify-between text-xs font-mono text-cyan-neon mb-1">
                        <span>SYSTEM LOAD</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-bg-panel border border-cyan-neon/30 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-cyan-neon relative shadow-[0_0_10px_#00E5FF]"
                            style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                        >
                            <div className="absolute right-0 top-0 bottom-0 w-full bg-gradient-to-l from-white/50 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Decorative Tech Elements */}
                <div className="absolute bottom-[-50px] left-0 right-0 flex justify-between text-[10px] text-text-dim font-mono uppercase tracking-widest px-2">
                    <span>SECURE BOOT ENABLED</span>
                    <span>VER 2.5.0-ALPHA</span>
                </div>
            </div>
        </div>
    );
};

export default IntroOverlay;
