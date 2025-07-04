import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaTrophy, FaHandshake, FaUsers, FaSeedling, FaChartLine } from 'react-icons/fa';
import { BsFillShieldLockFill, BsLightbulb } from 'react-icons/bs';
import { GiReceiveMoney, GiTeamUpgrade } from 'react-icons/gi';
import { MdBusinessCenter, MdIntegrationInstructions } from 'react-icons/md';
import { HiLightBulb } from 'react-icons/hi';
import { RiTeamFill, RiHandHeartLine } from 'react-icons/ri';
import cardone from '../assets/winning/card1.jpg';
import cardtwo from '../assets/winning/card2.png';
import cardthree from '../assets/winning/card3.jpg';
import cardfour from '../assets/winning/card4.jpg';
import cardfive from '../assets/winning/card5.jpg';
import cardsix from '../assets/winning/card6.jpg';
import cardseven from '../assets/winning/card7.jpg';
import cardeight from '../assets/winning/card8.jpg';
import cardnine from '../assets/winning/card9.jpg';
import cardten from '../assets/winning/card10.jpg';
import cardeleven from '../assets/winning/card11.jpg';
import cardtwelve from '../assets/winning/card12.jpg';
import cardthirteen from '../assets/winning/card13.jpg';
import cardfourteen from '../assets/winning/card14.jpg';
import cardfifteen from '../assets/winning/card15.jpg';
import { Helmet } from 'react-helmet'

