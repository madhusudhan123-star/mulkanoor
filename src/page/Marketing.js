import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import paddy from '../assets/marketing/paddy.jpg';
import cotton from '../assets/marketing/cotton.jpg';

const cardData = [
    {
        title: "Mulkanoor Rice",
        content: "Premium quality rice varieties processed with state-of-the-art techniques, ensuring quality and taste.",
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        url: '/product/rice'
    },
    {
        title: "Mulkanoor  seeds",
        content: "Genetically pure seeds of high-yielding varieties",
        image: paddy,
        url: '/product/paddy'
    },
    {
        title: "Cotton",
        content: "Superior quality cotton, ethically sourced and carefully processed for premium markets.",
        image: cotton,
        url: '/product/cotton'
    }
];

// Seed varieties data - keeping only the categorization with minimal seed variety info
const seedVarieties = {
    coarse: [
        { name: "MTU 1010", description: "High-yielding variety" },
        { name: "MTU 1001", description: "Drought-resistant" },
        { name: "IR 64", description: "Popular variety" },
        { name: "MTU 7029", description: "High yield potential" }
    ],
    fine: [
        { name: "BPT 5204", description: "Premium fine grain" },
        { name: "RNR 15048", description: "Fine slender grains" },
        { name: "HMT Sona", description: "Fine texture" },
        { name: "Improved Samba Mahsuri", description: "Disease resistant" }
    ]
};


const Card = ({ title, content, image, url, className = '', isHovered, onHover }) => (
    <div
        className={`
            min-w-[200px] h-[50vh] flex-1 bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-lg 
            transition-all duration-700 ease-out
            transform hover:shadow-2xl
            ${isHovered ? 'md:flex-grow-[3] scale-105' : 'md:flex-grow-[1] scale-100'}
            ${!isHovered && onHover ? 'md:flex-grow-[0.7] scale-95' : ''}
            ${className}
            bg-cover bg-center bg-no-repeat
            relative
            cursor-pointer
        `}
        style={{
            backgroundImage: `url(${image})`
        }}
        onMouseEnter={() => onHover(true)}
        onTouchStart={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        onTouchEnd={() => onHover(false)}
    >
        <a href={url}>
            <div className="absolute inset-0 bg-black/60 hover:bg-black/50 transition-colors duration-700 rounded-lg"></div>
            <div className="relative cursor-pointer z-10 h-full flex flex-col justify-between">
                <h1 className='text-2xl cursor-pointer md:text-3xl lg:text-4xl mb-3 md:mb-4 font-bold text-white'>{title}</h1>
                <div className={`
                    transition-all duration-700 ease-in-out
                    transform
                    ${isHovered
                        ? 'opacity-100 max-h-[1000px] translate-y-0'
                        : 'md:opacity-0 md:max-h-0 md:translate-y-10 md:overflow-hidden opacity-100 max-h-full'
                    }
                `}>
                    <p className="text-start cursor-pointer text-white/90 text-sm md:text-lg leading-relaxed">
                        {content}
                    </p>
                    <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </a>
    </div>
);

const Marketing = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeTab, setActiveTab] = useState('coarse');
    const [showDetails, setShowDetails] = useState(null);

    return (
        <div className="relative pt-24 pb-12 z-10 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
            <Helmet>
                <title>Marketing Products - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Explore Mulkanoor's premium quality rice, seeds, and cotton products. Find retail outlets and discover our varieties of coarse and fine seeds."
                />
                <meta
                    name="keywords"
                    content="Mulkanoor rice, organic seeds, cotton products, agricultural marketing, high-yield seeds"
                />
            </Helmet>

            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Marketing Products</h1>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Directly connecting farmers with markets to ensure maximum returns and customer satisfaction through our premium quality products.
                    </p>
                </div>
            </div>

            {/* Card Section */}
            <div className="container mx-auto px-4 mb-20">
                <div className='flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-2 w-full'>
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            {...card}
                            isHovered={hoveredIndex === index}
                            onHover={(isHovered) => {
                                if (window.innerWidth < 768) {
                                    setHoveredIndex(hoveredIndex === index ? null : index);
                                } else {
                                    setHoveredIndex(isHovered ? index : null);
                                }
                            }}
                            className={`
                                mb-4 md:mb-0 
                                ${hoveredIndex !== null && hoveredIndex !== index ? 'md:opacity-75' : ''}
                            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marketing;

            // {/* Seed Varieties Section */}
            // <div className="container mx-auto px-4 mb-20">
            //     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            //         <div className="p-6 md:p-8">
            //             <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Our Seed Varieties</h2>
                        
            //             {/* Tabs */}
            //             <div className="flex border-b border-gray-200 mb-6">
            //                 <button 
            //                     className={`py-2 px-4 font-medium text-lg border-b-2 ${activeTab === 'coarse' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500'}`}
            //                     onClick={() => setActiveTab('coarse')}
            //                 >
            //                     Coarse Varieties
            //                 </button>
            //                 <button 
            //                     className={`py-2 px-4 font-medium text-lg border-b-2 ${activeTab === 'fine' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500'}`}
            //                     onClick={() => setActiveTab('fine')}
            //                 >
            //                     Fine Varieties
            //                 </button>
            //             </div>

            //             {/* Varieties Grid */}
            //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            //                 {seedVarieties[activeTab].map((variety, index) => (
            //                     <motion.div 
            //                         key={index}
            //                         className="bg-green-50 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
            //                         whileHover={{ scale: 1.05 }}
            //                         onClick={() => setShowDetails(showDetails === index ? null : index)}
            //                     >
            //                         <h3 className="text-xl font-semibold text-green-800 mb-2">{variety.name}</h3>
            //                         <p className="text-sm text-gray-600">{variety.description}</p>
            //                         {showDetails === index && (
            //                             <motion.div 
            //                                 initial={{ opacity: 0, height: 0 }}
            //                                 animate={{ opacity: 1, height: 'auto' }}
            //                                 className="mt-3 pt-3 border-t border-green-200"
            //                             >
            //                                 <p className="text-sm text-gray-700">
            //                                     This variety is known for its exceptional quality and high yield potential.
            //                                     It performs well under various growing conditions and is popular among our member farmers.
            //                                 </p>
            //                             </motion.div>
            //                         )}
            //                     </motion.div>
            //                 ))}
            //             </div>
            //         </div>
            //     </div>
            // </div>