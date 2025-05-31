import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaThList, FaThLarge, FaCube } from 'react-icons/fa';
import banner from '../assets/awards/banner.jpg'
import card1 from '../assets/awards/1.JPG'
import card2 from '../assets/awards/2.jpg'
import card3 from '../assets/awards/3.jpg'
import card4 from '../assets/awards/4.JPG'
import card5 from '../assets/awards/5.jpg'
import card6 from '../assets/awards/6.jpeg'
import card7 from '../assets/awards/7.jpeg'
import card8 from '../assets/awards/8.jpg'
import card9 from '../assets/awards/9.JPG'
import card10 from '../assets/awards/10.jpeg'
import card11 from '../assets/awards/11.JPG'
import { Helmet } from 'react-helmet-async';




const Awards = () => {
    // Change default view to 'grid'
    const [viewMode, setViewMode] = useState('grid');

    // Add image specifications
    const imageSpecs = {
        hero: {
            width: 1920,
            height: 600,
            aspectRatio: "16:5",
            description: "Awards ceremony banner image"
        },
        awards: {
            width: 800,
            height: 600,
            aspectRatio: "4:3",
            description: "Award-specific images"
        },
        showcase: {
            width: 600,
            height: 800,
            aspectRatio: "3:4",
            description: "Vertical showcase images"
        }
    };

    // Image optimization guidelines:
    // 1. File size: Keep under 200KB each
    // 2. Format: WebP with JPEG fallback
    // 3. Resolution: Maintain specified dimensions
    // 4. Composition: Center-focused for flexible cropping
    // 5. Contrast: Ensure readability with text overlays
    // 6. Color: Natural, warm tones preferred
    // 7. Content: Real activity shots when possible

    const images = {
        hero: banner, // Awards ceremony
        awards: [
            card1, // Manager award
            card2, // Agriculture
            card3,
            card4,
            card5,
            card6,
            card7,
            card8,
            card9,
            card10,
            card11,
            // "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca", // Special felicitation
            // "https://images.unsplash.com/photo-1579621970795-87facc2f976d", // NCDC award
            // "https://images.unsplash.com/photo-1624953587687-daf255b6b80a", // Outstanding performer
            // "https://images.unsplash.com/photo-1542744173-8e7e53415bb0", // Business award
            // "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e", // Jyothirgamayi
        ]
    };

    const awards = [
        {
            title: "Manager of the Year- by Cooperative M",
            image: images.awards[0]
        },
        {
            title: "Best Cooperator - on Centenary Celebrations of Cooperative Movement in India",
            image: images.awards[1]
        },
        {
            title: "NCDC National Award for Cooperative Excellence 2014",
            image: images.awards[2]
        },
        {
            title: "Best Primary Farmers Cooperative Society by Outlook Rxpress Ariculture Conclave and Swaraj Awards 2020",
            image: images.awards[3]
        },
        {
            title: "Sahakaritha Vibhusan Award by  Krishak Bharathi Cooperative Ltd.,  (KRIBHCO)",
            image: images.awards[4]
        },
        {
            title: "Sakshi Excellence Award",
            image: images.awards[5]
        },
        {
            title: "SahakaraBharathi - Annasaheb Godbole Memorial Award",
            image: images.awards[6]
        },
        {
            title: "Responsible Business Award for Agriculture and Cooperative Sector by  ACHIEVERS FORM",
            image: images.awards[7]
        },
        {
            title: "Outstanding Performer in the Rural Cooperative Movement Award",
            image: images.awards[8]
        },
        {
            title: "Agri. Business Award",
            image: images.awards[9]
        },
        {
            title: "Jyothirgamai Award-2019",
            image: images.awards[10]
        }
    ];

    const ToggleButton = () => (
        <div className="fixed bottom-8 right-8 z-50 flex gap-4">
            <button
                onClick={() => setViewMode('grid')}
                className={`p-4 rounded-full shadow-lg transition-colors duration-300 
                    ${viewMode === 'grid'
                        ? 'bg-[#8B7355] text-white'
                        : 'bg-[#C8AD7F] text-white hover:bg-[#8B7355]'}`}
                aria-label="Grid View"
            >
                <FaThLarge size={20} />
            </button>
            <button
                onClick={() => setViewMode('timeline')}
                className={`p-4 rounded-full shadow-lg transition-colors duration-300 
                    ${viewMode === 'timeline'
                        ? 'bg-[#8B7355] text-white'
                        : 'bg-[#C8AD7F] text-white hover:bg-[#8B7355]'}`}
                aria-label="Timeline View"
            >
                <FaThList size={20} />
            </button>
            <button
                onClick={() => setViewMode('showcase')}
                className={`p-4 rounded-full shadow-lg transition-colors duration-300 
                    ${viewMode === 'showcase'
                        ? 'bg-[#8B7355] text-white'
                        : 'bg-[#C8AD7F] text-white hover:bg-[#8B7355]'}`}
                aria-label="Showcase View"
            >
                <FaCube size={20} />
            </button>
        </div>
    );

    const GridView = () => (
        <motion.div
            className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {awards.map((award, index) => (
                <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="bg-white/90 rounded-xl overflow-hidden shadow-xl 
                                transform transition-all duration-300 group-hover:scale-105">
                        {/* Add image section */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={award.image}
                                alt={award.title}
                                className="w-full h-full object-cover transform 
                                        transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t 
                                        from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="text-3xl mb-2">{award.icon}</div>
                                <div className="text-sm font-semibold">{award.year}</div>
                            </div>
                        </div>
                        {/* Award Content */}
                        <div className="p-6">
                            <div className="inline-block px-3 py-1 bg-[#C8AD7F]/20 rounded-full text-sm 
                                        text-[#8B7355] font-semibold mb-4">
                                {award.year}
                            </div>
                            <h3 className="text-xl font-bold text-[#4A3F35] mb-3">{award.title}</h3>
                            <div className="space-y-2">
                                <p className="text-[#8B7355] font-medium">
                                    {award.recipient}
                                </p>
                                <p className="text-sm text-[#8B7355]">
                                    {award.organization}
                                </p>
                                <p className="text-[#4A3F35] text-sm border-t border-[#C8AD7F]/20 pt-3 mt-3">
                                    {award.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );

    const ShowcaseView = () => (
        <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <div className="flex flex-wrap justify-center gap-8">
                {awards.map((award, index) => (
                    <motion.div
                        key={index}
                        className="w-full md:w-96 perspective-1000"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="relative group transform-style-3d transition-transform duration-1000 w-full h-[400px]">
                            {/* Front of the Card */}
                            <div className="absolute inset-0 backface-hidden">
                                <div className="relative h-full rounded-2xl overflow-hidden">
                                    <img
                                        src={award.image}
                                        alt={award.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                                        <div className="text-6xl mb-6">{award.icon}</div>
                                        <h3 className="text-2xl font-bold mb-2 text-center">{award.title}</h3>
                                        <p className="text-lg text-center mb-2">{award.year}</p>
                                        <div className="w-16 h-1 bg-white/50 rounded-full mb-4"></div>
                                        <p className="text-center text-white/90">{award.recipient}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Back of the Card */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180">
                                <div className="bg-white rounded-2xl p-8 h-full shadow-xl
                                            flex flex-col items-center justify-center">
                                    <h4 className="text-xl font-bold text-[#8B7355] mb-4">About this Award</h4>
                                    <p className="text-[#4A3F35] text-center mb-4">{award.description}</p>
                                    <div className="w-16 h-1 bg-[#C8AD7F] rounded-full mb-4"></div>
                                    <p className="text-[#8B7355] text-center font-medium">{award.organization}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    // Reorder views to put grid first in the ternary
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#F0EBE0] to-[#E8E3D9]">
            <Helmet>
                <title>Awards & Recognition - Mulkanoor Cooperative</title>
                <meta name="description" content="Explore Mulkanoor Cooperative's awards and achievements spanning over 40 years. From Manager of the Year to Best Primary Farmers Cooperative Society, discover our journey of excellence." />
            </Helmet>
            {/* Hero Section with Background Image */}
            <div className="relative h-[60vh] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={images.hero}
                        alt="Awards & Recognition"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl cursor-default md:text-6xl font-bold mb-4 text-white">
                                Awards & Recognition
                            </h1>
                            <p className="text-xl cursor-default text-white/90">
                                Celebrating our journey of excellence and dedication
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Toggle Button */}
            <ToggleButton />

            {/* Views */}
            <AnimatePresence mode='wait'>
                {viewMode === 'grid' ? (
                    <GridView key="grid" />
                ) : viewMode === 'timeline' ? (
                    // Timeline View
                    <motion.div
                        key="timeline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="container mx-auto mt-20 px-4">
                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-[#C8AD7F] to-[#8B7355]" />

                                {/* Awards Cards */}

                                {awards.map((award, index) => (
                                    <motion.div
                                        key={index}
                                        className={`flex flex-col md:flex-row gap-8 mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                            }`}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex-1" />
                                        <div className="w-8 h-8 absolute left-0 md:left-1/2 transform md:-translate-</div>x-1/2 
                                        bg-[#C8AD7F] rounded-full z-10 flex items-center justify-center text-white">
                                            {award.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
                                            border border-[#C8AD7F]/20 hover:shadow-2xl transition-all duration-300
                                            transform hover:scale-105">
                                                <div className="text-sm text-[#8B7355] font-semibold mb-2">{award.year}</div>
                                                <h3 className="text-xl cursor-default font-bold text-[#4A3F35] mb-2">{award.title}</h3>
                                                <p className="text-[#8B7355] cursor-default font-medium mb-2">Awarded to: {award.recipient}</p>
                                                <p className="text-[#8B7355] cursor-default text-sm mb-2">By: {award.organization}</p>
                                                <p className="text-[#4A3F35] cursor-default">{award.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <ShowcaseView key="showcase" />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Awards;

// Add these styles to your global CSS or Tailwind config
const additionalStyles = `
    .perspective-1000 {
        perspective: 1000px;
    }
    
    .transform-style-3d {
        transform-style: preserve-3d;
    }
    
    .backface-hidden {
        backface-visibility: hidden;
    }
    
    .rotate-y-180 {
        transform: rotateY(180deg);
    }
    
    .group:hover .group-hover\\:rotate-y-180 {
        transform: rotateY(180deg);
    }
`;