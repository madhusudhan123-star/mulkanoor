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
import { Helmet } from 'react-helmet'

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
            id: "seeds",
            title: "Seeds",
            icon: <GiSprout className="text-5xl" />,
            content: "The  seeds are supplied from society godown in each village. From these 18 godowns the Paddy, cotton, maize, and vegetables  seeds of high yielding varieties are available for farmers.",
            image: ag3,
            color: "from-emerald-500 to-teal-600"
        },
        {
            id: "fertilizers",
            title: "Fertilizers",
            icon: <GiFertilizerBag className="text-5xl" />,
            content: "The fertilizers are procured in advance of 3-4 months to ensure regular and timely availability to farmers and no member faces the shortage of fertilizers. The fertilizers are supplied through village godowns, This helps farmers by saving transportation costs, manpower and time  by getting fertilizers in his own village.",
            image: ag1,
            color: "from-green-700 to-green-600"
        },
        // {
        //     id: "pesticides",
        //     title: "Pesticides",
        //     icon: <FaSprayCan className="text-5xl" />,
        //     content: "Mulkanoor Cooperative Society provides farmers with a variety of high-quality pesticides to protect their crops from pests and diseases. By offering effective and affordable pest control solutions, the society helps farmers safeguard their yields, improve crop quality, and enhance overall farm productivity.",
        //     image: ag2,
        //     color: "from-green-600 to-emerald-500"
        // },
        
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
            }
        ],
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E8F5E9] via-[#C8E6C9] cursor-default to-[#A5D6A7]">
            <Helmet>
                <title>Agricultural Input Services - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Access quality agricultural inputs including fertilizers, pesticides, seeds, and farm implements. Supporting 7130+ farmers with subsidies and modern farming solutions."
                />
                <meta
                    name="keywords"
                    content="agricultural inputs, fertilizers, pesticides, farm implements, agricultural loans, irrigation solutions, farming equipment"
                />
                <meta 
                    property="og:title" 
                    content="Agricultural Input Services - Mulkanoor Cooperative Society" 
                />
                <meta 
                    property="og:description" 
                    content="Comprehensive agricultural input services including fertilizers, pesticides, seeds, and modern farming equipment. Supporting farmers with loans and subsidies." 
                />
                {/* Add structured data for organization/service */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Agricultural Input Services",
                        "provider": {
                            "@type": "Organization",
                            "name": "Mulkanoor Cooperative Society"
                        },
                        "description": "Comprehensive agricultural input services including fertilizers, pesticides, seeds, and farm implements",
                        "areaServed": "Telangana",
                        "serviceType": ["Farm Supplies", "Agricultural Support"],
                        "offers": {
                            "@type": "Offer",
                            "availableAtOrFrom": {
                                "@type": "LocalBusiness",
                                "name": "Mulkanoor Cooperative Society"
                            }
                        }
                    })}
                </script>
            </Helmet>
            {/* Hero Banner */}
            <div className="relative h-[300px] mt-0 md:mt-10 overflow-hidden">
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
                        <h1 className="text-4xl cursor-default md:text-6xl font-bold text-white mb-6">
                            Agricultural Input Services
                        </h1>
                        <p className="text-xl cursor-default text-white/90 max-w-3xl mx-auto">
                            Supplying the best quality inputs through society to our members.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-16">

                {/* New Content Sections */}
                <div className="container mx-auto px-4 mb-20">
                    <motion.h2 
                        className="text-4xl font-bold text-center cursor-default text-[#1B5E20] mb-16"
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
                                            <h3 className="text-3xl cursor-default font-bold text-[#1B5E20] cursor-default">{section.title}</h3>
                                        </div>
                                        <p className="text-[#2E7D32] cursor-default leading-relaxed text-lg">
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
                                            className="w-full h-[400px]  hover:scale-105 transition-transform duration-700"
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
                                <h3 className="text-3xl cursor-default font-bold text-[#1B5E20] cursor-default mb-4">{agriImplementsData.title}</h3>
                                <p className="text-[#2E7D32] cursor-default leading-relaxed text-lg mb-6">
                                    {agriImplementsData.content}
                                </p>
                                {/* <div className="rounded-xl overflow-hidden shadow-xl mt-8 hidden lg:block">
                                    <img 
                                        src={agriImplementsData.image} 
                                        alt={agriImplementsData.title} 
                                        className="w-full h-full hover:scale-105 transition-transform duration-700"
                                    />
                                </div> */}
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="space-y-8">
                                
                                {/* <motion.div
                                    className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white shadow-lg"
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <p className="text-lg font-medium">{agriImplementsData.conclusion}</p>
                                </motion.div> */}
                                <div className="rounded-xl overflow-hidden shadow-xl mt-8">
                                    <img 
                                        src={agriImplementsData.image} 
                                        alt={agriImplementsData.title} 
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Agrinput;