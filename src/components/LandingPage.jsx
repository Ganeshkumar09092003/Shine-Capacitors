import React, { useContext, useEffect } from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import ProductsSection from './ProductsSection';
import ContactSection from './ContactSection';

import IntroOverlay from './IntroOverlay';
import { HeaderContext } from '../App';

const LandingPage = () => {
    const [showOverlay, setShowOverlay] = React.useState(true);
    const [startHero, setStartHero] = React.useState(false);
    const { setIsVisible } = useContext(HeaderContext) || { setIsVisible: () => { } };

    // Hide header on mount, show on cleanup
    useEffect(() => {
        setIsVisible(false);
        return () => setIsVisible(true);
    }, [setIsVisible]);

    const handleHeroReveal = () => {
        // Redundant with timeout but good for safety
        setIsVisible(true);
    };

    // Staggered reveal: Show header 1s after hero starts (while video plays)
    useEffect(() => {
        if (startHero) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000); // 1s delay: Header appears while video plays, before text reveal
            return () => clearTimeout(timer);
        }
    }, [startHero, setIsVisible]);

    const handleTransitionStart = () => {
        // Start hero animation immediately when overlay starts fading
    };

    return (
        <>
            {showOverlay && <IntroOverlay
                onTransitionStart={() => setStartHero(true)}
                onComplete={() => setShowOverlay(false)}
            />}
            <div className="animate-in fade-in duration-700">
                <HeroSection startAnimation={startHero} onReveal={handleHeroReveal} />
                <StatsSection />
                <WhyChooseUsSection />
                <ProductsSection />
                <ContactSection />
            </div >
        </>
    );
};

export default LandingPage;