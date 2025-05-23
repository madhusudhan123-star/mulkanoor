import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa6';
import { GiCottonFlower } from 'react-icons/gi';
import CountUp from 'react-countup';
import cottom from '../../assets/cotton/cotton.jpg'
import { Helmet } from 'react-helmet'
import card1 from '../../assets/cotton/card1.JPG'
import card2 from '../../assets/cotton/card2.JPG'

const Cotton = () => {
    const salesData = [
        {
            year: '2021-22',
            lint: { bales: 2740, value: 107858795 },
            seed: { quantity: 913, value: 36438340 },
            totalValue: 144297135
        },
        {
            year: '2022-23',
            lint: { bales: 4389, value: 131670000 },
            seed: { quantity: 1386, value: 41580000 },
            totalValue: 173260000
        },
        {
            year: '2023-24',
            lint: { bales: 5181, value: 147303000 },
            seed: { quantity: 1598, value: 42398150 },
            totalValue: 189601150
        }
    ];

    const features = [
        {
            title: "Cotton Lint",
            description: "Premium quality cotton lint processed with advanced technology",
            icon: <GiCottonFlower className="text-6xl" />,
            color: "from-blue-500/20 to-blue-600/20"
        },
        {
            title: "Cotton Seed",
            description: "High-yield cotton seeds for sustainable farming",
            icon: <GiCottonFlower className="text-6xl" />,
            color: "from-green-500/20 to-green-600/20"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-24">
            <Helmet>
                <title>Cotton Division - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Premium cotton products from Mulkanoor's Cotton Division. Explore our high-quality cotton lint and seeds, backed by advanced processing technology and sustainable farming practices."
                />
                <meta
                    name="keywords"
                    content="cotton lint, cotton seeds, sustainable cotton farming, agricultural products, Mulkanoor cotton division"
                />
                <meta 
                    property="og:title" 
                    content="Cotton Division - Mulkanoor Cooperative Society" 
                />
                <meta 
                    property="og:description" 
                    content="Quality cotton products for sustainable agriculture. View our performance metrics and product offerings." 
                />
            </Helmet>
            {/* Interactive Hero Section */}
            <div className="relative h-[300px] mb-16 overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${cottom})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    />
                </motion.div>

                <div className="relative z-10 h-full flex items-center justify-center">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-6xl cursor-default md:text-7xl font-bold text-black mb-6">
                            Cotton Division
                        </h1>
                        <p className="text-xl cursor-default text-black/90 max-w-2xl mx-auto">
                            Quality cotton products for sustainable agriculture
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-2xl overflow-hidden relative`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color}`} />
                            <div className="relative z-10 p-8 backdrop-blur-sm">
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        duration: 2
                                    }}
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3 className="text-2xl cursor-default font-bold mt-4 text-gray-800">{feature.title}</h3>
                                <p className="mt-2 cursor-default text-gray-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Cotton Factory Showcase */}
            <section className="container mx-auto px-4 mb-20">
                <motion.h2 
                    className="text-3xl font-bold text-center mb-10 text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Cotton Factory
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="rounded-2xl overflow-hidden shadow-lg"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img 
                            src={card1} 
                            alt="Cotton processing facility" 
                            className="w-full h-64 object-cover"
                        />
                        {/* <div className="p-5 bg-white">
                            <h3 className="text-xl font-semibold mb-2">Advanced Processing Facility</h3>
                            <p className="text-gray-600">Our state-of-the-art cotton processing unit ensures premium quality lint production with optimal efficiency.</p>
                        </div> */}
                    </motion.div>
                    
                    <motion.div
                        className="rounded-2xl overflow-hidden shadow-lg"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img 
                            src={card2} 
                            alt="Cotton production line" 
                            className="w-full h-64 object-cover"
                        />
                        {/* <div className="p-5 bg-white">
                            <h3 className="text-xl font-semibold mb-2">Quality Production</h3>
                            <p className="text-gray-600">We maintain rigorous quality standards throughout our cotton processing and packaging operations.</p>
                        </div> */}
                    </motion.div>
                </div>
            </section>

            {/* Interactive Statistics Section */}
            {/* <section className="container mx-auto px-4 mb-20">
                <motion.div
                    className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600">
                        <h2 className="text-3xl cursor-default font-bold text-white flex items-center gap-3">
                            <FaChartLine />
                            Performance Metrics
                        </h2>
                    </div>

                    <div className="overflow-x-auto p-6">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="p-4 cursor-default text-left text-gray-700">Financial Year</th>
                                    <th className="p-4 cursor-default text-left text-gray-700">Cotton Lint (Bales)</th>
                                    <th className="p-4 cursor-default text-left text-gray-700">Lint Value (₹)</th>
                                    <th className="p-4 cursor-default text-left text-gray-700">Cotton Seed (Tons)</th>
                                    <th className="p-4 cursor-default text-left text-gray-700">Seed Value (₹)</th>
                                    <th className="p-4 cursor-default text-left text-gray-700">Total Value (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {salesData.map((year, index) => (
                                    <motion.tr
                                        key={index}
                                        className="border-b border-gray-100"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                                    >
                                        <td className="p-4 font-semibold">{year.year}</td>
                                        <td className="p-4">
                                            <CountUp end={year.lint.bales} duration={2} separator="," />
                                        </td>
                                        <td className="p-4">
                                            ₹<CountUp end={year.lint.value} duration={2} separator="," />
                                        </td>
                                        <td className="p-4">
                                            <CountUp end={year.seed.quantity} duration={2} separator="," />
                                        </td>
                                        <td className="p-4">
                                            ₹<CountUp end={year.seed.value} duration={2} separator="," />
                                        </td>
                                        <td className="p-4 font-semibold text-blue-600">
                                            ₹<CountUp end={year.totalValue} duration={2} separator="," />
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </section> */}

            {/* Interactive Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-blue-500/20 rounded-full"
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

export default Cotton;