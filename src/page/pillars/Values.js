import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaIndustry, FaSeedling, FaStore, FaGraduationCap, FaTractor, FaWater, FaFemale, FaSchool, FaUserGraduate, FaHandHoldingWater } from 'react-icons/fa';
import { GiFactory, GiWheat, GiCottonFlower, GiTeacher } from 'react-icons/gi';
import { MdBusinessCenter, MdOutlineWaterDrop, MdComputer } from 'react-icons/md';
import { BiStore } from 'react-icons/bi';
import { IoMdWater } from 'react-icons/io';
import { BiBuildingHouse, BiBookReader } from 'react-icons/bi';
import { RiWomenLine, RiGovernmentLine } from 'react-icons/ri';
import banner from '../../assets/values/banner.jpg';
import card1 from '../../assets/values/card1.JPG';
import card2 from '../../assets/values/card2.jpg';
import card3 from '../../assets/values/card3.jpg';
// import card4 from '../../assets/values/card4.png';
import card5 from '../../assets/values/card5.jpg';
import card6 from '../../assets/values/card6.jpg';
import { Helmet } from 'react-helmet'


const Values = () => {
    const images = {
        banner: banner,
        processing: card6,
        seeds: card2,
        storage: card3,
        education: card3,
        watershed: card5,
        women: card1,
    };

    const imageSpecs = {
        banner: {
            width: 1920,
            height: 1080,
            aspectRatio: "16:9",
            description: "Hero banner image - full width landscape"
        },
        processing: {
            width: 800,
            height: 600,
            aspectRatio: "4:3",
            description: "Processing infrastructure card image"
        },
        seeds: {
            width: 800,
            height: 600,
            aspectRatio: "4:3",
            description: "Seed production card image"
        },
        storage: {
            width: 800,
            height: 600,
            aspectRatio: "4:3",
            description: "Storage facility card image"
        },
        education: {
            width: 800,
            height: 600,
            aspectRatio: "4:3",
            description: "Educational institutions card image"
        },
        watershed: {
            width: 800,
            height: 600,
            aspectRatio: "4:3",
            description: "Watershed development card image"
        },
        women: {
            width: 800,
            height: 600,
            aspectRatio: "4:3",
            description: "Women empowerment card image"
        }
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



    const ProcessingInfrastructure = () => {
        const facilities = [
            {
                title: "Paraboiled Rice Mill",
                subtitle: "4 Tons/Hr Capacity",
                description: "At Mulkanoor's Parboiled Rice Mill, the journey of paddy seed to polished paraboiled rice follows a meticulous process. First, the paddy is thoroughly cleaned to remove dust and impurities. It is then steamed and dried, giving the grains a brownish hue. Next, the dried paddy enters the polishing stage, where the outer layers are carefully removed to enhance its texture and appearance. The polished rice is then sorted into separate chambers based on quality and size. Finally, the perfectly processed parboiled rice flows through pipes, ready for packaging and distribution.",
                icon: <GiFactory className="text-4xl" />,
                image: images.processing,
                steps: [
                    "Cleaning to remove dust and impurities",
                    "Steaming and drying process",
                    "Polishing to remove outer layers",
                    "Sorting based on quality and size",
                    "Packaging and distribution"
                ]
            },
            {
                title: "Modern Raw Rice Mill",
                subtitle: "4 Tons/Hr Capacity",
                description: "In Mulkanoor's Modern Raw Rice Mill, paddy undergoes a thorough cleaning to remove dust and impurities. It is then de-husked to separate the outer husk, revealing the raw rice. The rice is polished to enhance its texture and appearance before being sorted into different grades. Finally, the processed raw rice flows through pipes, ready for packaging and distribution.",
                icon: <FaIndustry className="text-4xl" />,
                image: images.seeds,
                steps: [
                    "Thorough cleaning process",
                    "De-husking to separate outer husk",
                    "Polishing to enhance texture",
                    "Sorting into different grades",
                    "Packaging and distribution"
                ]
            },
            {
                title: "Seed Processing Units",
                subtitle: "18 Tons/Hr with 7 Units",
                description: "In Mulkanoor's seed production process, once seeds are procured, they undergo rigorous lab testing to ensure quality. Once approved, they are processed, packed, and distributed to various states. Each processing unit has a capacity of 4 tons per hour, ensuring efficient large-scale production",
                icon: <FaSeedling className="text-4xl" />,
                image: images.storage,
                steps: [
                    "Procuring seeds from farmers",
                    "Rigorous lab testing for quality",
                    "Processing approved seeds",
                    "Packaging in appropriate containers",
                    "Distribution to various states"
                ]
            },
            {
                title: "Cotton Ginning Machines",
                subtitle: "35 Machines with Bales Pressing Unit",
                description: "In Mulkanoor's Cotton Ginning Units, raw cotton arrives in large trucks and is fed into machines for initial processing. The cotton moves through conveyor belts to 32 specialized units where the seeds are carefully separated. These cotton seeds are then stored separately and exported for cotton seed oil production. The cleaned cotton fibers proceed to ginning machines, where they are processed into bales. These bales are categorized based on quality—premium and medium—before being stored in large quantities, ready for further use or export.",
                icon: <GiCottonFlower className="text-4xl" />,
                image: images.women,
                steps: [
                    "Initial processing of raw cotton",
                    "Seed separation via specialized units",
                    "Storage of cotton seeds for oil production",
                    "Ginning and bale processing",
                    "Quality categorization and storage"
                ]
            }
        ];

        return (
            <div className="container mx-auto px-4 py-16">
                <Helmet>
                <title>Our Core Values - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Discover our commitment to rural development through state-of-the-art processing facilities, educational initiatives, and women empowerment programs. Supporting over 489 students with 56% female enrollment."
                />
                <meta
                    name="keywords"
                    content="rural development, processing infrastructure, agricultural education, women empowerment, sustainable farming, cooperative values"
                />
                <meta 
                    property="og:title" 
                    content="Our Core Values - Mulkanoor Cooperative Society" 
                />
                <meta 
                    property="og:description" 
                    content="Empowering rural communities through modern infrastructure, education, and sustainable development initiatives." 
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Mulkanoor Cooperative Society",
                        "description": "Rural development and agricultural cooperative society",
                        "foundingDate": "1956",
                        "location": {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Mulkanoor",
                                "addressRegion": "Telangana",
                                "addressCountry": "IN"
                            }
                        },
                        "knowsAbout": [
                            {
                                "@type": "Thing",
                                "name": "Processing Infrastructure",
                                "description": "Modern rice mills, cotton ginning, and seed processing units"
                            },
                            {
                                "@type": "Thing",
                                "name": "Educational Initiatives",
                                "description": "Junior and Degree colleges with focus on rural education"
                            },
                            {
                                "@type": "Thing",
                                "name": "Women Empowerment",
                                "description": "Training programs in tailoring and computer applications"
                            }
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Infrastructure Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "name": "Paraboiled Rice Mill",
                                    "description": "4 Tons/Hr capacity modern rice processing"
                                },
                                {
                                    "@type": "Offer",
                                    "name": "Cotton Ginning",
                                    "description": "35 machines with bales pressing unit"
                                },
                                {
                                    "@type": "Offer",
                                    "name": "Seed Processing",
                                    "description": "18 Tons/Hr with 7 processing units"
                                }
                            ]
                        }
                    })}
                </script>
            </Helmet>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-4xl cursor-default font-bold bg-gradient-to-r from-[#4A3F35] to-[#8B7355] 
                        bg-clip-text text-transparent mb-4">
                        Processing Infrastructure
                    </h2>
                    <p className="text-[#8B7355] cursor-default max-w-2xl mx-auto">
                        State-of-the-art processing facilities ensuring quality production and optimal resource utilization
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/90 rounded-xl overflow-hidden shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className={`grid grid-cols-1 md:grid-cols-2 ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                                <div className={`p-8 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 rounded-full bg-[#8B7355]/10 text-[#8B7355]">
                                            {facility.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl cursor-default font-bold text-[#4A3F35]">{facility.title}</h3>
                                            <p className="text-[#8B7355] cursor-default font-medium">{facility.subtitle}</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-[#4A3F35] cursor-default mb-6 leading-relaxed">
                                        {facility.description}
                                    </p>
                                    
                                    <div className="space-y-3 mt-8">
                                        <h4 className="font-semibold cursor-default text-[#4A3F35]">Process Steps:</h4>
                                        {facility.steps.map((step, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="flex items-center gap-3"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                            >
                                                <div className="h-6 w-6 cursor-default rounded-full bg-[#8B7355]/10 text-[#8B7355] flex items-center justify-center text-sm font-bold">
                                                    {idx + 1}
                                                </div>
                                                <p className="text-[#4A3F35] cursor-default">{step}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className={`h-full min-h-[300px] relative ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                                    <img 
                                        src={facility.image} 
                                        alt={facility.title}
                                        className="w-full h-full" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                        <div className="text-white">
                                            <h3 className="text-xl cursor-default font-bold">{facility.title}</h3>
                                            <p className="text-white/80 cursor-default">{facility.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br mt-10 from-[#F5F5DC] via-[#F0EBE0] to-[#E8E3D9]">
            {/* Hero Banner */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src={images.banner}
                    alt="Rural Development"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <motion.h1
                        className="text-4xl md:text-6xl cursor-default font-bold text-center mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Value-Added Services
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl cursor-default text-center max-w-2xl px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Driving rural development through sustainable practices and community empowerment
                    </motion.p>
                </div>
            </div>

            <div className="py-16">
                {/* Processing Infrastructure Section - NEW */}
                <ProcessingInfrastructure />
            </div>
        </div>
    );
};

export default Values;
                // {/* Stats Section */}
                // <div className="container mx-auto px-4 mb-16">
                //     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                //         {stats.map((stat, index) => (
                //             <motion.div
                //                 key={index}
                //                 className="bg-white/90 rounded-xl p-6 text-center shadow-lg"
                //                 initial={{ opacity: 0, scale: 0.9 }}
                //                 whileInView={{ opacity: 1, scale: 1 }}
                //                 transition={{ delay: index * 0.1 }}
                //             >
                //                 <div className="text-2xl md:text-3xl font-bold text-[#8B7355] mb-2">
                //                     {stat.prefix}{stat.value}{stat.suffix}
                //                 </div>
                //                 <div className="text-sm text-[#4A3F35]">{stat.label}</div>
                //             </motion.div>
                //         ))}
                //     </div>
                // </div>

                // {/* Services Grid */}
                // <div className="container mx-auto px-4 mb-16">
                //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                //         {services.map((service, index) => (
                //             <motion.div
                //                 key={index}
                //                 className="bg-white/90 rounded-xl overflow-hidden shadow-lg"
                //                 initial={{ opacity: 0, y: 20 }}
                //                 whileInView={{ opacity: 1, y: 0 }}
                //                 transition={{ delay: index * 0.2 }}
                //             >
                //                 <div className="h-48 relative">
                //                     <img
                //                         src={service.image}
                //                         alt={service.title}
                //                         className="w-full h-full object-cover"
                //                     />
                //                     <div className="absolute inset-0 bg-black/50" />
                //                     <div className="absolute inset-0 flex items-center justify-center">
                //                         <div className="text-white text-center p-4">
                //                             <div className="text-4xl mb-2">{service.icon}</div>
                //                             <h3 className="text-xl font-bold">{service.title}</h3>
                //                         </div>
                //                     </div>
                //                 </div>
                //                 <div className="p-6">
                //                     <ul className="space-y-2">
                //                         {service.items.map((item, idx) => (
                //                             <motion.li
                //                                 key={idx}
                //                                 className="flex items-center gap-2 text-[#4A3F35]"
                //                                 initial={{ opacity: 0, x: -20 }}
                //                                 whileInView={{ opacity: 1, x: 0 }}
                //                                 transition={{ delay: idx * 0.1 }}
                //                             >
                //                                 <span className="h-2 w-2 bg-[#8B7355] rounded-full" />
                //                                 {item}
                //                             </motion.li>
                //                         ))}
                //                     </ul>
                //                 </div>
                //             </motion.div>
                //         ))}
                //     </div>
                // </div>
                