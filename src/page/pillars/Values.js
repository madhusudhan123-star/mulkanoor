import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaIndustry, FaSeedling, FaStore, FaGraduationCap, FaTractor, FaWater, FaFemale, FaSchool, FaUserGraduate, FaHandHoldingWater } from 'react-icons/fa';
import { GiFactory, GiWheat, GiCottonFlower, GiTeacher } from 'react-icons/gi';
import { MdBusinessCenter, MdOutlineWaterDrop, MdComputer } from 'react-icons/md';
import { BiStore } from 'react-icons/bi';
import { IoMdWater } from 'react-icons/io';
import { BiBuildingHouse, BiBookReader } from 'react-icons/bi';
import { RiWomenLine, RiGovernmentLine } from 'react-icons/ri';

const Values = () => {
    const images = {
        banner: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c",
        processing: "https://images.unsplash.com/photo-1595924733095-c5c81b4cc1c7",
        seeds: "https://images.unsplash.com/photo-1574943320219-eaf91e12ed85",
        storage: "https://images.unsplash.com/photo-1604335078431-6c4fcfa45702",
        education: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
        watershed: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        women: "https://images.unsplash.com/photo-1573497161423-acff4dcc5373"
    };

    const stats = [
        { value: 40000, suffix: "MT", label: "Storage Capacity" },
        { value: 22.21, prefix: "₹", suffix: "Cr", label: "Bonus Distributed" },
        { value: 10000, suffix: "Acres", label: "Annual Seed Production" },
        { value: 489, label: "Students (2015-16)" }
    ];

    const services = [
        {
            title: "Processing Infrastructure",
            items: [
                "4 TPH Satake parboiled rice mill",
                "35 cotton ginning machines",
                "16 bales/hour pressing unit",
                "6 seed processing units (14 TPH)"
            ],
            icon: <GiFactory className="text-4xl" />,
            image: images.processing
        },
        {
            title: "Seed Production",
            items: [
                "Production since 1970",
                "8-10 paddy varieties",
                "1-1.3 lakh quintals annually",
                "R&D in maize and paddy"
            ],
            icon: <GiWheat className="text-4xl" />,
            image: images.seeds
        },
        {
            title: "Marketing Services",
            items: [
                "MSP or higher rates",
                "20 godowns facility",
                "Efficient logistics",
                "Direct bonus payments"
            ],
            icon: <MdBusinessCenter className="text-4xl" />,
            image: images.storage
        }
    ];

    const bonusRates = [
        { item: "BPT Paddy", rate: "₹110", unit: "per quintal" },
        { item: "Other Paddy", rate: "₹85", unit: "per quintal" },
        { item: "Paddy Seed", rate: "₹100", unit: "per quintal" },
        { item: "Cotton", rate: "₹250", unit: "per quintal" }
    ];

    const initiatives = [
        {
            title: "Educational Excellence",
            stats: [
                { number: 489, label: "Total Students" },
                { number: 272, label: "Female Students" },
                { number: 56, suffix: "%", label: "Female Ratio" },
                { number: 2, label: "Institutions" }
            ],
            description: "Established educational institutions providing quality education since 2001",
            icon: <FaGraduationCap className="text-4xl" />,
            image: images.education
        },
        {
            title: "Watershed Development",
            stats: [
                { number: 283.70, suffix: "Ha", label: "Area Covered" },
                { number: 2.62, prefix: "₹", suffix: "Cr", label: "NABARD Funding" },
                { number: 3, label: "Projects" }
            ],
            description: "Implementation of watershed projects for sustainable water management",
            icon: <FaHandHoldingWater className="text-4xl" />,
            image: images.watershed
        },
        {
            title: "Women Empowerment",
            description: "Free training programs in tailoring and computer applications",
            icon: <FaFemale className="text-4xl" />,
            image: images.women,
            programs: [
                { icon: <MdComputer />, name: "Computer Training" },
                { icon: <GiTeacher />, name: "Tailoring Classes" }
            ]
        }
    ];

    const ruralInitiatives = [
        {
            title: "Educational Excellence",
            stats: {
                total: 489,
                female: 272,
                percentage: 56
            },
            timeline: [
                { year: 2001, event: "Junior College Launch" },
                { year: 2003, event: "Degree College Established" },
                { year: 2015, event: "Achieved 56% Female Enrollment" }
            ],
            icon: <BiBookReader />,
            image: images.education
        },
        {
            title: "Watershed Development",
            stats: {
                area: 283.70,
                funding: 2.62,
                projects: 3
            },
            features: [
                "NABARD Funded Projects",
                "Sustainable Water Management",
                "Community Participation",
                "Environmental Conservation"
            ],
            icon: <MdOutlineWaterDrop />,
            image: images.watershed
        },
        {
            title: "Women Empowerment",
            programs: [
                {
                    name: "Tailoring Training",
                    participants: 150,
                    duration: "6 months"
                },
                {
                    name: "Computer Education",
                    participants: 200,
                    duration: "3 months"
                }
            ],
            icon: <RiWomenLine />,
            image: images.women
        }
    ];

    const Timeline = () => (
        <div className="container mx-auto px-4 py-16">
            <div className="relative">
                <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#2E7D32]" />
                {[
                    { year: 2000, event: "Establishment of A.K. Vishwanatha Reddy Rural Development Society Ltd." },
                    { year: 2001, event: "Launch of Junior College" },
                    { year: 2003, event: "Establishment of Degree College" },
                    { year: 2015, event: "Achieved 56% female student enrollment" }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className={`flex flex-col md:flex-row gap-8 mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="flex-1" />
                        <div className="w-8 h-8 absolute left-0 md:left-1/2 transform md:-translate-x-1/2 
                                    bg-[#2E7D32] rounded-full z-10 flex items-center justify-center text-white">
                            {index + 1}
                        </div>
                        <div className="flex-1 ml-12 md:ml-0">
                            <div className="bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-xl 
                                        transition-all duration-300">
                                <div className="text-[#2E7D32] font-semibold">{item.year}</div>
                                <p className="text-[#1B5E20] mt-2">{item.event}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    const RuralDevelopment = () => (
        <div className="py-16 bg-gradient-to-b from-transparent to-white/5">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#4A3F35] to-[#8B7355] 
                        bg-clip-text text-transparent mb-4">
                        Rural Development Initiatives
                    </h2>
                    <p className="text-[#8B7355] max-w-2xl mx-auto">
                        Established in 2000, A.K. Vishwanatha Reddy Rural Development Society Ltd. 
                        continues to drive comprehensive rural development
                    </p>
                </motion.div>

                {/* Initiatives Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {ruralInitiatives.map((initiative, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            {/* Card with Hover Effect */}
                            <div className="bg-white/90 rounded-xl overflow-hidden shadow-lg 
                                transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                {/* Image Section */}
                                <div className="h-48 relative overflow-hidden">
                                    <img 
                                        src={initiative.image}
                                        alt={initiative.title}
                                        className="w-full h-full object-cover transition-transform 
                                            duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex items-center 
                                        justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="text-white text-5xl">{initiative.icon}</div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#4A3F35] mb-4">
                                        {initiative.title}
                                    </h3>
                                    
                                    {/* Conditional Content Based on Initiative Type */}
                                    {initiative.stats && (
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            {Object.entries(initiative.stats).map(([key, value], idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="text-center p-3 bg-[#8B7355]/5 rounded-lg"
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                >
                                                    <div className="text-2xl font-bold text-[#8B7355]">
                                                        {value}{key === 'percentage' ? '%' : ''}
                                                    </div>
                                                    <div className="text-sm text-[#4A3F35] capitalize">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}

                                    {initiative.programs && (
                                        <div className="space-y-4">
                                            {initiative.programs.map((program, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="bg-[#8B7355]/5 p-4 rounded-lg"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.2 }}
                                                >
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="font-semibold text-[#4A3F35]">
                                                            {program.name}
                                                        </span>
                                                        <span className="text-sm text-[#8B7355]">
                                                            {program.duration}
                                                        </span>
                                                    </div>
                                                    <div className="text-[#8B7355]">
                                                        {program.participants} participants
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}

                                    {initiative.features && (
                                        <ul className="space-y-2">
                                            {initiative.features.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="flex items-center gap-2 text-[#4A3F35]"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                >
                                                    <span className="h-2 w-2 bg-[#8B7355] rounded-full" />
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#F0EBE0] to-[#E8E3D9]">
            {/* Hero Banner */}
            <div className="relative h-[60vh] overflow-hidden">
                {/* ... Hero banner code similar to other pages ... */}
            </div>

            <div className="py-16">
                {/* Stats Section */}
                {/* ... Stats grid similar to other pages ... */}

                {/* Services Grid */}
                <div className="container mx-auto px-4 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/90 rounded-xl overflow-hidden shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="h-48 relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/50" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-white text-center p-4">
                                            <div className="text-4xl mb-2">{service.icon}</div>
                                            <h3 className="text-xl font-bold">{service.title}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-2">
                                        {service.items.map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                className="flex items-center gap-2 text-[#4A3F35]"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                            >
                                                <span className="h-2 w-2 bg-[#8B7355] rounded-full" />
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bonus Rates Section */}
                <div className="container mx-auto px-4 mb-16">
                    <motion.div
                        className="bg-white/90 rounded-xl p-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <h2 className="text-3xl font-bold text-[#4A3F35] mb-8 text-center">
                            FY 2015-16 Bonus Rates
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {bonusRates.map((rate, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-4 bg-[#8B7355]/10 rounded-lg"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="text-2xl font-bold text-[#8B7355] mb-2">
                                        {rate.rate}
                                    </div>
                                    <div className="text-[#4A3F35] font-medium mb-1">
                                        {rate.item}
                                    </div>
                                    <div className="text-sm text-[#8B7355]">
                                        {rate.unit}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Rural Development Section */}
                <RuralDevelopment />

                {/* Initiatives Grid */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {initiatives.map((initiative, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/90 rounded-xl overflow-hidden shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="h-48 relative">
                                    <img
                                        src={initiative.image}
                                        alt={initiative.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-white text-center p-4">
                                            <div className="text-4xl mb-2">{initiative.icon}</div>
                                            <h3 className="text-xl font-bold">{initiative.title}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-[#1B5E20] mb-4">{initiative.description}</p>
                                    {initiative.stats && (
                                        <div className="grid grid-cols-2 gap-4">
                                            {initiative.stats.map((stat, idx) => (
                                                <div key={idx} className="text-center">
                                                    <div className="text-2xl font-bold text-[#2E7D32]">
                                                        {stat.prefix}{stat.number}{stat.suffix}
                                                    </div>
                                                    <div className="text-sm text-[#1B5E20]">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {initiative.programs && (
                                        <div className="mt-4 space-y-2">
                                            {initiative.programs.map((program, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-[#1B5E20]">
                                                    <span className="text-xl">{program.icon}</span>
                                                    <span>{program.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    className="container mx-auto px-4 py-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <div className="bg-white/90 rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">Join Our Mission</h2>
                        <p className="text-[#1B5E20] mb-6">
                            Be part of our journey in transforming rural communities through education and development
                        </p>
                        <button className="bg-[#2E7D32] text-white px-8 py-3 rounded-full font-semibold 
                                       hover:bg-[#1B5E20] transition-colors duration-300">
                            Get Involved
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Values;