const Winning = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const formulas = [
        {
            title: "Independent Governance",
            description: "Free from external interference, ensuring unbiased decision-making.",
            icon: <BsFillShieldLockFill className="text-4xl" />,
            image: cardseven
        },
        {
            title: "Professional Leadership",
            description: "Managed with dedication, honesty, and professional expertise.",
            icon: <GiTeamUpgrade className="text-4xl" />,
            image: cardthree
        },
        {
            title: "Rigorous Financial Discipline",
            description: "Timely lending and efficient recovery mechanisms.",
            icon: <GiReceiveMoney className="text-4xl" />,
            image: cardfour
        },
        {
            title: "Affordable Access",
            description: "Provision of agricultural inputs at fair and competitive rates.",
            icon: <FaHandshake className="text-4xl" />,
            image: cardfive
        },
        {
            title: "Integrated Solutions",
            description: "Seamless linking of credit services with marketing support.",
            icon: <MdIntegrationInstructions className="text-4xl" />,
            image: cardeight
        },
        {
            title: "Knowledge Empowerment",
            description: "Consistent delivery of comprehensive agricultural practices.",
            icon: <BsLightbulb className="text-4xl" />,
            image: cardnine
        },
        {
            title: "Agri-Business Support",
            description: "Lending targeted towards entrepreneurial agricultural ventures.",
            icon: <MdBusinessCenter className="text-4xl" />,
            image: cardtwo
        },
        {
            title: "Seed Advancement",
            description: "Supply of high-quality, improved seed varieties.",
            icon: <FaSeedling className="text-4xl" />,
            image: cardsix
        },
        {
            title: "Welfare Focus",
            description: "Implementation of impactful welfare measures, including insurance services.",
            icon: <RiHandHeartLine className="text-4xl" />,
            image: cardone
        },
        {
            title: "Social Responsibility",
            description: "Active patronage to community-building and social activities.",
            icon: <FaUsers className="text-4xl" />,
            image: cardten
        },
        {
            title: "Member-Driven Growth",
            description: "Strong internal resources built through member share contributions and thrift deposits.",
            icon: <FaChartLine className="text-4xl" />,
            image: cardeleven
        },
        {
            title: "Marketing Expertise",
            description: "Exceptional marketing management ensuring optimal value realization.",
            icon: <HiLightBulb className="text-4xl" />,
            image: cardtwelve
        },
        {
            title: "Collective Trust",
            description: "Established goodwill and accountability within the member base.",
            icon: <FaHandshake className="text-4xl" />,
            image: cardthirteen
        },
        {
            title: "Ownership Culture",
            description: "Active participation of members, fostering a strong sense of ownership and collaboration.",
            icon: <RiTeamFill className="text-4xl" />,
            image: cardfourteen
        }
    ];    const SuccessCard = ({ formula, index }) => {
        const { scrollY } = useScroll();
        const y = useTransform(scrollY, [0, 1000], [0, 50]);

        return (
            <motion.div
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden 
                          shadow-lg hover:shadow-2xl transition-all duration-500 
                          border border-green-200/50 hover:border-green-400/50"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                style={{ y }}
            >
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                        src={formula.image}
                        alt={formula.title}
                        className="w-full h-full object-cover transition-transform duration-700 
                                 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 
                                 transition-colors duration-300">
                        {formula.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {formula.description}
                    </p>
                    
                    {/* Animated underline */}
                    <div className="mt-4 h-1 bg-gradient-to-r from-green-400 to-blue-500 
                                  transform scale-x-0 group-hover:scale-x-100 transition-transform 
                                  duration-500 rounded-full" />
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            <Helmet>
                <title>Our Winning Formula - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Discover the 14 key principles behind Mulkanoor's success - from independent governance and professional leadership to integrated solutions and community welfare initiatives."
                />
                <meta
                    name="keywords"
                    content="cooperative society principles, agricultural success, farmer empowerment, rural development, sustainable farming"
                />
            </Helmet>

            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                              w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Hero Section */}
            <div className="relative pt-24 pb-16 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 
                                  px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <FaTrophy className="text-yellow-600" />
                        Our Success Blueprint
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 
                                 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 
                                 bg-clip-text text-transparent">
                        The Winning Formula
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Discover the 14 foundational principles that have driven our success for over 
                        six decades, transforming rural communities and empowering thousands of farmers.
                    </p>

                    {/* Stats Row */}
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
                        {[
                            { number: "69+", label: "Years of Success" },
                            { number: "7600+", label: "Farmers Empowered" },
                            { number: "₹220Cr", label: "Credit Facilitated" },
                            { number: "14", label: "Core Principles" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                            >
                                <div className="text-2xl sm:text-3xl font-bold text-green-600">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div> */}
                </motion.div>
            </div>

            {/* Main Content - Card Grid */}
            <div className="container mx-auto px-4 pb-16 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                              gap-6 lg:gap-8">
                    {formulas.map((formula, index) => (
                        <SuccessCard key={index} formula={formula} index={index} />
                    ))}
                </div>

                {/* Call to Action Section */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl 
                                  p-8 sm:p-12 text-white max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Join Our Success Story
                        </h2>
                        <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Experience the power of cooperation and witness how these principles 
                            can transform your community too.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-green-600 px-8 py-3 rounded-full 
                                             font-semibold hover:bg-gray-100 transition-colors">
                                Learn More
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-full 
                                             font-semibold hover:bg-white/10 transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Winning;






// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { FaTrophy, FaHandshake, FaUsers, FaSeedling, FaChartLine } from 'react-icons/fa';
// import { BsFillShieldLockFill, BsLightbulb } from 'react-icons/bs';
// import { GiReceiveMoney, GiTeamUpgrade } from 'react-icons/gi';
// import { MdBusinessCenter, MdIntegrationInstructions } from 'react-icons/md';
// import { HiLightBulb } from 'react-icons/hi';
// import { RiTeamFill, RiHandHeartLine } from 'react-icons/ri';
// import cardone from '../assets/winning/card1.jpg';
// import cardtwo from '../assets/winning/card2.png';
// import cardthree from '../assets/winning/card3.jpg';
// import cardfour from '../assets/winning/card4.jpg';
// import cardfive from '../assets/winning/card5.jpg';
// import cardsix from '../assets/winning/card6.jpg';
// import cardseven from '../assets/winning/card7.jpg';
// import cardeight from '../assets/winning/card8.jpg';
// import cardnine from '../assets/winning/card9.jpg';
// import cardten from '../assets/winning/card10.jpg';
// import cardeleven from '../assets/winning/card11.jpg';
// import cardtwelve from '../assets/winning/card12.jpg';
// import cardthirteen from '../assets/winning/card13.jpg';
// import cardfourteen from '../assets/winning/card14.jpg';
// import cardfifteen from '../assets/winning/card15.jpg';
// import { Helmet } from 'react-helmet'

// const Winning = () => {
//     const formulas = [
//         {
//             title: "Independent Governance",
//             description: "Free from external interference, ensuring unbiased decision-making.",
//             icon: <BsFillShieldLockFill className="text-4xl" />,
//             image: cardseven
//         },
//         {
//             title: "Professional Leadership",
//             description: "Managed with dedication, honesty, and professional expertise.",
//             icon: <GiTeamUpgrade className="text-4xl" />,
//             image: cardthree
//         },
//         {
//             title: "Rigorous Financial Discipline",
//             description: "Timely lending and efficient recovery mechanisms.",
//             icon: <GiReceiveMoney className="text-4xl" />,
//             image: cardfour
//         },
//         {
//             title: "Affordable Access",
//             description: "Provision of agricultural inputs at fair and competitive rates.",
//             icon: <FaHandshake className="text-4xl" />,
//             image: cardfive
//         },
//         {
//             title: "Integrated Solutions",
//             description: "Seamless linking of credit services with marketing support.",
//             icon: <MdIntegrationInstructions className="text-4xl" />,
//             image: cardeight
//         },
//         {
//             title: "Knowledge Empowerment",
//             description: "Consistent delivery of comprehensive agricultural practices.",
//             icon: <BsLightbulb className="text-4xl" />,
//             image: cardnine
//         },
//         {
//             title: "Agri-Business Support",
//             description: "Lending targeted towards entrepreneurial agricultural ventures.",
//             icon: <MdBusinessCenter className="text-4xl" />,
//             image: cardtwo
//         },
//         {
//             title: "Seed Advancement",
//             description: "Supply of high-quality, improved seed varieties.",
//             icon: <FaSeedling className="text-4xl" />,
//             image: cardsix
//         },
//         {
//             title: "Welfare Focus",
//             description: "Implementation of impactful welfare measures, including insurance services.",
//             icon: <RiHandHeartLine className="text-4xl" />,
//             image: cardone
//         },
//         {
//             title: "Social Responsibility",
//             description: "Active patronage to community-building and social activities.",
//             icon: <FaUsers className="text-4xl" />,
//             image: cardten
//         },
//         {
//             title: "Member-Driven Growth",
//             description: "Strong internal resources built through member share contributions and thrift deposits.",
//             icon: <FaChartLine className="text-4xl" />,
//             image: cardeleven
//         },
//         {
//             title: "Marketing Expertise",
//             description: "Exceptional marketing management ensuring optimal value realization.",
//             icon: <HiLightBulb className="text-4xl" />,
//             image: cardtwelve
//         },
//         {
//             title: "Collective Trust",
//             description: "Established goodwill and accountability within the member base.",
//             icon: <FaHandshake className="text-4xl" />,
//             image: cardthirteen
//         },
//         {
//             title: "Ownership Culture",
//             description: "Active participation of members, fostering a strong sense of ownership and collaboration.",
//             icon: <RiTeamFill className="text-4xl" />,
//             image: cardfourteen
//         }
//     ];

//     const FloatingImage = ({ src, className }) => {
//         const { scrollY } = useScroll();
//         const y = useTransform(scrollY, [0, 1000], [0, 100]);

//         return (
//             <motion.img
//                 src={src}
//                 className={`absolute pointer-events-none opacity-20 ${className}`}
//                 style={{ y }}
//                 animate={{
//                     rotate: [0, 10, -10, 0],
//                 }}
//                 transition={{
//                     duration: 8,
//                     repeat: Infinity,
//                     ease: "linear"
//                 }}
//             />
//         );
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#F0EBE0] to-[#E8E3D9] relative overflow-hidden">
//             <Helmet>
//                 <title>Our Winning Formula - Mulkanoor Cooperative Society</title>
//                 <meta 
//                     name="description" 
//                     content="Discover the 14 key principles behind Mulkanoor's success - from independent governance and professional leadership to integrated solutions and community welfare initiatives."
//                 />
//                 <meta
//                     name="keywords"
//                     content="cooperative society principles, agricultural success, farmer empowerment, rural development, sustainable farming"
//                 />
//             </Helmet>
//             {/* Replace Decorative Elements with CSS patterns */}
//             <div className="fixed inset-0 pointer-events-none">
//                 <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/20 to-transparent" />
//                 <div className="absolute inset-0 pattern-diagonal opacity-5" />
//                 <div className="absolute bottom-0 right-0 w-full h-64 pattern-dots opacity-5" />
//             </div>

//             {/* Hero Banner */}
//             <div className="relative h-[60vh] overflow-hidden">
//                 <div className="absolute inset-0">
//                     <img
//                         src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
//                         alt="Hero"
//                         className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/50" />
//                 </div>
//                 <div className="relative h-full flex items-center justify-center text-center px-4">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h1 className="text-4xl cursor-default md:text-6xl font-bold text-white mb-4">
//                             Our Winning Formula
//                         </h1>
//                         <p className="text-xl cursor-default text-white/90 max-w-2xl mx-auto">
//                             The key principles that drive our success and empower our community
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Content Sections with Enhanced Styling */}
//             <div className="container mx-auto px-4 py-16 relative">
//                 {/* Single section for all formulas using the alternating layout */}
//                 <div className="space-y-32">
//                     {formulas.map((formula, index) => (
//                         <motion.div
//                             key={index}
//                             className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
//                                 items-center gap-8 lg:gap-16 relative`}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8 }}
//                             viewport={{ once: true }}
//                         >
//                             {/* Enhanced Content Section */}
//                             <div className="flex-1 space-y-4 relative">
//                                 <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl -z-10" />
//                                 <div className="p-8">
//                                     <div className="flex items-center gap-4 text-[#4A3F35]">
//                                         {formula.icon}
//                                         <h2 className="text-3xl cursor-default font-bold">{formula.title}</h2>
//                                     </div>
//                                     <p className="text-lg text-[#8B7355] cursor-default leading-relaxed mt-4">
//                                         {formula.description}
//                                     </p>
//                                 </div>
//                             </div>                            {/* Enhanced Image Section */}
//                             <div className="flex-1 max-w-md mx-auto">
//                                 <div className="relative rounded-2xl overflow-hidden group">
//                                     <img
//                                         src={formula.image}
//                                         alt={formula.title}
//                                         className="w-full aspect-[4/3] transform transition-transform 
//                                             duration-700 group-hover:scale-110 object-cover"
//                                     />
//                                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 
//                                         transition-colors duration-300" />
//                                     {/* Decorative Corner Patterns */}
//                                     <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/30" />
//                                     <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/30" />
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Remove the grid card layout section and replace with a simple spacer */}
//                 <div className="mt-32"></div>
//             </div>
//         </div>
//     );
// };

// export default Winning;