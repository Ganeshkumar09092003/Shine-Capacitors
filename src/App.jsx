import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// Lazy load components
const LandingPage = React.lazy(() => import('./components/LandingPage'));
const ProductPage = React.lazy(() => import('./components/ProductPage'));

// Loading Fallback Component
const PageLoader = () => (
    <div className="fixed inset-0 bg-bg-void flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-t-2 border-l-2 border-cyan-neon rounded-full animate-spin"></div>
            <div className="text-cyan-neon font-mono text-xs tracking-widest animate-pulse">INITIALIZING SYSTEM...</div>
        </div>
    </div>
);

// Wrapper component to handle product lookup
const ProductPageWrapper = () => {
    const { productId } = useParams();
    const product = PRODUCTS.find(p => p.id === productId);

    if (!product) {
        return <div className="text-center py-20 text-2xl text-red-500 font-mono">ERROR: Product not found</div>;
    }

    return <ProductPage product={product} />;
};

const App = () => {
    // Scroll to top on mount (refresh/load)
    React.useEffect(() => {
        window.scrollTo(0, 0);

        // Disable browser's scroll restoration to force top
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-bg-void text-text-primary">
                <Header />
                <main className="flex-grow">
                    <React.Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/product/:productId" element={<ProductPageWrapper />} />
                        </Routes>
                    </React.Suspense>
                </main>
                <Footer />
            </div>
        </BrowserRouter >
    );
};

export default App;
