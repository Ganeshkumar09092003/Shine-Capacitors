import React, { useEffect, useState } from 'react';
const capacitorVideo = "https://res.cloudinary.com/duvo27ycs/image/upload/v1770919936/ezgif.com-video-to-webp-converter_2_t1fdky.webp";
const logo = "https://res.cloudinary.com/duvo27ycs/image/upload/v1770919250/logo5_kqfxso.png";

const IntroOverlay = ({ onComplete, onTransitionStart }) => {
    const [progress, setProgress] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);


    useEffect(() => {
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
            if (onTransitionStart) onTransitionStart(); // Trigger start of next scene
            setTimeout(onComplete, 800); // Wait for fade out animation
        }, 3500); // Total duration

        return () => {
            clearInterval(interval);

            clearTimeout(timer);
        };
    }, [onComplete, onTransitionStart]);

    return (
        <div
            className={`fixed inset-0 z-[100] bg-bg-void flex flex-col items-center justify-center transition-opacity duration-800 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            {/* Background Video/Image */}
            {/* Preload Hero Video/Image */}
            <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', opacity: 0 }}>
                <img src={capacitorVideo} alt="preload" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-6">

                {/* Logo */}
                <div className="mb-12 relative group">
                    <div className="absolute inset-0 bg-cyan-neon/10 blur-xl rounded-full animate-pulse"></div>
                    <img
                        src={logo}
                        alt="Shine Capacitors"
                        loading="eager"
                        decoding="async"
                        className="h-24 w-auto object-contain relative z-10"
                    />
                </div>



                {/* Progress Bar */}
                <div className="w-full mb-2">
                    <div className="flex justify-between text-xs font-mono text-cyan-neon mb-1">
                        <span>Loading...</span>
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

            </div>
        </div>
    );
};

export default IntroOverlay;
