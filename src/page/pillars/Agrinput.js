import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHandHoldingWater, FaTractor, FaSeedling, FaHandshake, FaLeaf, FaSprayCan, FaSeedling as FaSeed, FaTools } from 'react-icons/fa';
import { GiFarmTractor, GiWateringCan, GiReceiveMoney, GiFertilizerBag, GiSprout } from 'react-icons/gi';
import { RiGovernmentFill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';
import banner from '../../assets/agriinput/banner.jpg'
import ag1 from '../../assets/agriinput/ag1.jpg'
import ag2 from '../../assets/agriinput/ag2.jpg'
import ag3 from '../../assets/agriinput/ag3.jpg'
import ag4 from '../../assets/agriinput/ag4.jpg'
import ag5 from '../../assets/agriinput/ag5.jpg'
import ag6 from '../../assets/agriinput/ag6.jpg'
import sidebanner from '../../assets/agriinput/sidebanner.jpg'
import card1 from '../../assets/agriinput/card1.jpg'
import card2 from '../../assets/agriinput/card2.jpg'
import card3 from '../../assets/agriinput/card3.jpg'
import card4 from '../../assets/agriinput/card4.jpg'
import card5 from '../../assets/agriinput/card5.jpg'
import card6 from '../../assets/agriinput/card6.jpg'

const Agrinput = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -50]);

    const stats = [
        { value: 7130, label: "Members Benefited" },
        { value: 1549.26, label: "Lakhs in Subsidies" },
        { value: 6822, label: "Debt Relief Recipients" },
        { value: 7.95, label: "Crores in Loans (2015-16)" }
    ];

    // New content sections data
    const contentSections = [
        {
            id: "fertilizers",
            title: "Fertilizers",
            icon: <GiFertilizerBag className="text-5xl" />,
            content: "Mulkanoor Cooperative Society supports farmers by providing a wide range of high-quality fertilizers essential for soil health and crop productivity. By ensuring access to the right fertilizers at affordable prices, the society helps farmers achieve better yields, sustain soil fertility, and enhance overall agricultural efficiency.",
            image: ag1,
            color: "from-green-700 to-green-600"
        },
        {
            id: "pesticides",
            title: "Pesticides",
            icon: <FaSprayCan className="text-5xl" />,
            content: "Mulkanoor Cooperative Society provides farmers with a variety of high-quality pesticides to protect their crops from pests and diseases. By offering effective and affordable pest control solutions, the society helps farmers safeguard their yields, improve crop quality, and enhance overall farm productivity.",
            image: ag2,
            color: "from-green-600 to-emerald-500"
        },
        {
            id: "seeds",
            title: "Seeds",
            icon: <GiSprout className="text-5xl" />,
            content: "Mulkanoor Cooperative Society supplies farmers with high-quality paddy seeds to ensure better yields and sustainable farming. From high-yielding varieties to climate-resistant, the society provides a diverse range suited for different crops and soil types. By ensuring access to truthful and superior seeds, Mulkanoor helps farmers enhance productivity, improve crop resilience, and achieve greater profitability.",
            image: ag3,
            color: "from-emerald-500 to-teal-600"
        }
    ];

    // Agricultural implements section data
    const agriImplementsData = {
        title: "Agri Implements",
        icon: <FaTools className="text-5xl" />,
        content: "The society provides medium-term loans to support various agricultural and allied activities. These loans cover:",
        categories: [
            {
                title: "Agricultural Implements & Irrigation",
                items: "Digging of wells, electric motors, pipelines, drip irrigation, and sprinklers."
            },
            {
                title: "Farm Machinery",
                items: "Maize shellers, rotovators, tractor trailers, and other essential equipment."
            },
            {
                title: "Allied Agricultural Activities",
                items: "Dairy farming, sheep rearing, horticulture crops, and sericulture."
            },
            {
                title: "Welfare Initiatives",
                items: "Construction of toilets, solar lanterns, and LPG gas connections."
            }
        ],
        conclusion: "These loans help farmers improve productivity, adopt modern techniques, and enhance their overall well-being.",
        image: ag4
    };

    const services = [
        {
            title: "Government Collaboration",
            description: "Active partnerships with DRDA, SC/BC Corporations, Tribal Welfare, and NABARD",
            icon: <RiGovernmentFill className="text-4xl" />,
            img: card6,
        },
        {
            title: "Agricultural Implements",
            description: "Loans for machinery, implements, and modern farming equipment",
            icon: <GiFarmTractor className="text-4xl" />,
            img: card4,
        },
        {
            title: "Irrigation Solutions",
            description: "Support for wells, motors, pipelines, drip irrigation systems",
            icon: <GiWateringCan className="text-4xl" />,
            img: card3,
        },
        {
            title: "Allied Activities",
            description: "Funding for dairy, sheep rearing, horticulture, and sericulture",
            icon: <FaSeedling className="text-4xl" />,
            img: card2, // Add corresponding image URL

        },
        // {
        //     title: "Welfare Initiatives",
        //     description: "Support for toilets, solar lanterns, and LPG connections",
        //     icon: <BiSupport className="text-4xl" />,
        //     img: card5, // Add corresponding image URL

        // },
        {
            title: "Financial Support",
            description: "Debt relief and subsidy facilitation for eligible members",
            icon: <GiReceiveMoney className="text-4xl" />,
            img: card1,
        }
    ];

    const images = {
        banner: {
            url: banner,
            dimensions: "1920x1080px"
        },
        irrigation: {
            url: "",
            dimensions: "800x600px"
        },
        machinery: {
            url: sidebanner,
            dimensions: "800x600px"
        },
        support: {
            url: "",
            dimensions: "800x600px"
        },
        // Add new images
        gallery: [
            {
                url: ag1,
                dimensions: "1200x800px" // Modern farming
            },
            {
                url: ag2,
                dimensions: "600x600px" // Equipment
            },
            {
                url: ag3,
                dimensions: "600x600px" // Seeds
            },
            {
                url: ag4,
                dimensions: "1200x800px" // Traditional farming
            },
            {
                url: ag5,
                dimensions: "600x600px" // Technology
            },
            {
                url: ag6,
                dimensions: "600x600px" // Modern solutions
            }
        ]
    };

    // Add Image Masonry component
    const ImageMasonry = () => (
        <div className="container mx-auto px-4 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.gallery.map((image, index) => (
                    <motion.div
                        key={index}
                        className={`relative overflow-hidden rounded-xl ${index % 3 === 0 ? 'md:col-span-2 row-span-2' : ''
                            }`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <motion.img
                            src={image.url}
                            alt={`Agricultural Input ${index + 1}`}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 
                                    transition-colors duration-300" />
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E8F5E9] via-[#C8E6C9] to-[#A5D6A7]">
            {/* Hero Banner */}
            <div className="relative h-[60vh] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={images.banner.url}
                        alt="Agricultural Inputs"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Agricultural Input Services
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Supporting farmers with essential resources and modern solutions
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-16 pb-16">
                {/* Stats Section */}
                <div className="container mx-auto px-4 mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ type: "spring", delay: index * 0.1 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-sm text-[#1B5E20]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* New Content Sections */}
                <div className="container mx-auto px-4 mb-20">
                    <motion.h2 
                        className="text-4xl font-bold text-center text-[#1B5E20] mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Agricultural Input Services
                    </motion.h2>
                    
                    <div className="space-y-24">
                        {contentSections.map((section, index) => (
                            <motion.div 
                                key={section.id}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                    <motion.div
                                        className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg"
                                        initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`bg-gradient-to-br ${section.color} p-4 rounded-full text-white`}>
                                                {section.icon}
                                            </div>
                                            <h3 className="text-3xl font-bold text-[#1B5E20]">{section.title}</h3>
                                        </div>
                                        <p className="text-[#2E7D32] leading-relaxed text-lg">
                                            {section.content}
                                        </p>
                                    </motion.div>
                                </div>
                                <motion.div 
                                    className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="rounded-xl overflow-hidden shadow-xl">
                                        <img 
                                            src={section.image} 
                                            alt={section.title} 
                                            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Agri Implements Section */}
                <div className="container mx-auto px-4 mb-20 py-16 bg-white/50 backdrop-blur-sm rounded-3xl">
                    <motion.div 
                        className="grid grid-cols-1 lg:grid-cols-5 gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="lg:col-span-2">
                            <div className="sticky top-24">
                                <div className="bg-gradient-to-br from-teal-600 to-green-700 p-5 inline-block rounded-full text-white mb-6">
                                    {agriImplementsData.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-[#1B5E20] mb-4">{agriImplementsData.title}</h3>
                                <p className="text-[#2E7D32] leading-relaxed text-lg mb-6">
                                    {agriImplementsData.content}
                                </p>
                                <div className="rounded-xl overflow-hidden shadow-xl mt-8 hidden lg:block">
                                    <img 
                                        src={agriImplementsData.image} 
                                        alt={agriImplementsData.title} 
                                        className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="space-y-8">
                                {agriImplementsData.categories.map((category, index) => (
                                    <motion.div 
                                        key={index}
                                        className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <h4 className="text-xl font-bold text-[#2E7D32] mb-3">{category.title}</h4>
                                        <p className="text-[#1B5E20]">{category.items}</p>
                                    </motion.div>
                                ))}
                                <motion.div
                                    className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white shadow-lg"
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <p className="text-lg font-medium">{agriImplementsData.conclusion}</p>
                                </motion.div>
                                <div className="rounded-xl overflow-hidden shadow-xl mt-8 lg:hidden">
                                    <img 
                                        src={agriImplementsData.image} 
                                        alt={agriImplementsData.title} 
                                        className="w-full h-[300px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Image Masonry Section */}
                <div className="container mx-auto px-4 mb-20">
                    <motion.h2 
                        className="text-3xl font-bold text-center text-[#1B5E20] mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Agricultural Support Gallery
                    </motion.h2>
                    <ImageMasonry />
                </div>

                {/* Services Grid with Images */}
                <div className="container mx-auto px-4 mb-20">
                    <motion.h2 
                        className="text-3xl font-bold text-center text-[#1B5E20] mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Support Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/90 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl 
                                         transition-all duration-300 transform hover:-translate-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="text-[#2E7D32]">{service.icon}</div>
                                    </div>
                                    <p className="text-[#1B5E20]">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Add Floating Images */}
                <div className="relative">
                    <motion.img
                        src={images.irrigation.url}
                        className="absolute -left-20 top-1/4 w-40 h-40 rounded-full opacity-20"
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    {/* Add more floating images as needed */}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="container mx-auto px-4 mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white/90 rounded-2xl p-8 text-center shadow-xl">
                        <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">
                            Need Agricultural Support?
                        </h2>
                        <p className="text-[#1B5E20] mb-6">
                            Contact us to learn more about our agricultural input services and support programs
                        </p>
                        <button className="bg-[#2E7D32] text-white px-8 py-3 rounded-full font-semibold 
                                   hover:bg-[#1B5E20] transition-colors duration-300">
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSepAarKrA7FdpS-tKCYMmKn-uLdcCCU7CNKtK9d64_W76nXAQ/viewform?usp=dialog'>
                                Get Started
                            </a>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Agrinput;