import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaSun, FaGraduationCap, FaHandHoldingHeart, FaTable } from 'react-icons/fa';
import { GiReceiveMoney, GiHealthNormal } from 'react-icons/gi';
import { BiSolidBank } from 'react-icons/bi';
import { MdElderlyWoman } from 'react-icons/md';
import headbanner from '../../assets/insurance/headbanner.jpg';
import bottombanner from '../../assets/insurance/bottombanner.jpg';
import card1 from '../../assets/insurance/card1.jpg';
import card2 from '../../assets/insurance/card2.jpg';
import card3 from '../../assets/insurance/card3.jpg';
import card4 from '../../assets/insurance/card4.jpg';
import card5 from '../../assets/insurance/card5.jpg';
import card6 from '../../assets/insurance/card6.jpg';
import card7 from '../../assets/insurance/card7.jpg';
import card8 from '../../assets/insurance/card8.jpg';

const imageSpecs = {
    banner: {
        width: 1920,
        height: 1080,
        aspectRatio: "16:9",
        description: "Main hero banner - Financial security image"
    },
    protection: {
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        description: "Insurance protection background"
    },
    health: {
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        description: "Health insurance background"
    },
    solar: {
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        description: "Solar plant background"
    },
    pension: {
        width: 800,
        height: 600,
        aspectRatio: "4:3",
        description: "Pension services background"
    },
    gallery: {
        width: 600,
        height: 450,
        aspectRatio: "4:3",
        description: "Gallery images (4 images needed)",
        items: [
            "Finance related image",
            "Insurance documentation image",
            "Solar installation image",
            "Welfare activities image"
        ]
    }
};

// Key optimization notes:
// - All images should be under 200KB
// - Use WebP format with JPEG fallback
// - Maintain consistent aspect ratios
// - Center-focus compositions for flexible cropping
// - Ensure good contrast for text overlay visibility

