import React, { useState } from 'react'
import { IoArrowUpCircleOutline } from "react-icons/io5";
import dummy from '../../assets/dummy.jpeg';
import voice1 from '../../assets/home/voice1.jpg'
import voice2 from '../../assets/home/voice2.jpg'
import voice3 from '../../assets/home/voice3.jpg'
import voice4 from '../../assets/home/voice4.jpg'

export const Third = () => {
    const [expandedCard, setExpandedCard] = useState(0); // Set first card as expanded by default
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Add window resize listener
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCardClick = (index) => {
        setExpandedCard(expandedCard === index ? -1 : index); // Toggle card - collapse if already expanded
    }

    const cardsData = [
        {
            date: "1/10/2024",
            name: "Latha",
            role: "Cotton Farmer",
            image: voice1, // Your first image
            content: {
                testimonial: "The service provided by Mulkanoor has been exceptional. Their support has transformed my farming practices.",
                location: "Mulkanoor Village",
                experience: "15 years",
                crops: "Cotton, Rice"
            }
        },
        {
            date: "5/09/2024",
            name: "Padma",
            role: "Rice Farmer",
            image: voice2, // Your second image
            content: {
                testimonial: "The training programs have been a game-changer for me. I’ve learned modern techniques that have made my farm more profitable",
                location: "Karimnagar District",
                experience: "20 years",
                crops: "Rice, Vegetables"
            }
        },
        {
            date: "3/08/2024",
            name: "Shyamsunder Rao",
            role: "Mixed Crop Farmer",
            image: voice3, // Your third image
            content: {
                testimonial: "With the financial support from Mulkanoor Cooperative Society, I was able to invest in a new tractor. This has drastically reduced my labor costs and improved the efficiency of my farming operations. Today, my land productivity has increased, and I’m able to meet the growing demands of the market.",
                location: "Warangal District",
                experience: "10 years",
                crops: "Mixed Crops"
            }
        },
        {
            date: "7/07/2024",
            name: "Vanga Sampath",
            role: "Organic Farmer",
            image: voice4, // Your fourth image
            content: {
                testimonial: "Thanks to Mulkanoor’s seasonal crop loans and expert guidance, I was able to purchase high-quality seeds and fertilizers on time. My farm’s productivity has skyrocketed, and I’ve seen a steady increase in profits over the last few seasons. I’m now able to plan for the future with confidence",
                location: "Siddipet District",
                experience: "12 years",
                crops: "Organic Vegetables"
            }
        }
    ];

    return (
        <div className="container mx-auto px-4 md:px-8 bg-transparent">
            <div>
                <h1 className='text-2xl md:text-5xl text-center font-medium mb-8'>
                    Farmers' Voice : What they Say about Us
                </h1>
                <div className='mt-6 md:mt-12'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6'>
                        {cardsData.map((card, index) => (
                            <div
                                key={index}
                                className={`
                                    bg-yellow-200/90 backdrop-blur-sm
                                    relative p-6 rounded-xl 
                                    transition-all duration-500 ease-in-out
                                    min-h-[320px] md:min-h-[420px]
                                    hover:shadow-xl cursor-pointer
                                    ${!isMobile && expandedCard === index
                                        ? 'md:scale-105 md:z-10 md:shadow-2xl'
                                        : 'scale-100 z-0'}
                                    ${expandedCard === index ? 'mb-4' : 'mb-0'}
                                    w-full
                                `}
                                onClick={() => handleCardClick(index)}
                            >
                                {/* Toggle Button - More prominent and intuitive */}
                                <div
                                    className='absolute -right-1 md:-right-2 -top-2 bg-white p-2 md:p-3 rounded-full 
                                    shadow-md hover:shadow-lg hover:bg-yellow-50 transition-all duration-300
                                    border-2 border-yellow-300'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCardClick(index);
                                    }}
                                >
                                    <IoArrowUpCircleOutline className={`
                                        text-2xl md:text-3xl transform transition-transform duration-300 text-yellow-600
                                        ${expandedCard === index ? '-rotate-180' : 'rotate-0'}
                                    `} />
                                </div>

                                <h1 className='text-xs md:text-sm text-gray-600 font-medium'>{card.date}</h1>
                                <h1 className='text-xl md:text-2xl font-semibold pt-4 md:pt-6 pb-3'>{card.name}</h1>
                                <h2 className='text-lg text-gray-700'>{card.role}</h2>

                                <div className='transition-all duration-500 mt-4'>
                                    {expandedCard === index ? (
                                        <div className='space-y-4'>
                                            <p className='text-gray-700 italic text-sm md:text-base leading-relaxed'>
                                                "{card.content.testimonial}"
                                            </p>
                                            <div className='text-xs md:text-sm text-gray-600 space-y-1 pt-4'>
                                                <p><span className="font-medium">Location:</span> {card.content.location}</p>
                                                <p><span className="font-medium">Experience:</span> {card.content.experience}</p>
                                                <p><span className="font-medium">Crops:</span> {card.content.crops}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="mt-4 overflow-hidden rounded-lg relative">
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                <span className="bg-yellow-400/90 text-black px-4 py-2 rounded-lg font-medium">
                                                    Click to view testimonial
                                                </span>
                                            </div>
                                            <img
                                                className='w-full h-full transition-all duration-300 hover:scale-105'
                                                src={card.image}
                                                alt={`${card.name} - ${card.role}`}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
