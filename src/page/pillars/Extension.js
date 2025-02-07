import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaFlask, FaBook, FaUsers, FaRoute, FaMicroscope } from 'react-icons/fa';
import { GiFarmTractor, GiTeacher } from 'react-icons/gi';
import { MdGroups } from 'react-icons/md';
import { BsBookshelf } from 'react-icons/bs';

const Extension = () => {
    const images = {
        banner: "https://images.unsplash.com/photo-1589923188651-268a9765e432",
        training: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
        soil: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
        library: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
        tour: "https://images.unsplash.com/photo-1590682687104-e269eb11e413"
    };

    const features = [
        {
            title: "Information Center",
            description: "State-of-the-art classroom with visual aids and modern technology",
            icon: <GiTeacher className="text-4xl" />,
            image: images.training
        },
        {
            title: "Resource Library",
            description: "Extensive collection of agricultural books, magazines, and documentaries",
            icon: <BsBookshelf className="text-4xl" />,
            image: images.library
        },
        {
            title: "Professional Guidance",
            description: "Six agriculture graduates providing expert cultivation advice",
            icon: <FaGraduationCap className="text-4xl" />,
            image: images.training
        },
        {
            title: "Soil Testing",
            description: "Advanced laboratory for soil quality assessment and recommendations",
            icon: <FaMicroscope className="text-4xl" />,
            image: images.soil
        }
    ];

    const stats = [
        { value: 3171, label: "Farmers Trained" },
        { value: 6, label: "Agriculture Experts" },
        { value: 100, label: "Training Programs" },
        { value: 50, label: "Partner Institutions" }
    ];

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
                        src={images.banner}
                        alt="Extension Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Agricultural Extension Services
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Empowering farmers through knowledge, training, and technology
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/80 rounded-xl p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <motion.div
                                className="text-3xl md:text-4xl font-bold text-[#2E7D32]"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", delay: index * 0.1 }}
                            >
                                {stat.value}+
                            </motion.div>
                            <div className="text-[#1B5E20] mt-2">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/90 rounded-xl overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="flex items-center gap-3 text-white">
                                        {feature.icon}
                                        <h3 className="text-xl font-bold">{feature.title}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-[#1B5E20]">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Training Programs Section */}
                <motion.div
                    className="bg-white/90 rounded-xl p-8 mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <h2 className="text-3xl font-bold text-[#2E7D32] mb-8">Training Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <motion.div
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <FaRoute className="text-2xl text-[#2E7D32] mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold text-[#2E7D32]">Study Tours</h3>
                                    <p className="text-[#1B5E20]">Visits to agricultural universities, melas, and conferences</p>
                                </div>
                            </motion.div>
                            {/* Add more training items */}
                        </div>
                        <motion.div
                            className="relative rounded-xl overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={images.tour}
                                alt="Training Programs"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <button className="bg-[#2E7D32] text-white px-8 py-3 rounded-full font-semibold 
                                   hover:bg-[#1B5E20] transition-colors duration-300">
                        Join Our Next Training Program
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Extension;