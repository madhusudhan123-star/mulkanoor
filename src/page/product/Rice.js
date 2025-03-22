import React from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaChartLine, FaBowlRice } from 'react-icons/fa6';
import { GiBowlOfRice } from 'react-icons/gi';
import CountUp from 'react-countup';
import banner1 from '../../assets/rice/banner1.jpg';
import banner2 from '../../assets/rice/banner2.jpg';
import card1 from '../../assets/rice/card1.jpg';
import card2 from '../../assets/rice/card2.jpg';
import card3 from '../../assets/rice/card3.jpg';
import { Helmet } from 'react-helmet'

// Data
const riceData = {
  varieties: [
    { name: 'Sona Masoori (BPT 5204)', content: "The preferred choice for over 15 years! Light, tasty, and perfect for everyday meals.", image: card1 },
    { name: 'Jai Sri Ram', content: "ICAR-approved & patented! A healthier alternative with a low glycemic index, making it ideal for people with diabetes.", image: card2 },
    { name: 'Telangana Sona (RNR 15048)', content: "The go-to rice for celebrations! Widely used in Telugu households for festivals and special occasions.", image: card3 }
  ],
  outlets: [
    'Mulkanoor', 'Hanamkonda', 'Husnabad', 'Huzurabad', 'Karimnagar', 'Hyderabad'
  ],
  salesData: [
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
  ],
  bannerImages: {
    main: "https://images.unsplash.com/photo-1592997572594-34be01bc36c7?q=80&w=2070&auto=format&fit=crop",
    varieties: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070",
    retail: banner1,
    metrics: banner2
  }
};

// Components
const HeroSection = ({ image }) => (
  <div className="relative h-[500px] mb-16 overflow-hidden">
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.div>

    <div className="relative z-10 h-full flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          Our Premium Rice Collection
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Experience the finest quality rice, cultivated with care and tradition
        </p>
      </motion.div>
    </div>
  </div>
);

const SectionBanner = ({ image, title, icon: Icon, description }) => (
  <div className="relative mb-16">
    <div className="absolute inset-0 h-[300px] w-full">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        src={image}
        alt={title}
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
        <Icon className="inline-block mr-3 mb-1" />
        {title}
      </h2>
      <p className="text-xl text-gray-100 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  </div>
);

const VarietiesSection = ({ varieties }) => (
  <section className="container mx-auto px-4 pt-10 mb-20">
    <h2 className="text-3xl cursor-default font-bold mb-8 text-amber-800 text-center">
      <FaBowlRice className="inline-block mr-3 mb-1" />
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
          <div className=" bg-amber-100 flex items-center justify-center">
            <img src={variety.image} className='' alt={variety.name} />
          </div>
          <div className="p-6">
            <h3 className="text-xl cursor-default font-semibold text-amber-900 mb-2">
              {variety.name}
            </h3>
            <p>{variety.content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const RetailSection = ({ outlets }) => (
  <section className="bg-gradient-to-r from-amber-100 to-orange-100 py-16 mb-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl cursor-default font-bold mb-8 text-amber-800 text-center">
        <FaStore className="inline-block mr-3 mb-1" />
        Our Retail Outlets
      </h2>
      <p className="text-center cursor-default text-amber-700 mb-8">
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
);

const PerformanceSection = ({ salesData }) => (
  <section className="container mx-auto px-4 mb-20">
    <h2 className="text-3xl font-bold mb-8 text-amber-800 text-center">
      <FaChartLine className="inline-block cursor-default mr-3 mb-1" />
      Performance Metrics
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-amber-100">
            <th className="p-4 cursor-default text-left text-amber-900">Financial Year</th>
            <th className="p-4 cursor-default text-left text-amber-900">Rice (Tons)</th>
            <th className="p-4 cursor-default text-left text-amber-900">Broken Rice (Tons)</th>
            <th className="p-4 cursor-default text-left text-amber-900">Bran (Tons)</th>
            <th className="p-4 cursor-default text-left text-amber-900">Total Value (₹)</th>
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
);

const BackgroundEffects = () => (
  <div className="fixed inset-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-4 bg-amber-500/20 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
);

// Main component
const Rice = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-24">
           <Helmet>
        <title>Premium Rice Products - Mulkanoor Cooperative Society</title>
        <meta 
          name="description" 
          content="Experience our premium rice varieties including Sona Masoori, Jai Sri Ram, and Telangana Sona. Quality rice products from farm to table, available across 6+ retail outlets."
        />
        <meta
          name="keywords"
          content="premium rice, Sona Masoori, Jai Sri Ram rice, Telangana Sona, BPT 5204, RNR 15048, Mulkanoor rice products"
        />
        <meta 
          property="og:title" 
          content="Premium Rice Products - Mulkanoor Cooperative Society" 
        />
        <meta 
          property="og:description" 
          content="Discover our collection of premium rice varieties, processed with care and tradition. Available at major retail outlets across Telangana." 
        />
        <meta
          property="og:type"
          content="product"
        />
        {/* Add structured data for products */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Mulkanoor Premium Rice",
            "description": "High-quality rice varieties including Sona Masoori, Jai Sri Ram, and Telangana Sona",
            "brand": {
              "@type": "Brand",
              "name": "Mulkanoor Cooperative Society"
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR",
              "seller": {
                "@type": "Organization",
                "name": "Mulkanoor Cooperative Society"
              }
            }
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <HeroSection image={riceData.bannerImages.main} />
      {/* Varieties Section */}
      <SectionBanner 
        image={riceData.bannerImages.varieties} 
        title="Discover Our Premium Varieties" 
        icon={FaBowlRice} 
        description="Each grain tells a story of quality and tradition" 
      />
      <VarietiesSection varieties={riceData.varieties} />

      {/* Retail Section */}
      <SectionBanner 
        image={riceData.bannerImages.retail} 
        title="Our Distribution Network" 
        icon={FaStore} 
        description="Find us at convenient locations across major towns" 
      />
      <RetailSection outlets={riceData.outlets} />

      {/* Performance Section */}
      <SectionBanner 
        image={riceData.bannerImages.metrics} 
        title="Our Growth Story" 
        icon={FaChartLine} 
        description="Track our journey of success through numbers" 
      />
      <PerformanceSection salesData={riceData.salesData} />

      {/* Background Effects */}
      <BackgroundEffects />
    </div>
  );
};

export default Rice;