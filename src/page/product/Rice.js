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
    { slNo: 1, shopName: 'BHAVANI RICE SHOP', area: 'HYDERABAD', areaPoint: 'UPPAL', ownerName: 'Thirupathi', cellNo: '9966035815' },
    { slNo: 2, shopName: 'VENKATESHWARA RICE SHOP', area: 'HYDERABAD', areaPoint: 'UPPAL', ownerName: 'Venkateshwarlu', cellNo: '8500177817' },
    { slNo: 3, shopName: 'M LAXMAREDDY', area: 'HYDERABAD', areaPoint: 'AMEERPET', ownerName: 'Laxma reddy', cellNo: '9848607979' },
    { slNo: 4, shopName: 'CHANDRA MOHAN RICE SHOP', area: 'HYDERABAD', areaPoint: 'RAJENDRANAGAR', ownerName: 'Chandramohan', cellNo: '9908577040' },
    { slNo: 5, shopName: 'M/S TEJASWINI RICE', area: 'HYDERABAD', areaPoint: 'NAGOL', ownerName: 'Anji babu', cellNo: '9849855490' },
    { slNo: 6, shopName: 'E J R ENTERPRISES', area: 'HYDERABAD', areaPoint: 'KAWADIGUDA', ownerName: 'Vinay reddy', cellNo: '9849092626' },
    { slNo: 7, shopName: 'DHANISHTA TRADERS', area: 'HYDERABAD', areaPoint: 'TARNAKA', ownerName: '', cellNo: '9440067069' },
    { slNo: 8, shopName: 'LAXMI R/S', area: 'HYDERABAD', areaPoint: 'BACHUPALLY', ownerName: '', cellNo: '7382855991' },
    { slNo: 9, shopName: 'VENKATESHWARA RICE SHOP', area: 'HYDERABAD', areaPoint: 'PATANCHERUVU', ownerName: '', cellNo: '9000756374' },
    { slNo: 10, shopName: 'SRI VEERABADRA RICE SHOP', area: 'HANAMKONDA', areaPoint: 'NAIM NAGAR', ownerName: 'Sunny', cellNo: '8919188218' },
    { slNo: 11, shopName: 'SRI THIRUMALA', area: 'HANAMKONDA', areaPoint: 'SHYAMALA GARDEN', ownerName: 'Rajaseker reddy', cellNo: '9948025768' },
    { slNo: 12, shopName: 'MULKANOOR FINE RICE', area: 'HANAMKONDA', areaPoint: 'EXCISE COLONY', ownerName: 'Bhasker', cellNo: '9701777078' },
    { slNo: 13, shopName: 'UMARANI Rice shop', area: 'HANAMKONDA', areaPoint: 'BALASAMUDRAM', ownerName: 'Ramana', cellNo: '9985139667' },
    { slNo: 14, shopName: 'NANGUNURI DURGADEVI', area: 'HANAMKONDA', areaPoint: '100 FT ROAD', ownerName: 'Raju', cellNo: '7386464955' },
    { slNo: 15, shopName: 'BHANU R/S', area: 'HANAMKONDA', areaPoint: 'ERRAGATTUGUTTA', ownerName: '', cellNo: '9676395274' },
    { slNo: 16, shopName: 'SRI VENKATESHWARA', area: 'HANAMKONDA', areaPoint: 'THALLA GOPALPOOR', ownerName: '', cellNo: '9390597549' },
    { slNo: 17, shopName: 'DHANALAXMI ENTERPRISES', area: 'WARANGAL', areaPoint: 'KASHUBUGGA', ownerName: 'Dhanalaxmi', cellNo: '8328331973' },
    { slNo: 18, shopName: 'VINODHA RICE SHOP', area: 'WARANGAL', areaPoint: 'DOCTOR COLONY', ownerName: 'Vinoda', cellNo: '9177334424' },
    { slNo: 19, shopName: 'B P C L RICE SHOP (PREETHI GAS)', area: 'WARANGAL', areaPoint: 'POCHAM MYADAN', ownerName: 'Bhasker', cellNo: '9866247525' },
    { slNo: 20, shopName: 'SANTHOSHIMATHA R/S', area: 'WARANGAL', areaPoint: 'SANTHOSHIMATHA TEMPLE', ownerName: '', cellNo: '9948147429' },
    { slNo: 21, shopName: 'RIDHEE ENTERPRISES', area: 'KARIMNAGAR', areaPoint: 'JYOTHINAGAR', ownerName: 'Rajaniker reddy', cellNo: '9704042947' },
    { slNo: 22, shopName: 'SRI VENKATESHWARA', area: 'KARIMNAGAR', areaPoint: 'KOTHIRAMPOOR', ownerName: 'Vijay', cellNo: '8639618178' },
    { slNo: 23, shopName: 'MALLIKARJUNA', area: 'KARIMNAGAR', areaPoint: 'KOTHIRAMPOOR', ownerName: 'Thirupathi reddy', cellNo: '9866441544' },
    { slNo: 24, shopName: 'K D C C', area: 'KARIMNAGAR', areaPoint: 'MARKET ROAD', ownerName: 'Ram reddy', cellNo: '9885062400' },
    { slNo: 25, shopName: 'SRI RAJARAJESHWARA', area: 'KARIMNAGAR', areaPoint: 'SHANIVARAM ANGADI', ownerName: 'Lavakumar', cellNo: '9949943660' },
    { slNo: 26, shopName: 'MARUTHI RICE SHOP', area: 'KARIMNAGAR', areaPoint: 'BUSTAND', ownerName: 'Ramakrishna', cellNo: '9246937228' },
    { slNo: 27, shopName: 'ANNAPURNA RICE DEPO', area: 'KARIMNAGAR', areaPoint: 'RAMNAGAR', ownerName: 'Naresh', cellNo: '7382063630' },
    { slNo: 28, shopName: 'BHULAXMI RICE DEPO', area: 'KARIMNAGAR', areaPoint: 'RAMNAGAR', ownerName: 'Thirupathi', cellNo: '9885812962' },
    { slNo: 29, shopName: 'BHAVANANDAN R', area: 'KARIMNAGAR', areaPoint: 'CHAITANYAPURI', ownerName: '', cellNo: '9885844292' },
    { slNo: 30, shopName: 'SRI GAYATHRI R/S', area: 'KARIMNAGAR', areaPoint: 'NEAR APPOLLO HOSPITAL', ownerName: '', cellNo: '9447641499' },
    { slNo: 31, shopName: 'ANNAPURNA RICE DEPO', area: 'KARIMNAGAR', areaPoint: 'GANESH NAGAR', ownerName: '', cellNo: '9849360649' },
    { slNo: 32, shopName: 'MAHALAXMI', area: 'GANGADHARA', areaPoint: 'GANGADHARA', ownerName: '', cellNo: '9948005885' },
    { slNo: 33, shopName: 'SRINIVASA RICE SHOP', area: 'GODAVARIKANI', areaPoint: 'THILAK NAGAR', ownerName: 'Srinivas', cellNo: '9912090098' },
    { slNo: 34, shopName: 'SRI LAXMI RICE SHOP', area: 'GODAVARIKANI', areaPoint: 'JYOTHI NAGAR', ownerName: 'Rajesh', cellNo: '9949939920' },
    { slNo: 35, shopName: 'SRI LAXMI RICE SHOP', area: 'KESHAVAPATNAM', areaPoint: 'KESHVAPATNAM', ownerName: '', cellNo: '8500570458' },
    { slNo: 36, shopName: 'RAJARAJESHWARA', area: 'JAGITHYAL', areaPoint: 'MARKET', ownerName: 'Srinivas', cellNo: '9441774050' },
    { slNo: 37, shopName: 'SRI RAJARAJESHWARA', area: 'JAGITHYAL', areaPoint: 'BUSTAND', ownerName: 'Mahesh', cellNo: '9849423861' },
    { slNo: 38, shopName: 'BHARATHI RICE DEPO', area: 'ELKATHURTHY', areaPoint: 'NEAR POLICE STATION', ownerName: 'Ravinder', cellNo: '9966001665' },
    { slNo: 39, shopName: 'SRIMATHI', area: 'ELKATHURTHY', areaPoint: 'SIDDIPET ROAD', ownerName: '', cellNo: '8897071866' },
    { slNo: 40, shopName: 'SAGUMITHRA FARMERS', area: 'GOPALPOOR', areaPoint: '', ownerName: 'NAVEEN', cellNo: '9110777464' },
    { slNo: 41, shopName: 'HUSNABAD RICE SHOP', area: 'HUSNABAD', areaPoint: 'HNK Road', ownerName: 'Mahender reddy', cellNo: '7981958509' },
    { slNo: 42, shopName: 'HANSIKA RICE SHOP', area: 'HUZURZBAD', areaPoint: 'SAIDAPOOR ROAD', ownerName: 'Chakrapani', cellNo: '9393424530' },
    { slNo: 43, shopName: 'SARGAM LAXMINARAYANA', area: 'HUZURZBAD', areaPoint: 'NEAR AMBEDKAR CENTRE', ownerName: '', cellNo: '9247125942' },
    { slNo: 44, shopName: 'MANISHWARA', area: 'JAMMIKUNTA', areaPoint: 'VEENAVANKA ROAD', ownerName: 'Ashok', cellNo: '9989141333' },
    { slNo: 45, shopName: 'SANTHOSH RICE SHOP', area: 'PARKAL', areaPoint: 'BUSTAND', ownerName: 'Santhosh', cellNo: '9849502353' },
    { slNo: 46, shopName: 'SRINIVASA RICE SHOP', area: 'SYDAPOOR', areaPoint: '', ownerName: 'SRINIVAS', cellNo: '9441891220' },
    { slNo: 47, shopName: 'LUCKY RICE SHOP', area: 'VELAIR', areaPoint: '', ownerName: 'SADANANDAM', cellNo: '9966512259' }
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
        Find our premium rice products at these authorized retail locations
      </p>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-amber-100">
              <th className="p-3 text-left text-amber-900 font-semibold border-b">SL. NO</th>
              <th className="p-3 text-left text-amber-900 font-semibold border-b">SHOP NAME</th>
              <th className="p-3 text-left text-amber-900 font-semibold border-b">AREA</th>
              <th className="p-3 text-left text-amber-900 font-semibold border-b">AREA POINT</th>
              <th className="p-3 text-left text-amber-900 font-semibold border-b">OWNER NAME</th>
              <th className="p-3 text-left text-amber-900 font-semibold border-b">CELL NO</th>
            </tr>
          </thead>
          <tbody>
            {outlets.map((outlet, index) => (
              <motion.tr
                key={index}
                className="border-b border-amber-50 hover:bg-amber-50"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
              >
                <td className="p-3 text-amber-900">{outlet.slNo}</td>
                <td className="p-3 font-medium">{outlet.shopName}</td>
                <td className="p-3">{outlet.area}</td>
                <td className="p-3">{outlet.areaPoint}</td>
                <td className="p-3">{outlet.ownerName || '-'}</td>
                <td className="p-3">{outlet.cellNo}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
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