import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaGraduationCap, FaHandHoldingHeart, FaPiggyBank, FaHospital, FaLightbulb, FaHandHoldingWater, FaDog } from 'react-icons/fa';
import { GiHealthNormal, GiMedicalDrip } from 'react-icons/gi';
import { MdFamilyRestroom, MdOutlineWaterDrop } from 'react-icons/md';
import CountUp from 'react-countup';

const imageSpecs = {
    banner: {
        width: 1920,
        height: 1080,
        aspectRatio: "16:9",
        description: "Main hero banner - Community welfare image"
    },
    health: {
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        description: "Healthcare initiatives image",
        focus: "Medical camp or healthcare facility"
    },
    education: {
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        description: "Education support image",
        focus: "Students or educational facility"
    },
    community: {
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        description: "Community development image",
        focus: "Village infrastructure or community gathering"
    },
    water: {
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        description: "Water facility image",
        focus: "Water infrastructure or clean water access"
    },
    animal: {
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        description: "Animal welfare image",
        focus: "Veterinary care or animal husbandry"
    }
};

// Image optimization guidelines:
// 1. File size: Keep under 200KB each
// 2. Format: WebP with JPEG fallback
// 3. Resolution: Maintain specified dimensions
// 4. Composition: Center-focused for flexible cropping
// 5. Contrast: Ensure readability with text overlays
// 6. Color: Natural, warm tones preferred
// 7. Content: Real activity shots when possible

const Welfare = () => {
    const images = {
        banner: "https://images.unsplash.com/photo-1582213782179-e0d53f982ca0",
        health: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1fda",
        education: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
        community: "https://images.unsplash.com/photo-1593113598332-cd288dc84fb9",
        water: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189",
        animal: "https://images.unsplash.com/photo-1604167504016-e674a3098a9f"
    };

    const initiatives = [
        {
            title: "Community Development",
            description: "Electrification and water facility improvements",
            stats: { amount: 265.78, beneficiaries: 1827, years: "Since 1996" },
            icon: <FaLightbulb />,
            details: [
                "Village electrification through voluntary debentures",
                "RO plants installation for clean drinking water",
                "Borewell digging during droughts",
                "Family planning camps and counseling"
            ]
        },
        {
            title: "Member Welfare Scheme",
            description: "Financial support during critical times",
            stats: { amount: 51.45, beneficiaries: 2133, type: "Families Supported" },
            icon: <FaHandHoldingHeart />,
            details: [
                "₹2,000-4,000 deposit contributions",
                "12.5x payout on expiry",
                "₹3,000 funeral assistance",
                "50 kg rice support"
            ]
        },
        {
            title: "Education Support",
            description: "Comprehensive scholarship programs",
            stats: { amount: 94.14, beneficiaries: 8422, type: "Students" },
            icon: <FaGraduationCap />,
            details: [
                "Merit-based scholarships",
                "Intermediate scholarships",
                "Professional degree support",
                "₹11,000 for medical students"
            ]
        },
        {
            title: "Healthcare Initiatives",
            description: "Medical camps and healthcare support",
            stats: { operations: 1117, patients: 5000, centers: 1 },
            icon: <FaHeartbeat />,
            details: [
                "Free cataract operations",
                "Vision center establishment",
                "Spinal cord and knee camps",
                "Physiotherapy and yoga sessions"
            ]
        }
    ];

    const ImpactCard = ({ title, value, label }) => (
        <motion.div
            className="bg-white/90 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
        >
            <h3 className="text-xl font-semibold text-[#2E7D32] mb-2">{title}</h3>
            <div className="text-3xl font-bold text-[#1B5E20]">
                <CountUp end={value} duration={2.5} separator="," />+
            </div>
            <p className="text-[#4A3F35] mt-2">{label}</p>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E8F5E9] via-[#C8E6C9] to-[#A5D6A7]">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={images.banner}
                        alt="Community Welfare"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <div className="max-w-4xl px-4">
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold text-white mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Community Welfare Initiatives
                            </motion.h1>
                            <motion.p
                                className="text-xl text-white/90"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Building stronger communities through comprehensive support and care
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Initiative Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {initiatives.map((initiative, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/80 rounded-xl overflow-hidden shadow-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={images[Object.keys(images)[index + 1]]}
                                    alt={initiative.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-3xl">{initiative.icon}</span>
                                        <h2 className="text-2xl font-bold">{initiative.title}</h2>
                                    </div>
                                    <p className="text-white/90">{initiative.description}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {initiative.details.map((detail, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-center gap-3 text-[#1B5E20]"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <span className="h-2 w-2 bg-[#2E7D32] rounded-full" />
                                            {detail}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Impact Statistics */}
                <motion.div
                    className="bg-white/90 rounded-xl p-8 mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-8">Our Impact</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <ImpactCard title="Health Camps" value={5000} label="Patients Served" />
                        <ImpactCard title="Education" value={8422} label="Students Supported" />
                        <ImpactCard title="Welfare" value={2133} label="Families Assisted" />
                        <ImpactCard title="Eye Care" value={1117} label="Surgeries Performed" />
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <div className="bg-white/90 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
                        <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">Join Our Community</h2>
                        <p className="text-[#1B5E20] mb-6">
                            Be part of our mission to create a stronger, healthier, and more prosperous community
                        </p>
                        <button className="bg-[#2E7D32] text-white px-8 py-3 rounded-full font-semibold 
                                       hover:bg-[#1B5E20] transition-colors duration-300">
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSepAarKrA7FdpS-tKCYMmKn-uLdcCCU7CNKtK9d64_W76nXAQ/viewform?usp=dialog'>
                                Get Involved
                            </a>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Welfare;