const Insurance = () => {
    const services = [
        {
            title: "Group Insurance",
            stats: {
                premium: "32,69,581",
                claimed: "272.30 Lakhs",
                beneficiaries: 1541,
                year: "1996-2016"
            },
            icon: <FaShieldAlt className="text-5xl" />,
            description: "Coverage linked to crop loans up to ₹1,00,000 with death benefit settlement"
        },
        {
            title: "Accident Coverage",
            stats: {
                coverage: "1,00,000",
                claimed: "30.00 Lakhs",
                beneficiaries: 59,
                year: "Since 1995"
            },
            icon: <GiHealthNormal className="text-5xl" />,
            description: "Janatha Group Accident Insurance with IFFCO fertilizer bonus coverage"
        },
        {
            title: "Solar Initiative",
            stats: {
                capacity: "500 KWp",
                facilities: 2,
                partner: "NCDC",
                type: "Renewable"
            },
            icon: <FaSun className="text-5xl" />,
            description: "Powering cotton ginning, pressing unit and parboiled rice mill"
        },
        {
            title: "Senior Pension",
            stats: {
                eligibility: "65+",
                benefits: 2,
                frequency: "Monthly",
                type: "Dividend + Interest"
            },
            icon: <MdElderlyWoman className="text-5xl" />,
            description: "Financial security through dividend and interest earnings"
        }
    ];

    const claimData = [
        {
            type: "Electric Motors",
            amount: 21.01,
            cases: 1639,
            period: "1996-2012"
        },
        {
            type: "Milch Animals",
            amount: 196.61,
            cases: 4149,
            period: "2012-2015"
        },
        {
            type: "IFFCO Coverage",
            amount: 10.60,
            cases: 36,
            period: "Ongoing"
        }
    ];

    const partners = [
        { name: "LIC", type: "Life Insurance" },
        { name: "National Insurance", type: "General Insurance" },
        { name: "Bajaj Allianz", type: "Multiple Coverage" },
        { name: "IFFCO-Tokio", type: "Agricultural Insurance" }
    ];

    const educationalPartners = [
        "Cooperative College of Canada",
        "Carmel University College, USA",
        "MANAGE",
        "IRMA",
        "DMI"
    ];

    const images = {
        banner: headbanner, // Financial security
        protection: card1, // Protection
        health: card2, // Health insurance
        solar: card3, // Solar plant
        pension: card4, // Pension
        gallery: [
            card5, // Finance
            card6, // Insurance
            card7, // Solar
            card8  // Welfare
        ]
    };

    const policyData = [
        {
            sno: "1.",
            particulars: "New Individual personal LIC Policies",
            members: "93",
            premiumPaid: "5,49,510.00",
            claims: "-"
        },
        {
            sno: "2.",
            particulars: "Personal LIC policy claims of expired members – payment to legal heirs",
            members: "37",
            premiumPaid: "",
            claims: "27,06,750.00"
        },
        {
            sno: "3.",
            particulars: "LIC Policy claims on maturity",
            members: "42",
            premiumPaid: "",
            claims: "23,55,400.00"
        },
        {
            sno: "4.",
            particulars: "Micro Insurance (Jeevan Mathur) Policy Claims of expired members",
            members: "10",
            premiumPaid: "",
            claims: "3,00,000.00"
        },
        {
            sno: "5.",
            particulars: "Micro Insurance (Jeevan Mathur) Policy Claims on maturity – payment to legal heirs.",
            members: "153",
            premiumPaid: "",
            claims: "28,00,000.00"
        }
    ];

    const PolicyTable = () => (
        <motion.div 
            className="container mx-auto px-4 py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 overflow-hidden">
                <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                    <FaTable className="text-2xl text-blue-300" />
                    Insurance Policy Data
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-800/40 text-left">
                                <th className="p-4 rounded-tl-lg">S.No.</th>
                                <th className="p-4">Particulars</th>
                                <th className="p-4 text-center">No of Members</th>
                                <th className="p-4 text-center">Premium Paid (Rs)</th>
                                <th className="p-4 text-center rounded-tr-lg">Claims (Rs)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {policyData.map((row, index) => (
                                <motion.tr 
                                    key={index}
                                    className={index % 2 === 0 ? "bg-white/5" : "bg-white/10"}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <td className="p-4 border-t border-blue-900/30">{row.sno}</td>
                                    <td className="p-4 border-t border-blue-900/30">{row.particulars}</td>
                                    <td className="p-4 border-t border-blue-900/30 text-center">{row.members}</td>
                                    <td className="p-4 border-t border-blue-900/30 text-center">{row.premiumPaid}</td>
                                    <td className="p-4 border-t border-blue-900/30 text-center">{row.claims}</td>
                                </motion.tr>
                            ))}
                            <tr className="bg-blue-700/30 font-bold">
                                <td colSpan={2} className="p-4 text-right rounded-bl-lg">Total</td>
                                <td className="p-4"></td>
                                <td className="p-4 text-center">5,49,510.00</td>
                                <td className="p-4 text-center rounded-br-lg">81,62,150.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );

    const ImageGallery = () => (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Insurance Coverage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {images.gallery.map((image, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-xl overflow-hidden aspect-[4/3]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={image}
                            alt={`Insurance Service ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                ))}
            </div>
        </div>
    );

    const Banner = () => (
        <div className="relative h-[60vh] overflow-hidden">
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
            >
                <img
                    src={images.banner}
                    alt="Insurance Services"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Insurance & Protection
                        </motion.h1>
                        <motion.p
                            className="text-xl text-white/90 max-w-3xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Comprehensive coverage for our members and their families
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#3949ab] text-white">
            <Banner />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10">
                                    <img
                                        src={
                                            index === 0 ? images.protection :
                                                index === 1 ? images.health :
                                                    index === 2 ? images.solar : images.pension
                                        }
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="text-blue-300">{service.icon}</div>
                                    <h3 className="text-2xl font-bold">{service.title}</h3>
                                </div>
                                <p className="text-blue-200 mb-6">{service.description}</p>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(service.stats).map(([key, value], idx) => (
                                        <div key={idx} className="bg-white/5 rounded-lg p-4">
                                            <div className="text-xl font-bold text-blue-300">
                                                {value}
                                            </div>
                                            <div className="text-sm text-blue-200 capitalize">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* New Policy Table Section */}
                <PolicyTable />

                <ImageGallery />

                <div className="bg-white/5 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Insurance Claims</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {claimData.map((claim, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/10 rounded-xl p-6 text-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="text-3xl font-bold text-blue-300 mb-2">
                                        ₹{claim.amount} Lakhs
                                    </div>
                                    <div className="text-xl mb-2">{claim.type}</div>
                                    <div className="text-blue-200">{claim.cases} Cases</div>
                                    <div className="text-sm text-blue-300">{claim.period}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div
                            className="bg-white/10 rounded-2xl p-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <BiSolidBank className="text-3xl" />
                                Insurance Partners
                            </h3>
                            <div className="space-y-4">
                                {partners.map((partner, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="font-bold">{partner.name}</span>
                                        <span className="text-blue-200">{partner.type}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white/10 rounded-2xl p-8"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <FaGraduationCap className="text-3xl" />
                                Academic Partners
                            </h3>
                            <div className="space-y-4">
                                {educationalPartners.map((partner, index) => (
                                    <motion.div
                                        key={index}
                                        className="p-4 bg-white/5 rounded-lg"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {partner}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="relative mt-16 rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <div className="absolute inset-0">
                        <img
                            src={bottombanner}
                            alt="Insurance Protection"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
                    </div>
                    <div className="relative z-10 p-8 md:p-16 text-center">
                        <h2 className="text-3xl font-bold mb-4">Secure Your Future</h2>
                        <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                            Join our comprehensive insurance and pension programs for complete peace of mind
                        </p>
                        <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold 
                                       hover:bg-blue-600 transition-colors duration-300">
                            <a href='/contact'>
                                Contact Us
                            </a>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Insurance;