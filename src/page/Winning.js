import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FaTrophy, FaHandshake, FaUsers, FaSeedling, FaChartLine } from 'react-icons/fa';
import { BsFillShieldLockFill, BsLightbulb } from 'react-icons/bs';
import { GiReceiveMoney, GiTeamUpgrade } from 'react-icons/gi';
import { MdBusinessCenter, MdIntegrationInstructions } from 'react-icons/md';
import { HiLightBulb } from 'react-icons/hi';
import { RiTeamFill, RiHandHeartLine } from 'react-icons/ri';
import cardone from '../assets/winning/card1.jpg';
import cardtwo from '../assets/winning/card2.png';
import cardthree from '../assets/winning/card3.jpg';
import cardfour from '../assets/winning/card4.jpg';
import cardfive from '../assets/winning/card5.jpg';
import cardsix from '../assets/winning/card6.jpg';
import cardseven from '../assets/winning/card7.jpg';
import cardeight from '../assets/winning/card8.jpg';
import cardnine from '../assets/winning/card9.jpg';
import cardten from '../assets/winning/card10.jpg';
import cardeleven from '../assets/winning/card11.jpg';
import cardtwelve from '../assets/winning/card12.jpg';
import cardthirteen from '../assets/winning/card13.jpg';
import cardfourteen from '../assets/winning/card14.jpg';
import cardfifteen from '../assets/winning/card15.jpg';
import { Helmet } from 'react-helmet'

