import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaGraduationCap, FaHandHoldingHeart, FaPiggyBank, FaHospital, FaLightbulb, FaHandHoldingWater, FaDog, FaShieldAlt } from 'react-icons/fa';
import { GiHealthNormal, GiMedicalDrip, GiReceiveMoney } from 'react-icons/gi';
import { MdFamilyRestroom, MdOutlineWaterDrop, MdElectricalServices, MdHealthAndSafety } from 'react-icons/md';
import { RiMentalHealthLine } from 'react-icons/ri';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { BsBank2 } from 'react-icons/bs';
import CountUp from 'react-countup';
import banner from '../../assets/welfare/banner.jpg';
import card1 from '../../assets/welfare/card1.jpg';
import card2 from '../../assets/welfare/card2.jpg';
import card3 from '../../assets/welfare/card3.jpg';
import card4 from '../../assets/welfare/card4.jpg';
import card5 from '../../assets/welfare/card5.jpg';
import { Helmet } from 'react-helmet'


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
        banner: banner,
        health: card1,
        education: card2,
        community: card3,
        water: card4,
        animal: card5
    };

    const initiatives = [
        {
            title: "Community Development",
            description: "Infrastructure and welfare improvements for villages",
            stats: { amount: 265.78, beneficiaries: 1827, years: "Since 1996" },
            icon: <FaLightbulb />,
            details: [
                "Village electrification post-independence for farms and communities",
                "Bore well digging during continuous droughts for reliable water",
                "RO plants installation with NGOs for clean drinking water",
                "Family planning counseling for eligible couples"
            ]
        },
        {
            title: "Member Welfare Scheme",
            description: "Financial support during critical times",
            stats: { amount: 265.78, beneficiaries: 1827, years: "Since 1996" },
            icon: <FaHandHoldingHeart />,
            details: [
                "Welfare Deposit Scheme with ₹2,000-4,000 contributions",
                "12.5x payout to families upon member's death",
                "₹265.78 lakhs disbursed to 1,827 families since 1996",
                "Comprehensive financial security system for members"
            ]
        },
        {
            title: "Education Support",
            description: "Comprehensive scholarship programs",
            stats: { amount: 94.14, beneficiaries: 8422, type: "Students" },
            icon: <FaGraduationCap />,
            details: [
                "Scholarships for 7th and 10th grade students (₹2.90 lakhs)",
                "Janasree Bheema Yojana scheme for intermediate students",
                "₹11,000 for medical students and ₹8,500 for other professional courses",
                "₹94.14 lakhs spent supporting 8,422 students (2005-2016)"
            ]
        },
        {
            title: "Healthcare Initiatives",
            description: "Medical camps and healthcare support",
            stats: { operations: 1117, patients: 5000, centers: 1 },
            icon: <FaHeartbeat />,
            details: [
                "Free cataract surgeries through Sharat Laser Eye Hospital",
                "Vision Center establishment at society shopping complex (2014)",
                "Spinal cord and knee joint pain camps with specialist support",
                "Regular physiotherapy and yoga sessions for members and staff"
            ]
        },
        {
            title: "Animal Health Camps",
            description: "Veterinary care for livestock",
            stats: { camps: 25, animals: 3000, partners: 1 },
            icon: <FaDog />,
            details: [
                "Collaboration with Animal Husbandry Department",
                "Essential veterinary care and vaccinations",
                "Treatment for various livestock conditions",
                "Improved animal health and productivity for farmers"
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

    const DetailSection = ({ title, icon, content, image, reverse }) => (
        <motion.div 
            className="mb-16 bg-white/80 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="md:w-1/3 h-64 md:h-auto relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:hidden" />
                </div>
                <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl text-[#2E7D32]">{icon}</span>
                        <h2 className="text-3xl cursor-default font-bold text-[#1B5E20]">{title}</h2>
                    </div>
                    <div className="prose cursor-default prose-lg text-[#333]">
                        {content}
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br mt-20 from-[#E8F5E9] via-[#C8E6C9] to-[#A5D6A7]">
            <Helmet>
                <title>Community Welfare Initiatives - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Comprehensive welfare programs including healthcare, education support, and community development. Supporting 8,422+ students, providing ₹265.78 lakhs in member welfare, and conducting 1,117+ free eye surgeries."
                />
                <meta
                    name="keywords"
                    content="community welfare, healthcare camps, education scholarships, member welfare scheme, animal health camps, rural development"
                />
                <meta 
                    property="og:title" 
                    content="Community Welfare Initiatives - Mulkanoor Cooperative Society" 
                />
                <meta 
                    property="og:description" 
                    content="Building stronger communities through healthcare, education, and welfare support. Empowering rural development with comprehensive community care programs." 
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NGO",
                        "name": "Mulkanoor Community Welfare Programs",
                        "description": "Comprehensive community welfare initiatives for rural development",
                        "provider": {
                            "@type": "Organization",
                            "name": "Mulkanoor Cooperative Society"
                        },
                        "areaServed": "Telangana",
                        "program": [
                            {
                                "@type": "Service",
                                "name": "Member Welfare Scheme",
                                "description": "Financial support for members' families with ₹265.78 lakhs disbursed"
                            },
                            {
                                "@type": "Service",
                                "name": "Education Support",
                                "description": "Scholarships and financial aid for 8,422 students"
                            },
                            {
                                "@type": "Service",
                                "name": "Healthcare Initiatives",
                                "description": "Free eye surgeries and health camps for community members"
                            },
                            {
                                "@type": "Service",
                                "name": "Community Development",
                                "description": "Infrastructure development including water and electricity"
                            },
                            {
                                "@type": "Service",
                                "name": "Animal Health Camps",
                                "description": "Veterinary services for livestock health and productivity"
                            }
                        ],
                        "foundingDate": "1956",
                        "award": [
                            {
                                "@type": "Award",
                                "name": "Community Service Excellence",
                                "description": "Recognition for comprehensive welfare programs"
                            }
                        ]
                    })}
                </script>
            </Helmet>
            {/* Hero Section */}
            <div className="relative h-[300px] overflow-hidden">
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
                                className="text-4xl cursor-default md:text-6xl font-bold text-white mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Community Welfare Activities
                            </motion.h1>
                            <motion.p
                                className="text-xl cursor-default text-white/90"
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
                {/* Community Development Section */}
                <DetailSection 
                    title="Community Development Initiatives" 
                    icon={<MdFamilyRestroom className="text-4xl" />}
                    image={images.community}
                    reverse={false}
                    content={
                        <ul className="list-[circle] pl-5">
                            <li className='pl-5'><strong className='font-bold text-xl'>Village electrification:</strong> In the years following independence, the society played a crucial role in bringing electricity to society villages and farms, empowering farmers with better infrastructure for agriculture and daily life.</li>
                            
                            <li className='pl-5'><strong className='font-bold text-xl'>Drinking water:</strong> The society collaborated with NGOs to ensure access to clean drinking water by installing RO plants in villages, improving the health and well-being of the community.</li>
                            
                            <li className='pl-5'><strong className='font-bold text-xl'>Health camps:</strong> The cooperative, in partnership with hospitals, provides free cataract surgeries, affordable eye care, and specialized health camps. It also promotes well-being through physiotherapy and yoga camps, ensuring better healthcare for members.</li>
                            
                            <li className='pl-5'><strong className='font-bold text-xl'>Education:</strong> Also society established junior and degree colleges to promote higher education in the area.</li>
                            
                            <li className='pl-5'><strong className='font-bold text-xl'>Watershed activities:</strong> The society has implemented three watershed programs with financial assistance from the National Bank for Agricultural and Rural Development (NABARD), covering an area of 283.70 hectares.</li>
                        </ul>
                    }
                />

                <DetailSection 
                    title="Financial Benefits" 
                    icon={<GiReceiveMoney className="text-4xl" />}
                    image={images.health}
                    reverse={true}
                    content={
                        <>
                            <ul className="list-[circle] pl-5">
                                <li className='pl-5'><strong className='font-bold text-xl'>Funeral expenses:</strong> Rs.10,000/- and 100 kg. Fine rice is given to the deceased family on the demise of the Member / Member Spouse.</li>
                                
                                <li className='pl-5'><strong className='font-bold text-xl'>Member welfare:</strong> When a member has passed away a financial assistance of 12.5 times the deposited amount (min 2500/-, max 50000/-) is paid to the bereaved family from the member welfare deposit scheme.</li>
                                
                                <li className='pl-5'><strong className='font-bold text-xl'>Crop loan waiver:</strong> Deceased Members Crop Loan amount up to Rs. 1,50,000/- is waived from society funds.</li>
                                
                                <li className='pl-5'><strong className='font-bold text-xl'>Old age pension:</strong> For the financial and moral support to elderly people the society initiated an old age pension Rs 1000/-  to members who are 65 years of age and completed 35 years as a member of the society.</li>
                            </ul>
                            <div className="mt-6 flex justify-center">
                                <a 
                                    href="https://drive.google.com/file/d/1gN_jDiJ0qB2gUGmWKYC8XBup-pF2hl20/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-[#2E7D32] text-white font-medium text-lg rounded-md hover:bg-[#1B5E20] transition-colors duration-300 shadow-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Financial Benefits Document
                                </a>
                            </div>
                        </>
                    }
                />

                <DetailSection 
                    title="Insurance" 
                    icon={<FaShieldAlt className="text-4xl" />}
                    image={images.animal}
                    reverse={false}
                    content={
                        <ul className="list-[circle] pl-5">
                            <li className='pl-5'><strong className='font-bold text-xl'>Member:</strong> The members are covered under various insurance policies for life and accidental coverage.</li>
                            
                            <li className='pl-5'><strong className='font-bold text-xl'>Animal:</strong> Animal insurance is assisted for the dairy and other livestock loans provided.</li>
                            
                            <li className='pl-5'><strong className='font-bold text-xl'>Vehicle:</strong> Vehicles provided by the financial assistance of society are insured through society.</li>
                            
                            <li className='pl-5'><strong className='font-bold text-xl'>Stocks:</strong> Total society stocks, infrastructure and cash are insured as a safety net.</li>
                            
                            <li className='pl-5'>All the activities related to insurance from premiums, renewals and claims are managed by the society employees.</li>
                        </ul>
                    }
                />
            </div>
        </div>
    );
};

export default Welfare;