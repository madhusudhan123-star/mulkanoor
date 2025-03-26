import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaShieldAlt, FaUserTie, FaChartLine } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
// import paddySeedImg from '../../assets/product/procurement/paddyseed.jpg';
import paddyImg from '../../assets/product/card1.jpg';
import riceImg from '../../assets/product/card2.jpg';
import cottonImg from '../../assets/product/card3.JPG';

const Product = () => {
    // Benefits data for the procurement process
    const benefits = [
        {
            icon: <FaHandshake className="text-4xl text-green-600" />,
            title: "Best Price Guarantee",
            description: "Paddy is purchased at the higher of market rate or MSP.",
            // image: paddyImg
        },
        {
            icon: <FaShieldAlt className="text-4xl text-green-600" />,
            title: "Lower Risks",
            description: "Minimizes post-harvest storage and transportation burdens.",
            // image: paddySeedImg
        },
        {
            icon: <FaUserTie className="text-4xl text-green-600" />,
            title: "Market Protection",
            description: "Eliminates middlemen, ensuring fair trade.",
            // image: riceImg
        },
        {
            icon: <FaChartLine className="text-4xl text-green-600" />,
            title: "Efficiency & Savings",
            description: "Reduces labor and saves Rs. 100 per quintal.",
            // image: cottonImg
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
                            // backgroundImage: `url('${paddyImg}')`,
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
                        {/* <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Ensuring fair pricing, reduced risks, and cost savings for our farmers
                        </p> */}
                    </motion.div>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Paddy", image: paddyImg, link: "/product/paddy" },
                            { name: "Rice", image: riceImg, link: "/product/rice" },
                            { name: "Cotton", image: cottonImg, link: "/product/cotton" }
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
                              <a href={product.link}>
                                <div className="h-64 overflow-hidden">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-full h-full transition-transform hover:scale-110 duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                                        {product.name}
                                    </h3>
                                </div>
                              </a>
                            </motion.div>
                        ))}
                    </div>
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
                    {/* <p className="text-lg text-green-700 max-w-3xl mx-auto">
                        Mulkanoor Cooperative Society's agri-produce procurement ensures fair pricing, 
                        reduced risks, and cost savings for farmers through our trusted services.
                    </p> */}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-green-100 p-4 rounded-full">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-green-800">
                                    {benefit.title}
                                </h3>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Product;
