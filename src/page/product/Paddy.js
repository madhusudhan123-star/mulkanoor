import React from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaChartLine, FaSeedling } from 'react-icons/fa6';
import { GiPlantSeed } from 'react-icons/gi';
import CountUp from 'react-countup';
import paddy1 from '../../assets/product/paddy/Paddy1.jpg';
import paddy2 from '../../assets/product/paddy/Paddy2.jpg';
import paddy3 from '../../assets/product/paddy/Paddy3.jpg';
import { Helmet } from 'react-helmet'
import card1 from '../../assets/product/paddy/card1.jpg';
import card2 from '../../assets/product/paddy/card2.jpg';
import card3 from '../../assets/product/paddy/card3.jpg';
import card4 from '../../assets/product/paddy/card4.jpg';
import card5 from '../../assets/product/paddy/card5.jpg';
import card6 from '../../assets/product/paddy/card6.jpg';

const Paddy = () => {
    const varieties = [
        { name: 'BPT 5204', image: card4 },
        { name: 'RNR 15048', image: card2 },
        { name: 'MTU 1010', image: card1 },
        { name: 'MTU 1001', image: card5 },
        { name: 'IR 64', image: card6 }
    ];

    const salesData = [
        {
            year: '2021-22',
            quantity: 12249,
            area: 424722,
            value: 356389161
        },
        {
            year: '2022-23',
            quantity: 12893,
            area: 515744,
            value: 441824625
        },
        {
            year: '2023-24',
            quantity: 11695,
            area: 430605,
            value: 360093000
        }
    ];

    const bannerImages = {
        main: paddy1,
        process: paddy3,
        metrics: paddy2
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16 md:pt-20 lg:pt-24">
            <Helmet>
                <title>Paddy Seeds Division - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Premium paddy seeds from Mulkanoor's specialized division. Offering high-yield varieties like BPT 5204, RNR 15048, MTU 1010, and more. Expert-supervised seed production for optimal harvests."
                />
                <meta
                    name="keywords"
                    content="paddy seeds, rice varieties, BPT 5204, RNR 15048, MTU 1010, agricultural seeds, Mulkanoor seeds"
                />
                <meta 
                    property="og:title" 
                    content="Paddy Seeds Division - Mulkanoor Cooperative Society" 
                />
                <meta 
                    property="og:description" 
                    content="Quality paddy seeds for prosperous harvests. Explore our varieties and seed production process." 
                />
            </Helmet>

            {/* Seed Production Process - Mobile Responsive */}
            <div className="relative mb-8 md:mb-12 lg:mb-16">
                <div className="absolute inset-0 h-[250px] md:h-[250px] lg:h-[300px] w-full">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src={bannerImages.process}
                        alt="Seed process"
                        className="w-full h-full object-cover"
                    />
                </div>
                <motion.div
                    className="relative z-20 container mx-auto px-4 pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-18 lg:pb-24 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
                        <FaSeedling className="inline-block cursor-default mr-2 md:mr-3 mb-1" />
                        Our Seed Production Process
                    </h2>
                    <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-xl max-w-4xl mx-auto">
                        <p className="text-sm md:text-lg lg:text-xl cursor-default text-white font-medium leading-relaxed">
                            Multiplication of breeder paddy seed into Foundation seed then to truthful seed in farmers' fields under the expert supervision of our society Agriculture Officers.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Varieties Section - Mobile Responsive */}
            <section className="container mx-auto px-4 mb-12 md:mb-16 lg:mb-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-emerald-800 text-center">
                    <FaSeedling className="inline-block cursor-default mr-2 md:mr-3 mb-1" />
                    Available Varieties
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
                    {varieties.map((variety, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="bg-emerald-100 flex items-center justify-center aspect-square">
                                <img 
                                    src={variety.image} 
                                    alt={variety.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-3 md:p-4 lg:p-6">
                                <h3 className="text-sm md:text-lg lg:text-xl cursor-default font-semibold text-emerald-900 text-center leading-tight">
                                    {variety.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Add Interactive Background Elements at the end */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-green-500/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Paddy;

// {/* Metrics Banner */}
// <div className="relative mb-16">
//     <div className="absolute inset-0 h-[300px] w-full">
//         <div className="absolute inset-0 bg-black/50 z-10" />
//         <img
//             src={bannerImages.metrics}
//             alt="Performance metrics"
//             className="w-full h-full object-cover"
//         />
//     </div>
//     <motion.div
//         className="relative z-20 container mx-auto px-4 pt-16 pb-24 text-center"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//     >
//         <h2 className="text-4xl font-bold mb-4 text-white">
//             <FaChartLine className="inline-block cursor-default mr-3 mb-1" />
//             Performance Metrics
//         </h2>
//         <p className="text-xl text-gray-100 cursor-default max-w-3xl mx-auto">
//             Our growing impact in numbers
//         </p>
//     </motion.div>
// </div>

// {/* Sales Statistics */}
// <section className="container mx-auto px-4 mb-20">
//     <div className="overflow-x-auto">
//         <table className="w-full bg-white rounded-xl shadow-lg">
//             <thead>
//                 <tr className="bg-emerald-100">
//                     <th className="p-4 cursor-default text-left text-emerald-900">Financial Year</th>
//                     <th className="p-4 cursor-default text-left text-emerald-900">Quantity Marketed (Tons)</th>
//                     <th className="p-4 cursor-default text-left text-emerald-900">Area Covered (Acres)</th>
//                     <th className="p-4 cursor-default text-left text-emerald-900">Value (₹)</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {salesData.map((year, index) => (
//                     <motion.tr
//                         key={index}
//                         className="border-b border-emerald-100"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.2 }}
//                     >