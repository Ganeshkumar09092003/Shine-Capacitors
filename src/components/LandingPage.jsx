import React from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import ProductsSection from './ProductsSection';
import ContactSection from './ContactSection';

const LandingPage = () => {
    return (
        <div className="animate-in fade-in duration-700">
            <HeroSection />
            <StatsSection />
            <WhyChooseUsSection />
            <ProductsSection />
            <ContactSection />
        </div>
    );
};

export default LandingPage;