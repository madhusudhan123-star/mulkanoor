import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import logo from '../../assets/logo.png';

const Five = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const scrollContainerRef = useRef(null);
    const [isScrollable, setIsScrollable] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            checkScrollable();
        };

        const checkScrollable = () => {
            const container = scrollContainerRef.current;
            if (container) {
                setIsScrollable(container.scrollWidth > container.clientWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        checkScrollable();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = direction === 'left' ? -300 : 300;
        const targetScroll = container.scrollLeft + scrollAmount;

        const itemWidth = 250;
        const normalizedScroll = Math.round(targetScroll / itemWidth) * itemWidth;

        container.scrollTo({
            left: normalizedScroll,
            behavior: 'smooth'
        });

        const newIndex = Math.round(normalizedScroll / itemWidth);
        setActiveIndex(Math.max(0, Math.min(newIndex, timelineData.length - 1)));
    };

    const timelineData = [
        {
            year: "1956",
            title: "Foundation",
            description: "Established as a small cooperative society with 375 members",
            achievements: [
                "Initial membership of 375 farmers",
                "Share capital of ₹2,300",
                "First registered cooperative in the region"
            ],
            details: "The society was established with a vision to support local farmers and promote agricultural development.",
            image: "https://example.com/foundation-image.jpg"
        },
        {
            year: "1970",
            title: "Infrastructure Development",
            description: "Built first storage facility and established modern farming practices",
            achievements: [
                "First grain storage facility constructed",
                "Introduction of mechanized farming",
                "Establishment of farmer training programs"
            ],
            details: "This period marked significant advancement in agricultural infrastructure and farmer education.",
            image: "https://example.com/infrastructure-image.jpg"
        },
        {
            year: "1990",
            title: "Modernization",
            description: "Implemented modern technologies and expanded services",
            achievements: [
                "Computerization of operations",
                "Modern equipment acquisition",
                "Expanded financial services"
            ],
            details: "The society embraced technological advancement to better serve its members.",
            image: "https://example.com/modernization-image.jpg"
        },
        {
            year: "2010",
            title: "Digital Transformation",
            description: "Complete digital integration of services and operations",
            achievements: [
                "Online banking services",
                "Digital record keeping",
                "Mobile app launch"
            ],
            details: "Digital transformation improved efficiency and accessibility of services.",
            image: "https://example.com/digital-image.jpg"
        },
        {
            year: "2023",
            title: "Present Day",
            description: "Serving over 7600+ farmers with comprehensive solutions",
            achievements: [
                "7600+ active members",
                "Comprehensive agricultural services",
                "Sustainable farming practices"
            ],
            details: "Today, the society stands as a model of cooperative excellence and sustainable agriculture.",
            image: "https://example.com/present-image.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 py-16">
            <div className="">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Journey Through Time
                </motion.h2>

                <div className="relative">
                    {isScrollable && (
                        <div className="hidden md:block absolute inset-0 pointer-events-none z-20">
                            <button
                                onClick={() => scroll('left')}
                                className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 
                                shadow-lg p-4 rounded-full transition-all duration-300 hover:scale-110
                                pointer-events-auto cursor-pointer"
                            >
                                <IoIosArrowBack className="text-3xl text-gray-600" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 
                                shadow-lg p-4 rounded-full transition-all duration-300 hover:scale-110
                                pointer-events-auto cursor-pointer"
                            >
                                <IoIosArrowForward className="text-3xl text-gray-600" />
                            </button>
                        </div>
                    )}

                    <div ref={scrollContainerRef} className="overflow-x-auto hide-scrollbar scroll-smooth">
                        <div className="relative min-w-max flex items-center gap-6 md:gap-12 px-4 md:px-8 py-4">
                            <div className="absolute top-[45px] md:top-[55px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`
                                        relative flex flex-col items-center cursor-pointer
                                        ${activeIndex === index ? 'scale-110' : 'scale-100'}
                                        transition-all duration-300
                                    `}
                                    onClick={() => setActiveIndex(index)}
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={`
                                        w-14 h-14 md:w-20 md:h-20 rounded-full 
                                        flex items-center justify-center
                                        ${activeIndex === index
                                            ? 'bg-white shadow-lg border-2 border-blue-500'
                                            : 'bg-white shadow-md hover:shadow-lg'}
                                        transition-all duration-300
                                    `}>
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="w-8 h-8 md:w-12 md:h-12"
                                        />
                                    </div>
                                    <h3 className={`
                                        mt-4 text-sm md:text-base font-medium text-center w-32
                                        ${activeIndex === index ? 'text-blue-600' : 'text-gray-600'}
                                    `}>
                                        {item.year}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {activeIndex !== null && (
                        <motion.div
                            className="mt-16 max-w-6xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-white shadow-xl rounded-xl p-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                            {timelineData[activeIndex].title}
                                        </h2>
                                        <p className="text-lg text-gray-700">
                                            {timelineData[activeIndex].description}
                                        </p>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold text-gray-800">Key Achievements</h3>
                                            <div className="grid grid-cols-1 gap-4">
                                                {timelineData[activeIndex].achievements.map((achievement, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                                                        <p className="text-gray-700">{achievement}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm md:text-base text-gray-600 italic">
                                            {timelineData[activeIndex].details}
                                        </p>
                                    </div>
                                    <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group shadow-lg">
                                        <img
                                            src={timelineData[activeIndex].image}
                                            alt={timelineData[activeIndex].title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Five;