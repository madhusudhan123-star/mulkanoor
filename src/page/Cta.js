import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaUsers, FaRupeeSign, FaSeedling } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import card1 from '../assets/cta/card1.png';
import card2 from '../assets/cta/card2.png';

const Cta = () => {
    // Counter animation state and logic
    const [isInView, setIsInView] = useState(false);
    const statsRef = useRef(null);

    // Impact metrics data
    const impactMetrics = [
        {
            id: 1,
            icon: <FaUsers className="text-4xl md:text-5xl text-green-600" />,
            value: 15000,
            suffix: "+",
            label: "Farmers Empowered",
            description: "Members who have benefited directly from our cooperative model"
        },
        {
            id: 2,
            icon: <FaRupeeSign className="text-4xl md:text-5xl text-green-600" />,
            value: 220,
            suffix: " Crores",
            label: "Credit Facilitated",
            description: "Financial support provided to our farmer members"
        },
        {
            id: 3,
            icon: <FaSeedling className="text-4xl md:text-5xl text-green-600" />,
            value: 40000,
            suffix: "+",
            label: "Acres Cultivated",
            description: "Land sustainably farmed each season"
        }
    ];

    // Animated counter component with much faster animation
    const Counter = ({ value, suffix = "", duration = 1.5 }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isInView) return;

            let start = 0;
            const end = parseInt(value);

            // Determine step size based on number magnitude
            // Larger numbers use larger steps to finish around the same time
            const stepSize = Math.max(1, Math.floor(end / 100));
            const totalSteps = Math.ceil(end / stepSize);
            const incrementTime = (duration * 1000) / totalSteps;

            // Don't run if end value is zero or negative
            if (end <= 0) return;

            // Timer to increment counter with larger steps for bigger numbers
            let timer = setInterval(() => {
                start = Math.min(start + stepSize, end);
                setCount(start);
                if (start >= end) clearInterval(timer);
            }, incrementTime);

            // Clean up
            return () => {
                clearInterval(timer);
            };
        }, [value, duration, isInView]);

        return <span>{count}{suffix}</span>;
    };

    // Intersection observer to trigger animations when scrolled into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.25 }
        );

        const currentRef = statsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className="min-h-screen pt-16 md:pt-24">
            <Helmet>
                <title>Mulkanoor - Our Impact</title>
                <meta name="description" content="Discover Mulkanoor Cooperative's impact through sustainable farming, financial empowerment, and community development. See our progress in numbers."/>
            </Helmet>
            
            {/* Main Content */}
            <div className="py-16 md:py-20 bg-gradient-to-br from-[#F5F5DC]/40 to-white/90">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl cursor-default md:text-4xl font-medium text-center text-[#005A32] mb-8">
                            Empowering Farmers, Enriching Communities
                        </h2>

                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-yellow-200">
                            <p className="text-gray-700 cursor-default leading-relaxed mb-6 text-lg md:text-xl">
                                Driving holistic progress to uplift farmers, their families, and the community,
                                Mulkanoor Cooperative Society stands as a beacon of trust, collaboration, and
                                innovation. Over decades, the society has transformed the lives of countless
                                farming families by providing them with access to modern agricultural practices,
                                fair financial opportunities, and reliable market linkages.
                            </p>

                            <p className="text-gray-700 cursor-default leading-relaxed mb-6 text-lg md:text-xl">
                                By fostering sustainable farming techniques, offering education and training,
                                and ensuring equitable profit-sharing, Mulkanoor has created a thriving ecosystem
                                where farmers are not just participants but empowered stakeholders.
                            </p>

                            <p className="text-gray-700 cursor-default leading-relaxed text-lg md:text-xl font-medium">
                                "Together, we thrive as one family, rooted in trust, unity, and mutual growth."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Before & After Transformation Section */}
            <div className="py-16 md:py-20 bg-gradient-to-br from-white to-[#F5F5DC]/30">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl cursor-default md:text-4xl font-medium text-[#005A32] mb-3">
                            Our Transformation Journey
                        </h2>
                        <p className="text-gray-600 cursor-default max-w-2xl mx-auto">
                            Witness the remarkable evolution of our cooperative and its positive impact on the community
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="overflow-hidden rounded-xl shadow-lg border-2 border-[#98fb98]/30 h-80 md:h-96">
                                <img 
                                    src={card1} 
                                    alt="Before - Initial farming conditions" 
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                />
                            </div>
                            <div className="absolute top-4 left-4 bg-[#005A32] text-white py-2 px-4 rounded-lg font-medium">
                                BEFORE
                            </div>
                            <div>
                                <h1 className='text-center text-gray-600 text-2xl mt-2 cursor-default max-w-2xl mx-auto'>Poor farmers in dire situations</h1>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="overflow-hidden rounded-xl shadow-lg border-2 border-[#98fb98]/30 h-80 md:h-96">
                                <img 
                                    src={card2} 
                                    alt="After - Improved agricultural practices" 
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                />
                            </div>
                            <div className="absolute top-4 right-4 bg-green-600 text-white py-2 px-4 rounded-lg font-medium">
                                AFTER
                            </div>
                            <div>
                                <h1 className='text-center text-gray-600 text-2xl mt-2 cursor-default max-w-2xl mx-auto'>Smiles of Prosperity</h1>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Impact Metrics Section */}
            <div id="impact" className="py-16 md:py-24 bg-gradient-to-br from-[#005A32]/10 to-[#98fb98]/20">
                <div className="container mx-auto px-4 md:px-8" ref={statsRef}>
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl cursor-default md:text-4xl font-medium text-[#005A32] mb-3">
                            Our Impact in Numbers
                        </h2>
                        <p className="text-gray-600 cursor-default max-w-2xl mx-auto">
                            Every number represents countless lives touched and communities strengthened through our collective efforts
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {impactMetrics.map((metric, index) => (
                            <motion.div
                                key={metric.id}
                                className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#98fb98]/30 text-center hover:shadow-xl transition-shadow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-center mb-4">{metric.icon}</div>
                                <h3 className="text-4xl cursor-default md:text-5xl font-bold text-[#005A32] mb-3">
                                    {isInView ? <Counter value={metric.value} suffix={metric.suffix} /> : '0'}
                                </h3>
                                <h4 className="text-xl cursor-default font-medium text-gray-800 mb-3">{metric.label}</h4>
                                <p className="text-gray-600">{metric.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    {/* <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/discover/story"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#005A32] text-white rounded-full font-medium text-lg hover:bg-[#004525] transition-colors shadow-lg"
                        >
                            Discover Our Full Story <FaChevronRight />
                        </Link>
                    </motion.div> */}
                </div>
            </div>
        </div>
    );
};

export default Cta;