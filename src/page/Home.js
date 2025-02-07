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
                className="fixed top-0 left-0 w-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${banner})`,
                    height: "100vh",
                    width: "100vw",
                    zIndex: -1,
                    overflowX: 'hidden',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
            >
                <div className={`absolute inset-0 transition-colors duration-700`} />
            </div>

            {/* Content Container - Add max-width and center alignment */}
            <div className="relative max-w-[100vw] mx-auto overflow-x-hidden">
                {/* Video Hero Section */}
                <section className="h-[calc(100vh-60px)] md:h-screen w-full overflow-hidden">
                    <Head />
                </section>

                {/* HeroBanner Section */}
                <section className="min-h-screen bg-transparent w-full overflow-hidden">
                    <HeroBanner />
                </section>

                {/* Rest of the content */}
                <div className="bg-white text-black w-full overflow-hidden">
                    <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
                        <Second />
                    </div>
                    <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
                        <Third />
                    </div>
                    <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
                        <Fourth />
                    </div>
                    <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
                        <Five />
                    </div>
                    <div className="w-full md:w-screen overflow-hidden">
                        <Six />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;