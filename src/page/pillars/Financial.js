import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaChartLine, FaMoneyBillWave, FaClock, FaPiggyBank, FaHandHoldingUsd } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { IoIosArrowDown } from 'react-icons/io';

const Financial = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -50]);
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    const loanData = [
        { name: 'Kharif SAO', amount: 39.44 },
        { name: 'Rabi SAO', amount: 36.62 },
        { name: 'Normal Loans', amount: 48.06 },
        { name: 'Medium-Term', amount: 7.95 },
        { name: 'Long-Term', amount: 1.27 }
    ];

    const images = {
        banner: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85", // Financial banner
        loan: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c", // Loan services
        farming: "https://images.unsplash.com/photo-1622030411594-c282a63aa1b0", // Agricultural loan
        recovery: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc", // Financial growth
        // Add new images
        gallery: [
            "https://images.unsplash.com/photo-1601597111158-2fceff292cdc", // Farmers meeting
            "https://images.unsplash.com/photo-1589923188651-268a9765e432", // Loan disbursement
            "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8", // Agricultural finance
            "https://images.unsplash.com/photo-1632991506831-e39e690fee37", // Rural banking
        ]
    };

    // Add new Image Gallery component
    const ImageGallery = () => (
        <div className="container mx-auto px-4 mb-16">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                {images.gallery.map((image, index) => (
                    <motion.div
                        key={index}
                        className="relative group h-64 overflow-hidden rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={image}
                            alt={`Financial Service ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );

    const ServiceCard = ({ title, icon, content, delay = 0 }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl 
                      transition-all duration-300 border border-gray-200"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl text-[#8B7355]">{icon}</div>
                <h3 className="text-xl font-semibold text-[#4A3F35]">{title}</h3>
            </div>
            <div className="space-y-3 text-[#666]">
                {content}
            </div>
        </motion.div>
    );

    const FloatingElement = ({ children, className }) => (
        <motion.div
            className={`absolute pointer-events-none ${className}`}
            animate={{
                y: [0, 15, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#F0EBE0] to-[#E8E3D9]">
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
                        alt="Financial Services"
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
                            Financial Services
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Empowering our members with comprehensive financial solutions
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="pt-16 pb-16">
                {/* Featured Section */}
                <div className="container mx-auto px-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#4A3F35]">
                                Comprehensive Financial Support
                            </h2>
                            <p className="text-[#8B7355] leading-relaxed">
                                Our financial services cater to various needs with seasonal agricultural
                                operations, normal loans, and specialized term loans. Since inception,
                                we've disbursed over ₹220 crores in agricultural credit.
                            </p>
                            <motion.ul className="space-y-4">
                                {['7% annual interest rate', 'Up to ₹2,40,000 per member',
                                    '94.02% recovery rate', 'Zero-interest schemes available']
                                    .map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-center gap-3 text-[#8B7355]"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className="h-2 w-2 bg-[#8B7355] rounded-full" />
                                            {item}
                                        </motion.li>
                                    ))}
                            </motion.ul>
                        </div>
                        <motion.div
                            className="relative rounded-xl overflow-hidden shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={images.loan}
                                alt="Financial Services"
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Add Image Gallery after Featured Section */}
                <ImageGallery />

                {/* Existing Chart Section */}
                <div className="container mx-auto px-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/90 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-center text-[#4A3F35]">
                            Loan Disbursement Overview (2015-16)
                        </h2>
                        <div className="h-[400px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={loanData}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="amount" fill="#8B7355" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>

                {/* Services Grid with Images */}
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Modify the ServiceCard component calls to include images */}
                        <ServiceCard
                            title="Seasonal Agricultural Operations"
                            icon={<FaMoneyBillWave />}
                            content={
                                <div>
                                    <img
                                        src={images.farming}
                                        alt="Agricultural Operations"
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <motion.ul
                                        className="list-disc list-inside"
                                        variants={{
                                            hidden: { opacity: 0, height: 0 },
                                            visible: { opacity: 1, height: 'auto' }
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.5, staggerChildren: 0.1 }}
                                    >
                                        {['Rs. 24,000 per acre loan facility',
                                            'Maximum limit of 10 acres',
                                            '7% annual interest rate',
                                            'Zero-interest scheme available'].map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    variants={{
                                                        hidden: { opacity: 0, x: -20 },
                                                        visible: { opacity: 1, x: 0 }
                                                    }}
                                                    className="mb-2"
                                                >
                                                    {item}
                                                </motion.li>
                                            ))}
                                    </motion.ul>
                                </div>
                            }
                            delay={0.1}
                        />

                        <ServiceCard
                            title="Normal Loans"
                            icon={<RiMoneyDollarCircleLine />}
                            content={
                                <ul className="list-disc list-inside">
                                    <li>Support for development needs</li>
                                    <li>Children's education funding</li>
                                    <li>Hospitalization expenses coverage</li>
                                    <li>Marriage expense support</li>
                                </ul>
                            }
                            delay={0.2}
                        />

                        <ServiceCard
                            title="Medium-Term Loans"
                            icon={<FaClock />}
                            content={
                                <ul className="list-disc list-inside">
                                    <li>Agricultural implements</li>
                                    <li>Irrigation systems</li>
                                    <li>Allied agricultural activities</li>
                                    <li>Three-year repayment period</li>
                                </ul>
                            }
                            delay={0.3}
                        />

                        <ServiceCard
                            title="Long-Term Loans"
                            icon={<FaChartLine />}
                            content={
                                <ul className="list-disc list-inside">
                                    <li>Tractor and harvester purchase</li>
                                    <li>Paddy planting machines</li>
                                    <li>Citrus and mango gardens</li>
                                    <li>Seven-year repayment period</li>
                                </ul>
                            }
                            delay={0.4}
                        />

                        <ServiceCard
                            title="Loan Recovery"
                            icon={<FaHandHoldingUsd />}
                            content={
                                <div>
                                    <p>94.02% recovery rate in 2015-16</p>
                                    <div className="mt-4">
                                        <motion.div
                                            className="bg-[#8B7355]/20 h-4 rounded-full overflow-hidden"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "94.02%" }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            <div className="h-full bg-[#8B7355]" />
                                        </motion.div>
                                    </div>
                                </div>
                            }
                            delay={0.5}
                        />

                        <ServiceCard
                            title="Own Funds Generation"
                            icon={<FaPiggyBank />}
                            content={
                                <ul className="list-disc list-inside">
                                    <li>20% share capital contribution</li>
                                    <li>15% annual dividend on share capital</li>
                                    <li>Competitive interest rates on deposits</li>
                                    <li>Rs. 13.96 crores share capital</li>
                                </ul>
                            }
                            delay={0.6}
                        />
                    </div>
                </div>

                {/* Add Parallax Image Section */}
                <motion.div
                    className="relative h-[40vh] md:h-[60vh] my-16 overflow-hidden"
                    style={{
                        backgroundImage: `url(${images.farming})`,
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            Empowering Rural Growth Through Finance
                        </h2>
                    </div>
                </motion.div>

                {/* Add a new Call-to-Action section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container mx-auto px-4 mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-[#4A3F35] to-[#8B7355] p-8 rounded-2xl text-white">
                        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="mb-6">Join our community and access these financial services today</p>
                        <button className="bg-white text-[#4A3F35] px-8 py-3 rounded-full font-semibold 
                                     hover:bg-[#F5F5DC] transition-colors duration-300">
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

export default Financial;