const Winning = () => {
    const formulas = [
        {
            title: "Independent Governance",
            description: "Free from external interference, ensuring unbiased decision-making.",
            icon: <BsFillShieldLockFill className="text-4xl" />,
            image: cardseven
        },
        {
            title: "Professional Leadership",
            description: "Managed with dedication, honesty, and professional expertise.",
            icon: <GiTeamUpgrade className="text-4xl" />,
            image: cardthree
        },
        {
            title: "Rigorous Financial Discipline",
            description: "Timely lending and efficient recovery mechanisms.",
            icon: <GiReceiveMoney className="text-4xl" />,
            image: cardfour
        },
        {
            title: "Affordable Access",
            description: "Provision of agricultural inputs at fair and competitive rates.",
            icon: <FaHandshake className="text-4xl" />,
            image: cardfive
        },
        {
            title: "Integrated Solutions",
            description: "Seamless linking of credit services with marketing support.",
            icon: <MdIntegrationInstructions className="text-4xl" />,
            image: cardeight
        },
        {
            title: "Knowledge Empowerment",
            description: "Consistent delivery of comprehensive agricultural practices.",
            icon: <BsLightbulb className="text-4xl" />,
            image: cardnine
        },
        {
            title: "Agri-Business Support",
            description: "Lending targeted towards entrepreneurial agricultural ventures.",
            icon: <MdBusinessCenter className="text-4xl" />,
            image: cardtwo
        },
        {
            title: "Seed Advancement",
            description: "Supply of high-quality, improved seed varieties.",
            icon: <FaSeedling className="text-4xl" />,
            image: cardsix
        },
        {
            title: "Welfare Focus",
            description: "Implementation of impactful welfare measures, including insurance services.",
            icon: <RiHandHeartLine className="text-4xl" />,
            image: cardone
        },
        {
            title: "Social Responsibility",
            description: "Active patronage to community-building and social activities.",
            icon: <FaUsers className="text-4xl" />,
            image: cardten
        },
        {
            title: "Member-Driven Growth",
            description: "Strong internal resources built through member share contributions and thrift deposits.",
            icon: <FaChartLine className="text-4xl" />,
            image: cardeleven
        },
        {
            title: "Marketing Expertise",
            description: "Exceptional marketing management ensuring optimal value realization.",
            icon: <HiLightBulb className="text-4xl" />,
            image: cardtwelve
        },
        {
            title: "Collective Trust",
            description: "Established goodwill and accountability within the member base.",
            icon: <FaHandshake className="text-4xl" />,
            image: cardthirteen
        },
        {
            title: "Ownership Culture",
            description: "Active participation of members, fostering a strong sense of ownership and collaboration.",
            icon: <RiTeamFill className="text-4xl" />,
            image: cardfourteen
        }
    ];

    // Split formulas into two parts
    const mainFormulas = formulas.slice(0, formulas.length - 5);
    const horizontalFormulas = formulas.slice(-5);

    const FloatingImage = ({ src, className }) => {
        const { scrollY } = useScroll();
        const y = useTransform(scrollY, [0, 1000], [0, 100]);

        return (
            <motion.img
                src={src}
                className={`absolute pointer-events-none opacity-20 ${className}`}
                style={{ y }}
                animate={{
                    rotate: [0, 10, -10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        );
    };

    // Add these new scroll control functions
    const [width, setWidth] = React.useState(0);
    const scrollRef = React.useRef();
    const x = useMotionValue(0);
    const springConfig = { damping: 15, mass: 0.27, stiffness: 55 };
    const spring = useSpring(x, springConfig);

    React.useEffect(() => {
        if (scrollRef.current) {
            setWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#F0EBE0] to-[#E8E3D9] relative overflow-hidden">
            <Helmet>
                <title>Our Winning Formula - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Discover the 14 key principles behind Mulkanoor's success - from independent governance and professional leadership to integrated solutions and community welfare initiatives."
                />
                <meta
                    name="keywords"
                    content="cooperative society principles, agricultural success, farmer empowerment, rural development, sustainable farming"
                />
            </Helmet>
            {/* Replace Decorative Elements with CSS patterns */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/20 to-transparent" />
                <div className="absolute inset-0 pattern-diagonal opacity-5" />
                <div className="absolute bottom-0 right-0 w-full h-64 pattern-dots opacity-5" />
            </div>

            {/* Hero Banner */}
            <div className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Our Winning Formula
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            The key principles that drive our success and empower our community
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Sections with Enhanced Styling */}
            <div className="container mx-auto px-4 py-16 relative">
                {/* Vertical scroll section */}
                <div className="space-y-32">
                    {mainFormulas.map((formula, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                                items-center gap-8 lg:gap-16 relative`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Enhanced Content Section */}
                            <div className="flex-1 space-y-4 relative">
                                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl -z-10" />
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-[#4A3F35]">
                                        {formula.icon}
                                        <h2 className="text-3xl font-bold">{formula.title}</h2>
                                    </div>
                                    <p className="text-lg text-[#8B7355] leading-relaxed mt-4">
                                        {formula.description}
                                    </p>
                                </div>
                            </div>

                            {/* Enhanced Image Section */}
                            <div className="flex-1">
                                <div className="relative rounded-2xl overflow-hidden group">
                                    <img
                                        src={formula.image}
                                        alt={formula.title}
                                        className="w-full aspect-[5/3]  transform transition-transform 
                                            duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 
                                        transition-colors duration-300" />
                                    {/* Decorative Corner Patterns */}
                                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/30" />
                                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/30" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Simple Card Grid Section - replacing horizontal scroll */}
                <div className="mt-32 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        {horizontalFormulas.map((formula, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 0.5, delay: index * 0.1 }
                                }}
                                whileHover={{ y: -10 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 space-y-4 h-full">
                                    <div className="flex items-center gap-4 text-[#4A3F35]">
                                        {formula.icon}
                                        <h2 className="text-xl font-bold">{formula.title}</h2>
                                    </div>
                                    <p className="text-[#8B7355] leading-relaxed">
                                        {formula.description}
                                    </p>
                                    <motion.div
                                        className="relative rounded-2xl overflow-hidden group mt-4"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img
                                            src={formula.image}
                                            alt={formula.title}
                                            className="w-full h-36 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 
                                            transition-colors duration-300" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Winning;