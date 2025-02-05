import React from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaChartLine, FaBowlRice } from 'react-icons/fa6'; // Changed to FA6 which has rice icon
import { GiBowlOfRice } from 'react-icons/gi'; // Changed to use GiBowlOfRice
import CountUp from 'react-countup';

const Rice = () => {
    const varieties = [
        { name: 'Sona Masoori (BPT 5204)', image: 'https://example.com/sona-masoori.jpg' },
        { name: 'Jai Sri Ram', image: 'https://example.com/jai-sri-ram.jpg' },
        { name: 'Telangana Sona (RNR 15048)', image: 'https://example.com/telangana-sona.jpg' }
    ];

    const outlets = [
        'Mulkanoor', 'Hanamkonda', 'Husnabad', 'Huzurabad', 'Karimnagar', 'Hyderabad'
    ];

    const salesData = [
        {
            year: '2021-22',
            rice: { qty: 3036, value: 137569415 },
            brokenRice: { qty: 302, value: 4906775 },
            bran: { qty: 1025, value: 25421229 },
            totalValue: 167897419
        },
        {
            year: '2022-23',
            rice: { qty: 4655, value: 227760461 },
            brokenRice: { qty: 1558, value: 30078346 },
            bran: { qty: 1453, value: 39854184 },
            totalValue: 297692991
        },
        {
            year: '2023-24',
            rice: { qty: 4800, value: 371071000 },
            brokenRice: { qty: 2153, value: 46613587 },
            bran: { qty: 1464, value: 32639036 },
            totalValue: 450323623
        }
    ];

    const bannerImages = {
        main: "https://images.unsplash.com/photo-1592997572594-34be01bc36c7?q=80&w=2070&auto=format&fit=crop",
        varieties: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070",
        retail: "https://images.unsplash.com/photo-1589723933707-92e88d10f2be?q=80&w=2070",
        metrics: "https://images.unsplash.com/photo-1602537694567-fc3cf0f9eca7?q=80&w=2070"
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-24">
            {/* Hero Section with Background Banner */}
            <div className="relative mb-16">
                {/* Background Image */}
                <div className="absolute inset-0 h-[400px] w-full">
                    <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
                    <img
                        // Replace the current image URL with any of the options above
                        src={bannerImages.main} // Choose any option: option1 through option5
                        alt="Rice banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <motion.div
                    className="relative z-20 container mx-auto px-4 pt-16 pb-24 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Our Premium Rice Collection
                    </h1>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                        Experience the finest quality rice, cultivated with care and tradition
                    </p>
                </motion.div>
            </div>

            {/* Varieties Banner */}
            <div className="relative mb-16">
                <div className="absolute inset-0 h-[300px] w-full">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src={bannerImages.varieties}
                        alt="Rice varieties"
                        className="w-full h-full object-cover"
                    />
                </div>
                <motion.div
                    className="relative z-20 container mx-auto px-4 pt-16 pb-24 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        <FaBowlRice className="inline-block mr-3 mb-1" />
                        Discover Our Premium Varieties
                    </h2>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                        Each grain tells a story of quality and tradition
                    </p>
                </motion.div>
            </div>

            {/* Rice Varieties */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-3xl font-bold mb-8 text-amber-800 text-center">
                    <FaBowlRice className="inline-block mr-3 mb-1" /> {/* Changed from FaRice to FaBowlRice */}
                    Premium Varieties
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {varieties.map((variety, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="h-48 bg-amber-100 flex items-center justify-center">
                                <GiBowlOfRice className="text-6xl text-amber-600" /> {/* Changed to GiBowlOfRice */}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                    {variety.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Retail Banner */}
            <div className="relative mb-16">
                <div className="absolute inset-0 h-[300px] w-full">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src={bannerImages.retail}
                        alt="Retail outlets"
                        className="w-full h-full object-cover"
                    />
                </div>
                <motion.div
                    className="relative z-20 container mx-auto px-4 pt-16 pb-24 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        <FaStore className="inline-block mr-3 mb-1" />
                        Our Distribution Network
                    </h2>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                        Find us at convenient locations across major towns
                    </p>
                </motion.div>
            </div>

            {/* Retail Outlets */}
            <section className="bg-gradient-to-r from-amber-100 to-orange-100 py-16 mb-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-amber-800 text-center">
                        <FaStore className="inline-block mr-3 mb-1" />
                        Our Retail Outlets
                    </h2>
                    <p className="text-center text-amber-700 mb-8">
                        Find us at over 20 locations across these major towns
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {outlets.map((outlet, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-amber-900 font-semibold">{outlet}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metrics Banner */}
            <div className="relative mb-16">
                <div className="absolute inset-0 h-[300px] w-full">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src={bannerImages.metrics}
                        alt="Performance metrics"
                        className="w-full h-full object-cover"
                    />
                </div>
                <motion.div
                    className="relative z-20 container mx-auto px-4 pt-16 pb-24 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        <FaChartLine className="inline-block mr-3 mb-1" />
                        Our Growth Story
                    </h2>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                        Track our journey of success through numbers
                    </p>
                </motion.div>
            </div>

            {/* Sales Statistics */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-3xl font-bold mb-8 text-amber-800 text-center">
                    <FaChartLine className="inline-block mr-3 mb-1" />
                    Performance Metrics
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-xl shadow-lg">
                        <thead>
                            <tr className="bg-amber-100">
                                <th className="p-4 text-left text-amber-900">Financial Year</th>
                                <th className="p-4 text-left text-amber-900">Rice (Tons)</th>
                                <th className="p-4 text-left text-amber-900">Broken Rice (Tons)</th>
                                <th className="p-4 text-left text-amber-900">Bran (Tons)</th>
                                <th className="p-4 text-left text-amber-900">Total Value (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesData.map((year, index) => (
                                <motion.tr
                                    key={index}
                                    className="border-b border-amber-100"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <td className="p-4 font-semibold text-amber-900">{year.year}</td>
                                    <td className="p-4">
                                        <CountUp end={year.rice.qty} duration={2} separator="," />
                                    </td>
                                    <td className="p-4">
                                        <CountUp end={year.brokenRice.qty} duration={2} separator="," />
                                    </td>
                                    <td className="p-4">
                                        <CountUp end={year.bran.qty} duration={2} separator="," />
                                    </td>
                                    <td className="p-4">
                                        ₹<CountUp end={year.totalValue} duration={2} separator="," />
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Rice;