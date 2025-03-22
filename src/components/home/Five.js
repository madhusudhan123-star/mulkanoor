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
            year: "1956-57",
            title: "Formation of the Society",
            description: "Farmers registered the society with an initial membership of 373 and a share capital of ₹2,300.",
            image: "https://example.com/image1.jpg",
            achievements: [
                "Initial membership of 373",
                "Share capital of ₹2,300",
                "Established to support farmers financially"
            ],
            details: "A group of farmers came together to form the cooperative society, laying the foundation for future agricultural support."
        },
        {
            year: "1957-58",
            title: "Introduction of Short-Term Loans",
            description: "Short-term loans were disbursed for the first time to assist farmers in timely crop cultivation.",
            image: "https://example.com/image2.jpg",
            achievements: [
                "First-ever short-term loans for farmers",
                "Helped in timely crop cultivation"
            ],
            details: "This initiative marked the beginning of financial assistance to farmers, ensuring better productivity."
        },
        {
            year: "1958-59",
            title: "Electrification and Pump Set Sales",
            description: "With electrification, the cooperative started selling electric pump sets to aid agricultural development.",
            image: "https://example.com/image3.jpg",
            achievements: [
                "Electrification of the society's area",
                "Introduction of electric pump sets for farmers"
            ],
            details: "Providing electric pump sets revolutionized irrigation, enhancing crop yields."
        },
        {
            year: "1959-60",
            title: "Storage and Expansion",
            description: "First godown was built for fertilizers and produce, and sugar sales were introduced.",
            image: "https://example.com/image4.jpg",
            achievements: [
                "Construction of first fertilizer godown",
                "Initiation of sugar sales in the community"
            ],
            details: "Efficient inventory management and expansion into sugar sales strengthened the cooperative's role in the region."
        },
        {
            year: "1960-61",
            title: "Innovative Loan Disbursement",
            description: "Loans were disbursed in kind, and medium-term loans for pump sets were introduced.",
            image: "https://example.com/image5.jpg",
            achievements: [
                "Loans disbursed in kind before RBI recommendations",
                "First medium-term loans for pump sets"
            ],
            details: "Farmers benefited from receiving loans in kind, ensuring direct investment into farming essentials."
        },
        {
            year: "1961-62",
            title: "Introduction of Hybrid Seeds",
            description: "Hybrid maize seeds were introduced to improve agricultural productivity.",
            image: "https://example.com/image6.jpg",
            achievements: [
                "First introduction of hybrid maize seeds"
            ],
            details: "Farmers adopted hybrid maize, leading to better yield and quality crops."
        },
        {
            year: "1962-63",
            title: "Pledge Loan Scheme Introduced",
            description: "Pledge loans were introduced to support farmers financially.",
            image: "https://example.com/image7.jpg",
            achievements: [
                "Introduction of pledge loans"
            ],
            details: "This scheme helped farmers secure loans against stored produce."
        },

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
                                        <p className="text-sm md:text-base text-gray-600 ">
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