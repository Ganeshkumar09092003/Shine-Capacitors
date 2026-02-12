import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook for anti-gravity scroll-based floating effects
 * @param {number} intensity - Float intensity multiplier (default: 0.1)
 * @param {boolean} enabled - Whether the effect is enabled (default: true)
 * @returns {Object} - { scrollY, getFloatStyle, isVisible }
 */
export const useScrollFloat = (intensity = 0.1, enabled = true) => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const rafRef = useRef(null);

    const handleScroll = useCallback(() => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        rafRef.current = requestAnimationFrame(() => {
            setScrollY(window.scrollY);
        });
    }, []);

    useEffect(() => {
        if (!enabled) return;

        window.addEventListener('scroll', handleScroll, { passive: true });
        setIsVisible(true);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [handleScroll, enabled]);

    const getFloatStyle = useCallback((customIntensity = intensity) => ({
        transform: `translateY(${scrollY * customIntensity}px)`,
        transition: 'transform 0.1s ease-out'
    }), [scrollY, intensity]);

    return { scrollY, getFloatStyle, isVisible };
};

/**
 * Hook for intersection observer based animations
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} - [ref, isIntersecting]
 */
export const useIntersectionAnimation = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                }
            },
            { threshold: 0.1, rootMargin: '50px', ...options }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isIntersecting];
};

export default useScrollFloat;
