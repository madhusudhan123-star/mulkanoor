import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaGraduationCap, FaHandHoldingHeart, FaPiggyBank, FaHospital, FaLightbulb, FaHandHoldingWater, FaDog } from 'react-icons/fa';
import { GiHealthNormal, GiMedicalDrip } from 'react-icons/gi';
import { MdFamilyRestroom, MdOutlineWaterDrop, MdElectricalServices, MdHealthAndSafety } from 'react-icons/md';
import { RiMentalHealthLine } from 'react-icons/ri';
import { BiSolidDonateHeart } from 'react-icons/bi';
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
        <div className="min-h-screen bg-gradient-to-br mt-10 from-[#E8F5E9] via-[#C8E6C9] to-[#A5D6A7]">
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
                {/* Initiative Cards */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                                    src={images[Object.keys(images)[index % 5 + 1]]}
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
                                            className="flex items-start gap-3 text-[#1B5E20]"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <span className="h-2 w-2 bg-[#2E7D32] rounded-full mt-2 flex-shrink-0" />
                                            {detail}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div> */}

                {/* Detailed Sections */}
                <DetailSection 
                    title="Community Development" 
                    icon={<MdOutlineWaterDrop className="text-4xl" />}
                    image={images.water}
                    reverse={false}
                    content={
                        <>
                            <p>During times of continuous drought, the society took the initiative to provide drinking water to villages by digging bore wells, ensuring a reliable water source for the community in times of need.</p>
                            
                            <p>In the years following independence, the society played a crucial role in bringing electricity to villages and farms, lighting up rural communities and empowering farmers with better infrastructure for agriculture and daily life.</p>
                            
                            <p>The society took the initiative to counsel eligible couples on family planning at a time when awareness was low, helping them make informed decisions for a better future.</p>
                            
                            <p>The society collaborated with NGOs to ensure access to clean drinking water by installing RO plants in villages, improving the health and well-being of the community.</p>
                        </>
                    }
                />

                <DetailSection 
                    title="Member Welfare Scheme" 
                    icon={<BiSolidDonateHeart className="text-4xl" />}
                    image={images.community}
                    reverse={true}
                    content={
                        <>
                            <p>The society operates a Welfare Deposit Scheme for its members, with contributions ranging from ₹2,000 to ₹4,000, depending on the extent of cultivable land owned.</p>
                            
                            <p>In the unfortunate event of a member's passing, the society provides financial support to the bereaved family by paying 12.5 times the deposited amount.</p>
                            
                            <p>Since 1996, the cooperative has disbursed ₹265.78 lakhs to support 1,827 deceased members' families, demonstrating its commitment to the welfare of its members and their families during difficult times.</p>
                        </>
                    }
                />

                <DetailSection 
                    title="Education Support" 
                    icon={<FaGraduationCap className="text-4xl" />}
                    image={images.education}
                    reverse={false}
                    content={
                        <>
                            <p>The society has supported education by providing scholarships to meritorious students in 7th and 10th grade, benefiting 260 children with a total expenditure of ₹2.90 lakhs from 1996 to 2010.</p>
                            
                            <p>Additionally, under the Janasree Bheema Yojana scheme of Life Insurance Corporation (LIC), scholarships have been granted to members' children studying in intermediate, covering up to two children per member.</p>
                            
                            <p>From 2005 to 2016, the society has spent ₹94.14 lakhs to support 8,422 students.</p>
                            
                            <p>Furthermore, for higher education, the society provides ₹11,000 for students admitted to professional medical courses and ₹8,500 for those pursuing engineering, agriculture, veterinary, and pharmacy courses.</p>
                        </>
                    }
                />

                <DetailSection 
                    title="Health Camps for Members" 
                    icon={<MdHealthAndSafety className="text-4xl" />}
                    image={images.health}
                    reverse={true}
                    content={
                        <>
                            <p>The cooperative, in collaboration with Sharat Laser Eye Hospital (SLEH), Hanamkonda, regularly conducts eye camps for its members. Through these camps, many members receive essential eye care, and those in need of cataract surgery are recommended for operations. So far, 1,117 members and their spouses have undergone cataract surgery free of cost, with the cooperative covering 60% (Rs. 60.31 lakhs) of the total Rs. 100.53 lakh expenditure, while the hospital bore the remaining 40% (Rs. 40.22 lakhs).</p>
                            
                            <p>To further support eye care, the cooperative, in association with SLEH, established a Vision Center at the Mulkanoor Society shopping complex in 2014. Over 5,000 patients have visited the center, which provides affordable consultations for a nominal fee of Rs. 30.</p>
                            
                            <p>In 2015, the cooperative, with the support of Dr. Suresh Chikatla, DNB Specialist and a member's son, organized a free spinal cord and knee joint pain camp. Around 424 members attended the camp, receiving expert checkups, medical advice, and prescriptions for their conditions.</p>
                            
                            <p>Additionally, the cooperative regularly conducts physiotherapy and yoga camps for its members and staff, promoting overall well-being and a healthier lifestyle.</p>
                        </>
                    }
                />

                <DetailSection 
                    title="Animal Health Camps" 
                    icon={<FaDog className="text-4xl" />}
                    image={images.animal}
                    reverse={false}
                    content={
                        <>
                            <p>The society organizes Animal Health Camps in collaboration with the Animal Husbandry Department to provide essential veterinary care, vaccinations, and treatment for livestock, ensuring better health and productivity for farmers' animals.</p>
                            
                            <p>These camps help farmers maintain the health of their livestock, which is crucial for their livelihoods and the overall agricultural productivity of the community.</p>
                            
                            <p>Through regular health checkups, preventive care, and treatment services, the society helps farmers reduce livestock mortality and increase productivity, contributing to the economic well-being of the farming community.</p>
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default Welfare;