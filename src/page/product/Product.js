import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaShieldAlt, FaUserTie, FaChartLine } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
// import paddySeedImg from '../../assets/product/procurement/paddyseed.jpg';
import paddyImg from '../../assets/product/card1.jpg';
import riceImg from '../../assets/product/card2.jpg';
import cottonImg from '../../assets/product/card3.JPG';
import banner from '../../assets/product/banner.jpg'
import card1 from '../../assets/product/paddy/card1.jpg';
import card2 from '../../assets/product/paddy/card2.jpg';
import card3 from '../../assets/product/paddy/card3.jpg';
import card4 from '../../assets/product/paddy/card4.jpg';
import card5 from '../../assets/product/paddy/card5.jpg';
import card6 from '../../assets/product/paddy/card6.jpg';
import paddy from '../../assets/product/paddy/PaddyProcurementone.JPG';
import padd2 from '../../assets/product/paddy/PaddyProcurementtwo.JPG';
import seed from '../../assets/product/paddy/PaddySeedProcurement1.JPG';
import seed2 from '../../assets/product/paddy/PaddySeedProcurement2.JPG';
import cotton from '../../assets/product/paddy/CottonProcurement1.JPG';
import cotton2 from '../../assets/product/paddy/CottonProcurement2.JPG';

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
            description: "Reduces labor and minimizes cost Rs. 100 per quintal.",
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
            <div className="relative h-[300px] mb-16 overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url('${banner}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    />
                </motion.div>

                <div className="relative z-10 h-full bg-black/50 flex items-center justify-center">
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
                            With our cooperative owned godowns and direct procurement centers in 18 villages, we cut transportation costs, eliminate middlemen, and optimize resources.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Products We Procure Section */}
            <div className="bg-white/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                                Paddy-seed procurement
                            </h2>
                            <p className="text-lg text-green-700 mb-6">
                                We procure breeder seed of high yielding varieties from universities and other certified agencies. This breeder seed is multiplied to foundation seed in the progressive farmer's field. The foundation seed is processed and supplied to farmers for production of truthful label/certified seeds. The seeds are procured, cleaned, graded and packed. The entire process of production, procurement and processing is supervised by society agricultural officers.
                            </p>
                        </motion.div>
                        
                        <motion.div 
                            className="lg:w-1/2"
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8 }} 
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[paddy, padd2].map((image, index) => (
                                    <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                        <img 
                                            src={image} 
                                            alt={`Paddy Seed Process ${index + 1}`} 
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Products We Procure Section */}
            <div className="bg-white/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                                Paddy-rice procurement:
                            </h2>
                            <p className="text-lg text-green-700 mb-6">
                                The fine paddy varieties of BPT, RNR, JSR are procured and processed in the modern raw rice mill for producing high quality mulkanoor branded rice. The coarse varieties are also procured, processed in the parboiled rice mill and supplied to FCI or third party exports.
                            </p>
                        </motion.div>
                        
                        <motion.div 
                            className="lg:w-1/2"
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8 }} 
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[seed, seed2].map((image, index) => (
                                    <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                        <img 
                                            src={image} 
                                            alt={`Paddy Seed Process ${index + 1}`} 
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Products We Procure Section */}
            <div className="bg-white/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                                Cotton procurement
                            </h2>
                            <p className="text-lg text-green-700 mb-6">
                                We facilitate cotton purchase directly from farmers in a transparent and fair manner. The quality based grading is done based on moisture, colour,and staple length.
                            </p>
                        </motion.div>
                        
                        <motion.div 
                            className="lg:w-1/2"
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8 }} 
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[cotton, cotton2].map((image, index) => (
                                    <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                        <img 
                                            src={image} 
                                            alt={`Paddy Seed Process ${index + 1}`} 
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
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
                        Procurement Benefits
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
