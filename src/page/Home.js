import React, { useState, useEffect } from 'react';
import banner from '../assets/homebanner.webp';
import HeroBanner from '../components/home/HeroBanner';
import Second from '../components/home/Second';
import { Third } from '../components/home/Third';
import Fourth from '../components/home/Fourth';
import Five from '../components/home/Five';
import Six from '../components/home/Six';
import Head from '../components/home/Head';

const Home = () => {
    const [darkOverlay, setDarkOverlay] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Get scroll position
            const scrollPosition = window.scrollY;
            // Get height of viewport
            const viewportHeight = window.innerHeight;

            // Change overlay when scroll position exceeds viewport height
            setDarkOverlay(scrollPosition > viewportHeight * 0.8);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative overflow-x-hidden">
            {/* Background Image - Only visible after first section */}
            <div
                className="fixed top-0 left-0 w-full bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: `url(${banner})`,
                    height: "100vh",
                    zIndex: -1,
                    opacity: darkOverlay ? 1 : 0,
                    transition: 'opacity 0.7s ease-in-out'
                }}
            >
                <div className={`absolute inset-0 transition-colors duration-700 ${darkOverlay ? 'bg-black/50' : 'bg-black/20'}`} />
            </div>

            {/* Content Sections */}
            <div className="relative">
                {/* Video Hero Section - Full height */}
                <section className="h-screen">
                    <Head />
                </section>

                {/* HeroBanner Section - Starts after video */}
                <section className="min-h-screen bg-transparent">
                    <HeroBanner />
                </section>

                {/* Rest of the content */}
                <div className="bg-white text-black">
                    <div className="container mx-auto px-4 py-16">
                        <Second />
                    </div>
                    <div className="container mx-auto px-4 py-16">
                        <Third />
                    </div>
                    <div className="container mx-auto px-4 py-16">
                        <Fourth />
                    </div>
                    <div className="container mx-auto px-4 py-16">
                        <Five />
                    </div>
                    <div className="w-screen">
                        <Six />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;