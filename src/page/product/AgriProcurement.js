import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaShieldAlt, FaUserTie, FaChartLine } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import paddySeedImg from '../../assets/product/procurement/paddyseed.jpg';
import paddyImg from '../../assets/product/procurement/paddy.jpg';
import riceImg from '../../assets/product/procurement/rice.jpg';
import cottonImg from '../../assets/product/procurement/cotton.jpg';

const AgriProcurement = () => {
    // Benefits data for the procurement process
    const benefits = [
        {
            icon: <FaHandshake className="text-4xl text-green-600" />,
            title: "Best Price Guarantee",
            description: "Paddy is purchased at the higher of market rate or MSP, ensuring farmers always receive the best possible price for their produce.",
            image: paddyImg
        },
        {
            icon: <FaShieldAlt className="text-4xl text-green-600" />,
            title: "Lower Risks",
            description: "Minimizes post-harvest storage and transportation burdens, reducing the risk of crop losses and quality deterioration.",
            image: paddySeedImg
        },
        {
            icon: <FaUserTie className="text-4xl text-green-600" />,
            title: "Market Protection",
            description: "Eliminates middlemen, ensuring fair trade practices and direct benefits to farmers without exploitation.",
            image: riceImg
        },
        {
            icon: <FaChartLine className="text-4xl text-green-600" />,
            title: "Efficiency & Savings",
            description: "Reduces labor requirements and saves Rs. 100 per quintal through streamlined procurement processes.",
            image: cottonImg
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-24">
            <Helmet>
                <title>Agri Produce Procurement - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Mulkanoor's fair and efficient agricultural produce procurement services including best price guarantees, reduced risks, and cost savings for farmers."
                />
                <meta
                    name="keywords"
                    content="agricultural procurement, fair pricing, MSP, farm produce, paddy procurement, cotton procurement, agricultural cooperative"
                />
                <meta 
                    property="og:title" 
                    content="Agri Produce Procurement - Mulkanoor Cooperative Society" 
                />
                <meta 
                    property="og:description" 
                    content="Ensuring fair pricing, reduced risks, and cost savings for farmers through our trusted procurement services." 
                />
            </Helmet>

            {/* Hero Section */}
            <div className="relative h-[400px] mb-16 overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url('${paddyImg}')`,
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
                        className="text-center px-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Agri Produce Procurement
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Ensuring fair pricing, reduced risks, and cost savings for our farmers
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Benefits Section */}
            <div className="container mx-auto px-4 mb-20">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                        Our Procurement Benefits
                    </h2>
                    <p className="text-lg text-green-700 max-w-3xl mx-auto">
                        Mulkanoor Cooperative Society's agri-produce procurement ensures fair pricing, 
                        reduced risks, and cost savings for farmers through our trusted services.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Image Section - Alternate sides */}
                            <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <div className="rounded-xl overflow-hidden shadow-xl h-[300px]">
                                    <img 
                                        src={benefit.image} 
                                        alt={benefit.title} 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-green-100 p-4 rounded-full">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-green-800">
                                            {benefit.title}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Products We Procure Section */}
            <div className="bg-white/50 py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                            Products We Procure
                        </h2>
                        <p className="text-lg text-green-700 max-w-3xl mx-auto">
                            We procure a variety of agricultural products from our member farmers
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Paddy Seed", image: paddySeedImg },
                            { name: "Paddy", image: paddyImg },
                            { name: "Rice", image: riceImg },
                            { name: "Cotton", image: cottonImg }
                        ].map((product, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                                        {product.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-green-500/20 rounded-full"
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

export default AgriProcurement;
