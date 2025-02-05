import React from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaChartLine, FaSeedling } from 'react-icons/fa6';
import { GiPlantSeed } from 'react-icons/gi';
import CountUp from 'react-countup';

const Paddy = () => {
    const varieties = [
        { name: 'BPT 5204', image: 'https://example.com/bpt-5204.jpg' },
        { name: 'RNR 15048', image: 'https://example.com/rnr-15048.jpg' },
        { name: 'MTU 1010', image: 'https://example.com/mtu-1010.jpg' },
        { name: 'MTU 1001', image: 'https://example.com/mtu-1001.jpg' },
        { name: 'IR 64', image: 'https://example.com/ir-64.jpg' }
    ];

    const salesData = [
        {
            year: '2021-22',
            quantity: 12249,
            area: 424722,
            value: 356389161
        },
        {
            year: '2022-23',
            quantity: 12893,
            area: 515744,
            value: 441824625
        },
        {
            year: '2023-24',
            quantity: 11695,
            area: 430605,
            value: 360093000
        }
    ];

    const bannerImages = {
        main: "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?q=80&w=2070",
        varieties: "https://images.unsplash.com/photo-1595377592107-154bbb1c3332?q=80&w=2070",
        process: "https://images.unsplash.com/photo-1599719619096-7025adeac993?q=80&w=2070",
        metrics: "https://images.unsplash.com/photo-1620945264906-7205773922ca?q=80&w=2070"
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-24">
            {/* Main Hero Banner */}
            <div className="relative mb-16">
                <div className="absolute inset-0 h-[400px] w-full">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src={bannerImages.main}
                        alt="Paddy banner"
                        className="w-full h-full object-cover"
                    />
                </div>
                <motion.div
                    className="relative z-20 container mx-auto px-4 pt-16 pb-24 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Premium Paddy Seeds
                    </h1>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                        Quality seeds for prosperous harvests
                    </p>
                </motion.div>
            </div>

            {/* Process Banner */}
            <div className="relative mb-16">
                <div className="absolute inset-0 h-[300px] w-full">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src={bannerImages.process}
                        alt="Seed process"
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
                        <FaSeedling className="inline-block mr-3 mb-1" />
                        Our Seed Production Process
                    </h2>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                        Multiplication of breeder paddy seed into Foundation seed then to truthful seed in progressive farmers fields under the expert supervision of our society Agriculture Officers.
                    </p>
                </motion.div>
            </div>

            {/* Varieties Section */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-3xl font-bold mb-8 text-emerald-800 text-center">
                    <FaSeedling className="inline-block mr-3 mb-1" />
                    Available Varieties
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
                            <div className="h-48 bg-emerald-100 flex items-center justify-center">
                                <GiPlantSeed className="text-6xl text-emerald-600" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                                    {variety.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
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
                        Performance Metrics
                    </h2>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                        Our growing impact in numbers
                    </p>
                </motion.div>
            </div>

            {/* Sales Statistics */}
            <section className="container mx-auto px-4 mb-20">
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-xl shadow-lg">
                        <thead>
                            <tr className="bg-emerald-100">
                                <th className="p-4 text-left text-emerald-900">Financial Year</th>
                                <th className="p-4 text-left text-emerald-900">Quantity Marketed (Tons)</th>
                                <th className="p-4 text-left text-emerald-900">Area Covered (Acres)</th>
                                <th className="p-4 text-left text-emerald-900">Value (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesData.map((year, index) => (
                                <motion.tr
                                    key={index}
                                    className="border-b border-emerald-100"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <td className="p-4 font-semibold text-emerald-900">{year.year}</td>
                                    <td className="p-4">
                                        <CountUp end={year.quantity} duration={2} separator="," />
                                    </td>
                                    <td className="p-4">
                                        <CountUp end={year.area} duration={2} separator="," />
                                    </td>
                                    <td className="p-4">
                                        ₹<CountUp end={year.value} duration={2} separator="," />
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

export default Paddy;