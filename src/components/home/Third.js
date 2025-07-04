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
                location: "Kotthapalli",
            },
            backgroundColor: "bg-yellow-100"
        },
        {

            name: "Shyam Sunder",

            image: voice3,
            content: {
                testimonial: "Shyam Sunder, a paddy farmer from Gopalpur village, took a loan from Mulkanoor Cooperative Society to support his farming needs. With timely financial assistance, he successfully cultivated his crops, ensuring a bountiful harvest. Grateful for the support, he credits the cooperative for his farm’s growth and stability.",
                location: "Gopalpur Village",
            },
            backgroundColor: "bg-blue-50"
        },
        {

            name: "Dale Padma",

            image: voice2,
            content: {
                testimonial: "Dale Padma, alongside her father, cultivates paddy on their 4 acres of land with dedication. With the support of Mulkanoor Cooperative Society, she availed an animal loan, which has greatly boosted her income. She is deeply thankful to Mulkanoor Cooperative for supporting her every step of the way.",
                location: " Bheemadevarapally Village",
            },
            backgroundColor: "bg-green-100"
        },
        {
            name: "Vanga Sampath",
            image: voice4,
            content: {
                testimonial: "He took a loan from Mulkanoor Cooperative Society to dig a well, which turned into a valuable water source for his farm. This well now provides a reliable irrigation system, ensuring better crop yields. He remains grateful to the cooperative for empowering his agricultural journey.",
                location: "Ratnagiri village",
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
        <div className="container mx-auto px-2 sm:px-4 md:px-8 bg-transparent">

            {/* Testimonial Slider Section */}
            <div className="relative max-w-6xl mx-auto overflow-hidden" ref={testimonialRef}>
                {/* Main Content Area */}
                <div className="min-h-[500px] sm:min-h-[550px] md:min-h-[340px] relative">
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
                                
                                {/* Mobile Image - Improved height and aspect ratio */}
                                <div className="md:hidden w-full h-48 sm:h-56 relative">
                                    <img 
                                        src={testimonialsData[currentIndex].image}
                                        alt={testimonialsData[currentIndex].name}
                                        className="w-full h-full object-cover object-position-top"
                                        style={{ objectPosition: "center 25%" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                                </div>
                                
                                {/* Content Section - Adjusted to account for taller image */}
                                <div className="flex-1 p-3 sm:p-5 md:p-8 flex flex-col h-[calc(100%-48px)] sm:h-[calc(100%-56px)] md:h-full">
                                    {/* Top section with date */}
                                    <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                                        {testimonialsData[currentIndex].date}
                                    </div>
                                    
                                    {/* Quote with large quotation marks - Using flex-grow to take available space */}
                                    <div className="relative flex-grow overflow-hidden flex flex-col">
                                        <div className="text-3xl sm:text-5xl md:text-6xl text-yellow-300 opacity-20 absolute -top-3 sm:-top-5 -left-1 sm:-left-2">"</div>
                                        <div className="overflow-y-auto flex-grow pr-2 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-h-[250px] sm:max-h-[300px] md:max-h-none">
                                            <p className="text-sm cursor-default sm:text-base md:text-lg leading-relaxed relative z-10 text-gray-800">
                                                {testimonialsData[currentIndex].content.testimonial}
                                            </p>
                                        </div>
                                        <div className="text-3xl sm:text-5xl md:text-6xl text-yellow-300 opacity-20 absolute bottom-0 right-0">"</div>
                                    </div>
                                    
                                    {/* Farmer Info */}
                                    <div className="mt-2 sm:mt-3 md:mt-4 pt-2 border-t border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <div className="mr-2 overflow-hidden">
                                                <h3 className="text-lg cursor-default sm:text-xl md:text-2xl font-semibold truncate">
                                                    {testimonialsData[currentIndex].name}
                                                </h3>
                                                <p className="text-gray-700 cursor-default font-medium text-xs sm:text-sm truncate">
                                                    {testimonialsData[currentIndex].role}
                                                </p>
                                                <div className="text-xs sm:text-sm text-gray-600 truncate">
                                                    <span className="font-medium">Location:</span> {testimonialsData[currentIndex].content.location}
                                                </div>
                                            </div>

                                            {/* Navigation Dots on mobile - More compact */}
                                            <div className="md:hidden flex space-x-1.5 flex-shrink-0">
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

                {/* Navigation Controls - More compact on mobile */}
                <div className="mt-3 sm:mt-5 flex justify-between items-center">
                    {/* Prev/Next Buttons */}
                    <button 
                        onClick={prevTestimonial}
                        className="text-xl sm:text-2xl md:text-4xl text-yellow-600 hover:text-yellow-700 transition-colors p-1.5 sm:p-2 touch-manipulation"
                        aria-label="Previous testimonial"
                    >
                        <IoArrowBackCircle className='cursor-pointer' />
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
                        className="text-xl sm:text-2xl md:text-4xl text-yellow-600 hover:text-yellow-700 transition-colors p-1.5 sm:p-2 touch-manipulation"
                        aria-label="Next testimonial"
                    >
                        <IoArrowForwardCircle className='cursor-pointer' />
                    </button>
                </div>
            </div>
        </div>
    );
};
