import React, { useState, useEffect } from 'react';
import banner from '../assets/homebanner.jpg';
import HeroBanner from '../components/home/HeroBanner';
import Second from '../components/home/Second';
import { Third } from '../components/home/Third';
import Fourth from '../components/home/Fourth';
import Five from '../components/home/Five';
import Six from '../components/home/Six';
import Head from '../components/home/Head';
import { motion, useScroll, useSpring } from 'framer-motion';

const Home = () => {
    const [activeSection, setActiveSection] = useState(0);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Improved scroll detection
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const handleScroll = () => {
            const pageTop = window.scrollY;
            const pageBottom = pageTop + window.innerHeight;
            const targetPosition = pageTop + (window.innerHeight * 0.5); // Middle of viewport

            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + pageTop;
                const sectionBottom = sectionTop + rect.height;

                if (targetPosition >= sectionTop && targetPosition < sectionBottom) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll handler
    const scrollToSection = (index) => {
        const sections = document.querySelectorAll('section');
        const section = sections[index];
        if (section) {
            const offset = section.offsetTop;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative text-white overflow-x-hidden cursor-none">
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
                style={{ scaleX }}
            />

            {/* Navigation dots removed */}

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
                <section className="h-screen mt-28 w-full overflow-hidden snap-start">
                    <HeroBanner />
                    {/* <Head /> */}
                </section>

                {/* Other sections with consistent spacing and animations */}
                {/* <motion.section className="min-h-screen w-full overflow-hidden py-20">
                </motion.section> */}

                <motion.div
                    className="bg-white/95 backdrop-blur-sm text-black w-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.section className="px-4 md:px-8">
                        <Second />
                    </motion.section>

                    <motion.section className="px-4 md:px-8">
                                    <h1 className='text-2xl md:text-5xl text-center font-medium mb-8 md:mb-12'>
                Farmers' Voice : What they Say about Us
            </h1>
                        <Third />
                    </motion.section>

                    <motion.section className="px-4 md:px-8 py-20">
                        <Fourth />
                    </motion.section>

                    {/* <motion.section className="px-4 md:px-8 py-20">
                        <Five />
                    </motion.section> */}

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