import React, { useState, useEffect, useRef } from 'react'
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import voice1 from '../../assets/home/voice1.jpg'
import voice2 from '../../assets/home/voice2.jpg'
import voice3 from '../../assets/home/voice3.jpg'
import voice4 from '../../assets/home/voice4.jpg'

export const Third = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const testimonialRef = useRef(null);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 8000); // Change every 8 seconds
        
        return () => clearInterval(interval);
    }, [currentIndex]);

    const testimonialsData = [
        {
            name: "Latha",
            image: voice1,
            content: {
                testimonial: "Latha, despite facing immense hardships, continues to move forward with unwavering determination. Losing her father, mother, and husband did not break her spirit. With the support of Mulkanoor Cooperative Society, she has been able to cultivate her 4 acres of land alongside her sisters and secure a bright future for her son through education. She remains ever grateful to Mulkanoor Cooperative for being a guiding light in her journey.",
                location: "Mulkanoor Village",
            },
            backgroundColor: "bg-yellow-100"
        },
        {

            name: "Padma",

            image: voice2,
            content: {
                testimonial: "Dale Padma, alongside her father, cultivates paddy on their 4 acres of land with dedication. With the support of Mulkanoor Cooperative Society, she availed an animal loan, which has greatly boosted her income. She is deeply thankful to Mulkanoor Cooperative for supporting her every step of the way.",
                location: "Karimnagar District",
            },
            backgroundColor: "bg-green-100"
        },
        {

            name: "Shyamsunder Rao",

            image: voice3,
            content: {
                testimonial: "With the financial support from Mulkanoor Cooperative Society, I was able to invest in a new tractor. This has drastically reduced my labor costs and improved the efficiency of my farming operations. Today, my land productivity has increased, and I’m able to meet the growing demands of the market.",
                location: "Warangal District",
            },
            backgroundColor: "bg-blue-50"
        },
        {
            name: "Vanga Sampath",
            image: voice4,
            content: {
                testimonial: "With the financial support from Mulkanoor Cooperative Society, I was able to invest in a new tractor. This has drastically reduced my labor costs and improved the efficiency of my farming operations. Today, my land productivity has increased, and I’m able to meet the growing demands of the market.",
                location: "Siddipet District",
            },
            backgroundColor: "bg-amber-50"
        }
    ];

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex(prev => 
            prev === 0 ? testimonialsData.length - 1 : prev - 1
        );
    };

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex(prev => 
            prev === testimonialsData.length - 1 ? 0 : prev + 1
        );
    };

    const goToTestimonial = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };
    
    // Animation variants
    const slideVariants = {
        hiddenRight: {
            x: "100%",
            opacity: 0,
        },
        hiddenLeft: {
            x: "-100%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
            transition: {
                duration: 0.5,
            }
        }),
    };

    return (
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-16 bg-transparent">

            {/* Testimonial Slider Section */}
            <div className="relative max-w-6xl mx-auto overflow-hidden" ref={testimonialRef}>
                {/* Main Content Area */}
                <div className="min-h-[500px] md:min-h-[400px] relative">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
                            animate="visible"
                            exit="exit"
                            className={`absolute inset-0 ${testimonialsData[currentIndex].backgroundColor} rounded-xl shadow-lg overflow-hidden`}
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Image Section - Hidden on small mobile, shown on the left on larger screens */}
                                <div className="hidden md:block md:w-1/3 lg:w-2/5 h-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
                                    <img 
                                        src={testimonialsData[currentIndex].image} 
                                        alt={testimonialsData[currentIndex].name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                
                                {/* Mobile Image - Small display on top for mobile */}
                                <div className="md:hidden w-full h-40 relative">
                                    <img 
                                        src={testimonialsData[currentIndex].image}
                                        alt={testimonialsData[currentIndex].name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                                </div>
                                
                                {/* Content Section */}
                                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                                    {/* Top section with date */}
                                    <div className="text-sm text-gray-500 mb-4">
                                        {testimonialsData[currentIndex].date}
                                    </div>
                                    
                                    {/* Quote with large quotation marks */}
                                    <div className="relative">
                                        <div className="text-6xl text-yellow-300 opacity-20 absolute -top-6 -left-2">"</div>
                                        <p className="text-base md:text-lg leading-relaxed mb-6 relative z-10 text-gray-800">
                                            {testimonialsData[currentIndex].content.testimonial}
                                        </p>
                                        <div className="text-6xl text-yellow-300 opacity-20 absolute bottom-0 right-0">"</div>
                                    </div>
                                    
                                    {/* Farmer Info */}
                                    <div className="mt-4 md:mt-auto">
                                        <div className="flex items-end justify-between">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-semibold">
                                                    {testimonialsData[currentIndex].name}
                                                </h3>
                                                <p className="text-gray-700 font-medium">
                                                    {testimonialsData[currentIndex].role}
                                                </p>
                                                <div className="text-sm text-gray-600 mt-2">
                                                    <p><span className="font-medium">Location:</span> {testimonialsData[currentIndex].content.location}</p>
                                                </div>
                                            </div>

                                            {/* Navigation Dots on mobile */}
                                            <div className="md:hidden flex space-x-1.5">
                                                {testimonialsData.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => goToTestimonial(index)}
                                                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                                            currentIndex === index ? 'bg-yellow-500' : 'bg-gray-300'
                                                        }`}
                                                        aria-label={`Go to testimonial ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="mt-6 flex justify-between items-center">
                    {/* Prev/Next Buttons */}
                    <button 
                        onClick={prevTestimonial}
                        className="text-3xl md:text-4xl text-yellow-600 hover:text-yellow-700 transition-colors p-2"
                        aria-label="Previous testimonial"
                    >
                        <IoArrowBackCircle />
                    </button>
                    
                    {/* Navigation Dots - Hidden on mobile */}
                    <div className="hidden md:flex space-x-2">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    currentIndex === index 
                                        ? 'bg-yellow-500 scale-125' 
                                        : 'bg-gray-300 hover:bg-yellow-300'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    <button 
                        onClick={nextTestimonial}
                        className="text-3xl md:text-4xl text-yellow-600 hover:text-yellow-700 transition-colors p-2"
                        aria-label="Next testimonial"
                    >
                        <IoArrowForwardCircle />
                    </button>
                </div>
            </div>
        </div>
    );
};
