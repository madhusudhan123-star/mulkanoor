import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHandHoldingWater, FaTractor, FaSeedling, FaHandshake } from 'react-icons/fa';
import { GiFarmTractor, GiWateringCan, GiReceiveMoney } from 'react-icons/gi';
import { RiGovernmentFill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';
import banner from '../../assets/agriinput/banner.jpg'

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

    const services = [
        {
            title: "Government Collaboration",
            description: "Active partnerships with DRDA, SC/BC Corporations, Tribal Welfare, and NABARD",
            icon: <RiGovernmentFill className="text-4xl" />,
            img: "",
        },
        {
            title: "Agricultural Implements",
            description: "Loans for machinery, implements, and modern farming equipment",
            icon: <GiFarmTractor className="text-4xl" />,
            img: "",
        },
        {
            title: "Irrigation Solutions",
            description: "Support for wells, motors, pipelines, drip irrigation systems",
            icon: <GiWateringCan className="text-4xl" />,
            img: "",
        },
        {
            title: "Allied Activities",
            description: "Funding for dairy, sheep rearing, horticulture, and sericulture",
            icon: <FaSeedling className="text-4xl" />,
            img: "", // Add corresponding image URL

        },
        {
            title: "Welfare Initiatives",
            description: "Support for toilets, solar lanterns, and LPG connections",
            icon: <BiSupport className="text-4xl" />,
            img: "", // Add corresponding image URL

        },
        {
            title: "Financial Support",
            description: "Debt relief and subsidy facilitation for eligible members",
            icon: <GiReceiveMoney className="text-4xl" />,
            img: "",
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
            url: "",
            dimensions: "800x600px"
        },
        support: {
            url: "",
            dimensions: "800x600px"
        },
        // Add new images
        gallery: [
            {
                url: "",
                dimensions: "1200x800px" // Modern farming
            },
            {
                url: "",
                dimensions: "600x600px" // Equipment
            },
            {
                url: "",
                dimensions: "600x600px" // Seeds
            },
            {
                url: "",
                dimensions: "1200x800px" // Traditional farming
            },
            {
                url: "",
                dimensions: "600x600px" // Technology
            },
            {
                url: "",
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

                {/* Add Image Masonry after Stats Section */}
                <ImageMasonry />

                {/* Featured Section */}
                <div className="container mx-auto px-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#2E7D32]">
                                Comprehensive Support System
                            </h2>
                            <p className="text-[#1B5E20] leading-relaxed">
                                Our cooperative actively collaborates with government agencies to secure subsidies
                                and support for our members. Since 1996, we've facilitated over ₹1549.26 lakhs
                                in subsidies for 7,130 members.
                            </p>
                            <ul className="space-y-4">
                                <motion.li
                                    className="flex items-center gap-3 text-[#2E7D32]"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <span className="h-2 w-2 bg-[#2E7D32] rounded-full" />
                                    Government scheme integration
                                </motion.li>
                                {/* Add more list items as needed */}
                            </ul>
                        </div>
                        <motion.div
                            className="relative rounded-xl overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={images.machinery.url}
                                alt="Agricultural Machinery"
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Services Grid with Images */}
                <div className="container mx-auto px-4">
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