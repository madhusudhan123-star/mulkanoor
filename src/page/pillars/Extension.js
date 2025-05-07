import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaFlask, FaBook, FaUsers, FaRoute, FaMicroscope, FaLeaf, FaHandsHelping, FaBoxOpen } from 'react-icons/fa';
import { GiFarmTractor, GiTeacher } from 'react-icons/gi';
import { MdGroups, MdOutlineAgricultural } from 'react-icons/md';
import { BsBookshelf } from 'react-icons/bs';
import banner from '../../assets/extension/banner.jpg';
import card1 from '../../assets/extension/card1.jpg';
import card2 from '../../assets/extension/card2.jpg';
import card3 from '../../assets/extension/card3.jpg';
import card4 from '../../assets/extension/card4.jpg';
import sideimg from '../../assets/extension/onesideimg.jpg';
import { Helmet } from 'react-helmet'

const Extension = () => {
    const images = {
        banner: {
            url: banner,
            dimensions: "1920x1080px",  // Hero banner (16:9 aspect ratio)
            maxSize: "500KB"
        },
        training: {
            url: card1,
            dimensions: "800x600px",    // Feature card image (4:3 aspect ratio)
            maxSize: "200KB"
        },
        soil: {
            url: card2,
            dimensions: "800x600px",    // Feature card image (4:3 aspect ratio)
            maxSize: "200KB"
        },
        library: {
            url: card3,
            dimensions: "800x600px",    // Feature card image (4:3 aspect ratio)
            maxSize: "200KB"
        },
        tour: {
            url: sideimg,
            dimensions: "1200x800px",   // Training section image (3:2 aspect ratio)
            maxSize: "300KB"
        },
        side: {
            url: card4,
            dimensions: "1200x800px",   // Side image (3:2 aspect ratio)
            maxSize: "300KB"
        }
    };

    const features = [
        {
            title: "Information Center",
            description: "State-of-the-art classroom with visual aids and modern technology",
            icon: <GiTeacher className="text-4xl" />,
            image: images.training.url
        },
        {
            title: "Resource Library",
            description: "Extensive collection of agricultural books, magazines, and documentaries",
            icon: <BsBookshelf className="text-4xl" />,
            image: images.soil.url
        },
        {
            title: "Professional Guidance",
            description: "Six agriculture graduates providing expert cultivation advice",
            icon: <FaGraduationCap className="text-4xl" />,
            image: images.library.url
        },
        {
            title: "Soil Testing",
            description: "Advanced laboratory for soil quality assessment and recommendations",
            icon: <FaMicroscope className="text-4xl" />,
            image: images.tour.url
        }
    ];

    const stats = [
        { value: 3171, label: "Farmers Trained" },
        { value: 6, label: "Agriculture Experts" },
        { value: 100, label: "Training Programs" },
        { value: 50, label: "Partner Institutions" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br pt-24 from-[#E8F5E9] via-[#C8E6C9] to-[#A5D6A7]">
            <Helmet>
                <title>Agricultural Extension Services - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Access expert agricultural training, soil testing, and modern farming techniques. Join 3000+ trained farmers benefiting from our state-of-the-art information center and professional guidance."
                />
                <meta
                    name="keywords"
                    content="agricultural training, farmer education, soil testing, farming techniques, agricultural extension, IFFCO training center"
                />
                <meta 
                    property="og:title" 
                    content="Agricultural Extension Services - Mulkanoor Cooperative Society" 
                />
                <meta 
                    property="og:description" 
                    content="Comprehensive agricultural training and support services including soil testing, modern farming techniques, and professional guidance from agricultural experts." 
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        "name": "Mulkanoor Agricultural Extension Services",
                        "description": "Agricultural training and support center providing farmer education and modern farming techniques",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Mulkanoor",
                            "addressRegion": "Telangana",
                            "addressCountry": "IN"
                        },
                        "offers": {
                            "@type": "Offer",
                            "name": "Agricultural Training Programs",
                            "description": "Professional training in modern farming techniques and agricultural practices"
                        },
                        "amenityFeature": [
                            {
                                "@type": "LocationFeatureSpecification",
                                "name": "Information Center",
                                "value": "State-of-the-art classroom with visual aids"
                            },
                            {
                                "@type": "LocationFeatureSpecification",
                                "name": "Resource Library",
                                "value": "Agricultural books and documentaries"
                            },
                            {
                                "@type": "LocationFeatureSpecification",
                                "name": "Soil Testing Lab",
                                "value": "Advanced laboratory facilities"
                            }
                        ]
                    })}
                </script>
            </Helmet>
            {/* Hero Banner */}
            <div className="relative h-[300px] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={images.banner.url}
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
                        <h1 className="text-4xl cursor-default md:text-6xl font-bold text-white mb-6">
                            Agricultural Extension Services
                        </h1>
                        <p className="text-xl cursor-default text-white/90 max-w-3xl mx-auto">
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
                            <div className="text-[#1B5E20] cursor-default mt-2">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Farmers Information & Training Centre Section */}
                <motion.div
                    className="bg-white/90 rounded-xl overflow-hidden mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <GiTeacher className="text-4xl text-[#2E7D32]" />
                                <h2 className="text-3xl cursor-default font-bold text-[#2E7D32]">Farmers Training Centre</h2>
                            </div>
                            <p className="text-[#1B5E20] cursor-default mb-6">
                                Mulkanoor Cooperative Society has established a Farmer Information and Training Center at its headquarters. Equipped with state-of-the-art classroom technology, the center provides farmers with valuable learning resources. Visual aids depicting pest attacks are displayed on the walls, while a vast collection of agricultural books, magazines, and documentary films offer in-depth knowledge. This initiative ensures that farmers stay informed and trained in the latest agricultural practices.
                            </p>
                        </div>
                        <div className="relative h-[300px] md:h-auto">
                            <img
                                src={images.soil.url}
                                alt="Farmers Information & Training Centre"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Agri Awareness Programmes Section */}
                <motion.div
                    className="bg-white/90 rounded-xl overflow-hidden mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative h-[300px] md:h-auto order-2 md:order-1">
                            <img
                                src={images.training.url}
                                alt="Agri Awareness Programmes"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-8 order-1 md:order-2">
                            <div className="flex items-center gap-3 mb-4">
                                <FaGraduationCap className="text-4xl text-[#2E7D32]" />
                                <h2 className="text-3xl cursor-default font-bold text-[#2E7D32]">Awareness Programs</h2>
                            </div>
                            <p className="text-[#1B5E20] cursor-default mb-6">
                                The Cooperative has employed six agricultural graduates to conduct awareness programmes to the farmers. The farmers are provided with information related to new crop varieties, pests, diseases, crop rotation benefits, and package of practices to keep them aware and be prepared to face any situation. Additionally, the society collaborates with agricultural scientists from various disciplines to train farmers, ensuring they stay updated with the latest advancements.  By maintaining close ties with leading institutions and organizations, the Cooperative ensures that farmers have access to the latest production techniques, maximizing their farm yields and overall profitability.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Field Trainings & Study Tours Section */}
                <motion.div
                    className="bg-white/90 rounded-xl overflow-hidden mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <FaRoute className="text-4xl text-[#2E7D32]" />
                                <h2 className="text-3xl cursor-default font-bold text-[#2E7D32]">Field Trainings & Tour</h2>
                            </div>
                            <p className="text-[#1B5E20] cursor-default mb-6">
                                Mulkanoor Cooperative Society actively organizes study tours and training programs for farmers, helping them stay updated on the latest advancements in agriculture. Farmers are sent to agricultural universities, expos, AgriTech conferences, and seminars to learn about innovative farming technologies. A special training program for women farmers was also conducted at the Regional Agricultural Research Center in Warangal. So far, 3,171 farmers have participated in these study tours, gaining valuable insights into best practices in agriculture, horticulture, and allied activities.
                            </p>
                        </div>
                        <div className="relative h-[300px] md:h-auto">
                            <img
                                src={images.library.url}
                                alt="Field Trainings & Study Tours"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Branding & Marketing Section */}
                {/* <motion.div
                    className="bg-white/90 rounded-xl overflow-hidden mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative h-[300px] md:h-auto order-2 md:order-1">
                            <img
                                src={images.tour.url}
                                alt="Branding & Marketing"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-8 order-1 md:order-2">
                            <div className="flex items-center gap-3 mb-4">
                                <FaBoxOpen className="text-4xl text-[#2E7D32]" />
                                <h2 className="text-3xl cursor-default font-bold text-[#2E7D32]">Branding Marketing</h2>
                            </div>
                            <p className="text-[#1B5E20] cursor-default mb-6">
                                The harvested produce is carefully processed and packaged under different rice brands, ensuring quality and value for farmers.
                            </p>
                        </div>
                    </div>
                </motion.div> */}

                {/* Features Grid - Alternative Display */}
                <h2 className="text-3xl cursor-default font-bold text-[#2E7D32] mb-8">Our Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/90 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="p-6 text-center">
                                <div className="flex justify-center mb-4 text-[#2E7D32]">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl cursor-default font-bold text-[#2E7D32] mb-2">{feature.title}</h3>
                                <p className="text-[#1B5E20] cursor-default text-sm">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Side Image Section */}
                {/* <motion.div 
                    className="bg-white/90 rounded-xl overflow-hidden mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8">
                            <h2 className="text-3xl cursor-default font-bold text-[#2E7D32] mb-4">Committed to Agricultural Excellence</h2>
                            <p className="text-[#1B5E20] cursor-default mb-6">
                                The Mulkanoor Cooperative Society is dedicated to promoting sustainable agricultural practices and providing comprehensive support to farmers. Through education, technology transfer, and continuous guidance, we aim to enhance rural livelihoods and ensure food security for future generations.
                            </p>
                        </div>
                        <motion.div
                            className="relative rounded-xl overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={images.side.url}
                                alt="Agricultural Excellence"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </motion.div> */}
            </div>
        </div>
    );
};

export default Extension;