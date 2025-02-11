import React, { useState, useEffect } from 'react';
import banner from '../assets/homebanner.webp';
import HeroBanner from '../components/home/HeroBanner';
import Second from '../components/home/Second';
import { Third } from '../components/home/Third';
import Fourth from '../components/home/Fourth';
import Five from '../components/home/Five';
import Six from '../components/home/Six';
import Head from '../components/home/Head';
import { motion, useScroll, useSpring } from 'framer-motion';
import Cursor from '../components/common/Cursor';

const Home = () => {
    const [activeSection, setActiveSection] = useState(0);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Detect active section based on scroll
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            sections.forEach((section, index) => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                if (scrollPosition >= top && scrollPosition < bottom) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative overflow-x-hidden cursor-none">
            <Cursor />
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
                style={{ scaleX }}
            />

            {/* Navigation dots */}
            <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
                {['Head', 'HeroBanner', 'Second', 'Third', 'Fourth', 'Five', 'Six'].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => document.querySelectorAll('section')[index].scrollIntoView({ behavior: 'smooth' })}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            activeSection === index ? 'bg-yellow-400 scale-150' : 'bg-gray-400 hover:bg-yellow-200'
                        }`}
                    />
                ))}
            </div>

            {/* Background Image with parallax */}
            <div className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${banner})`,
                    transform: `translateY(${scrollYProgress.get() * 50}px)`,
                    zIndex: -1
                }}
            >
                <div className={`absolute inset-0 bg-black transition-opacity duration-700 
                    ${activeSection > 1 ? 'opacity-50' : 'opacity-0'}`} 
                />
            </div>

            {/* Content sections */}
            <div className="relative">
                {/* Video Hero Section */}
                <section className="h-screen w-full overflow-hidden snap-start">
                    <Head />
                </section>

                {/* Other sections with consistent spacing and animations */}
                <motion.section 
                    className="min-h-screen w-full overflow-hidden snap-start py-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <HeroBanner />
                </motion.section>

                <motion.div 
                    className="bg-white/95 backdrop-blur-sm text-black w-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.section className="container mx-auto px-4 md:px-8 py-20">
                        <Second />
                    </motion.section>

                    <motion.section className="container mx-auto px-4 md:px-8 py-20">
                        <Third />
                    </motion.section>

                    <motion.section className="container mx-auto px-4 md:px-8 py-20">
                        <Fourth />
                    </motion.section>

                    <motion.section className="px-4 md:px-8 py-20">
                        <Five />
                    </motion.section>

                    <motion.section className="w-full py-20">
                        <Six />
                    </motion.section>
                </motion.div>
            </div>

            {/* Section connectors */}
            <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent -translate-x-1/2 z-10" />
        </div>
    );
};

export default Home;