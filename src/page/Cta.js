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
                                THEN
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
                                NOW
                            </div>
                            <div>
                                <h1 className='text-center text-gray-600 text-2xl mt-2 cursor-default max-w-2xl mx-auto'>Smiles of Prosperity</h1>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="py-16 md:py-20 bg-gradient-to-br from-[#F5F5DC]/40 to-white/90">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl cursor-default md:text-4xl font-medium text-[#005A32] mb-3">
                            Our Community Initiatives
                        </h2>
                        <p className="text-gray-600 cursor-default max-w-2xl mx-auto">
                            Beyond agriculture, we focus on holistic community development
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                            className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#98fb98]/30 hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 text-[#005A32]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Village Electrification</h3>
                            <p className="text-gray-600">
                                Our villages were electrified much earlier than the surrounding villages which was undertook by the society as a vital responsibility.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#98fb98]/30 hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 text-[#005A32]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Drinking Water</h3>
                            <p className="text-gray-600">
                                The society collaborated with NGOs to ensure access to clean drinking water by installing RO plants in villages, improving the health and well-being of the community.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#98fb98]/30 hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 text-[#005A32]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Eye Cataract Operations and Health Camps</h3>
                            <p className="text-gray-600">
                                For the welfare and moral support to the senior members we undertake eye cataract operations free of cost. The society also conducts member health camps.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#98fb98]/30 hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 text-[#005A32]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Animal Health Camps</h3>
                            <p className="text-gray-600">
                                In collaboration with government veterinary experts the society organizes animal health camps to create member awareness to maximize the livestock productivity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cta;
            // {/* Impact Metrics Section */}
            // <div id="impact" className="py-16 md:py-24 bg-gradient-to-br from-[#005A32]/10 to-[#98fb98]/20">
            //     <div className="container mx-auto px-4 md:px-8" ref={statsRef}>
            //         <motion.div
            //             className="text-center mb-12"
            //             initial={{ opacity: 0, y: 20 }}
            //             whileInView={{ opacity: 1, y: 0 }}
            //             transition={{ duration: 0.8 }}
            //             viewport={{ once: true }}
            //         >
            //             <h2 className="text-2xl cursor-default md:text-4xl font-medium text-[#005A32] mb-3">
            //                 Our Impact in Numbers
            //             </h2>
            //             <p className="text-gray-600 cursor-default max-w-2xl mx-auto">
            //                 Every number represents countless lives touched and communities strengthened through our collective efforts
            //             </p>
            //         </motion.div>

            //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            //             {impactMetrics.map((metric, index) => (
            //                 <motion.div
            //                     key={metric.id}
            //                     className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#98fb98]/30 text-center hover:shadow-xl transition-shadow"
            //                     initial={{ opacity: 0, y: 30 }}
            //                     whileInView={{ opacity: 1, y: 0 }}
            //                     transition={{ duration: 0.5, delay: index * 0.2 }}
            //                     viewport={{ once: true }}
            //                 >
            //                     <div className="flex justify-center mb-4">{metric.icon}</div>
            //                     <h3 className="text-4xl cursor-default md:text-5xl font-bold text-[#005A32] mb-3">
            //                         {isInView ? <Counter value={metric.value} suffix={metric.suffix} /> : '0'}
            //                     </h3>
            //                     <h4 className="text-xl cursor-default font-medium text-gray-800 mb-3">{metric.label}</h4>
            //                     <p className="text-gray-600">{metric.description}</p>
            //                 </motion.div>
            //             ))}
            //         </div>

            //         {/* Final CTA */}
            //         {/* <motion.div
            //             className="text-center"
            //             initial={{ opacity: 0 }}
            //             whileInView={{ opacity: 1 }}
            //             transition={{ duration: 0.8, delay: 0.5 }}
            //             viewport={{ once: true }}
            //         >
            //             <Link
            //                 to="/discover/story"
            //                 className="inline-flex items-center gap-2 px-8 py-4 bg-[#005A32] text-white rounded-full font-medium text-lg hover:bg-[#004525] transition-colors shadow-lg"
            //             >
            //                 Discover Our Full Story <FaChevronRight />
            //             </Link>
            //         </motion.div> */}
            //     </div>
            // </div>