import React from 'react';
import { motion } from 'framer-motion';
import { FaBowlRice } from 'react-icons/fa6';
import banner1 from '../../assets/rice/banner1.jpg';
import banner2 from '../../assets/rice/banner2.jpg';
import card1 from '../../assets/rice/card1.jpg';
import card2 from '../../assets/rice/card2.jpg';
import card3 from '../../assets/rice/card3.jpg';
import { Helmet } from 'react-helmet'

// Data
const riceData = {
  varieties: [
    { name: 'Sona Masoori (BPT 5204)', content: "The preferred choice for over Decades ! Light, tasty, and perfect for everyday meals.", image: card1 },
    { name: 'Jai Sri Ram', content: "The go-to rice for celebrations! Widely used in all households for festivals and special occasions.", image: card2 },
    { name: 'Telangana RNR (15048)', content: "ICAR-approved & patented! A healthier alternative with a low glycemic index, making it ideal for people with diabetes.", image: card3 }
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
  <div className="relative h-[300px] mb-16 overflow-hidden">
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

// New Retail Outlets Section
const RetailOutletsSection = () => {
  const riceShops = [
    { sno: 1, shopName: "SRI THIRUMALA RICE SHOP", area: "HANAMKONDA", ownerName: "Shyamala Garden/Rajaseker reddy", cellNo: "9948025768" },
    { sno: 2, shopName: "NANGUNURI DURGADEVI", area: "HANAMKONDA", ownerName: "100 feet road/Raju", cellNo: "7386464955" },
    { sno: 3, shopName: "MULKANOOR FINE RICE", area: "HANAMKONDA", ownerName: "Excise colony/ Bhasker", cellNo: "9701777078" },
    { sno: 4, shopName: "SRI VEERABADRA RICE SHOP", area: "HANAMKONDA", ownerName: "Naim nagar/Sunny", cellNo: "8919188218" },
    { sno: 5, shopName: "UMARANI Rice shop", area: "HANAMKONDA", ownerName: "Balasamudram/Ramana", cellNo: "9985139667" },
    { sno: 6, shopName: "PAVAN R S", area: "HANAMKONDA", ownerName: "BHEEMARAM/PAVAN", cellNo: "6301832320" },
    { sno: 7, shopName: "KANAKADURGA R S", area: "HANAMKONDA", ownerName: "SHYAMPET", cellNo: "9701077744" },
    { sno: 8, shopName: "RAMA R S", area: "HANAMKONDA", ownerName: "THALLA GOPALPOOR/LINGAMURTHY", cellNo: "9676004661" },
    { sno: 9, shopName: "GANAPATHI R S", area: "HANAMKONDA", ownerName: "THULASI BAR/VASUDEVA REDDY", cellNo: "9866426625" },
    { sno: 10, shopName: "DVR R S", area: "HANAMKONDA", ownerName: "BHEEMARAM/BHARATH", cellNo: "8686024834" },
    { sno: 11, shopName: "SRI RAMA R S", area: "HANAMKONDA", ownerName: "REDDY COLONY/", cellNo: "9154709421" },
    { sno: 12, shopName: "DHANALAXMI ENTERPRISES", area: "WARANGAL", ownerName: "kashibugga/dhanalaxmi", cellNo: "8328331973" },
    { sno: 13, shopName: "SANTHOSHIMATHA R/S", area: "WARANGAL", ownerName: "SANTHOSHIMATHA TEMPLE", cellNo: "9948147429" },
    { sno: 14, shopName: "ANUSHA R S", area: "WARANGAL", ownerName: "VEG MARKET/RAJKUMAR", cellNo: "9885809292" },
    { sno: 15, shopName: "E J R ENTERPRISES", area: "HYDERABAD", ownerName: "kavwadiguda/vinay reddy", cellNo: "9849092626" },
    { sno: 16, shopName: "M LAXMAREDDY", area: "HYDERABAD", ownerName: "Ameerpet/Laxma reddy", cellNo: "9848607979" },
    { sno: 17, shopName: "M/S TEJASWINI RICE", area: "HYDERABAD", ownerName: "nagol/Anji babu", cellNo: "9849855490" },
    { sno: 18, shopName: "CHANDRA MOHAN RICE SHOP", area: "HYDERABAD", ownerName: "rajendranagar/chandramohan", cellNo: "9908577040" },
    { sno: 19, shopName: "VENKATESHWARA RICE SHOP", area: "HYDERABAD", ownerName: "uppal/ venkateshwarlu", cellNo: "8500177817" },
    { sno: 20, shopName: "BHAVANI RICE SHOP", area: "HYDERABAD", ownerName: "uppal/thirupathi", cellNo: "9966035815" },
    { sno: 21, shopName: "LAXMI R/S", area: "HYDERABAD", ownerName: "BACHUPALLY", cellNo: "7382855991" },
    { sno: 22, shopName: "VENKATESHWARA RICE SHOP", area: "HYDERABAD", ownerName: "PATANCHERUVU", cellNo: "9000756374" },
    { sno: 23, shopName: "SRI VENKATESHWARA", area: "HYDERABAD", ownerName: "KUKATPALLU /PRASHANTH", cellNo: "9966405525" },
    { sno: 24, shopName: "LAXMI R/S", area: "HYDERABAD", ownerName: "KOKAPET/ SURESH", cellNo: "9989957968" },
    { sno: 25, shopName: "RIDHEE ENTERPRISES", area: "KARIMNAGAR", ownerName: "jyothi nagar/rajaniker reddy", cellNo: "9704042947" },
    { sno: 26, shopName: "SRI RAJARAJESHWARA", area: "KARIMNAGAR", ownerName: "shanivaram angadi/lavakumar", cellNo: "9949943660" },
    { sno: 27, shopName: "K D C C", area: "KARIMNAGAR", ownerName: "market road/ram reddy", cellNo: "9885062400" },
    { sno: 28, shopName: "MARUTHI RICE SHOP", area: "KARIMNAGAR", ownerName: "bustand/ ramakrishna", cellNo: "9246937228" },
    { sno: 29, shopName: "ANNAPURNA RICE DEPO", area: "KARIMNAGAR", ownerName: "ramnagar/naresh", cellNo: "7382063630" },
    { sno: 30, shopName: "SRI VENKATESHWARA", area: "KARIMNAGAR", ownerName: "kothirampoor/vijay", cellNo: "8639618178" },
    { sno: 31, shopName: "BHULAXMI RICE DEPO", area: "KARIMNAGAR", ownerName: "ramnagar/thirupathi", cellNo: "9885812962" },
    { sno: 32, shopName: "BHAVANANDAN R S", area: "KARIMNAGAR", ownerName: "CHAITANYAPURI", cellNo: "9885844292" },
    { sno: 33, shopName: "SRI GAYATHRI R/S", area: "KARIMNAGAR", ownerName: "NEAR APPOLLO HOSPITAL", cellNo: "9447641499" },
    { sno: 34, shopName: "BHARATHI RICE DEPO", area: "ELKATHURTHY", ownerName: "Near Police station/Ravinder", cellNo: "9966001665" },
    { sno: 35, shopName: "MAHALAXMI RICE SHOP", area: "GANGADHARA", ownerName: "GANGADHARA", cellNo: "9948005885" },
    { sno: 36, shopName: "SAGUMITHRA FARMERS", area: "GOPALPOOR", ownerName: "Naveen", cellNo: "9110777464" },
    { sno: 37, shopName: "RAJARAJESHWARA", area: "JAGITHYAL", ownerName: "market/ srinivas", cellNo: "9441774050" },
    { sno: 38, shopName: "SRI RAJARAJESHWARA", area: "JAGITHYAL", ownerName: "bustand/mahesh", cellNo: "9849423861" },
    { sno: 39, shopName: "MANISHWARA", area: "JAMMIKUNTA", ownerName: "veenavanka road/ ashok", cellNo: "9989141333" },
    { sno: 40, shopName: "PAWANASUTHA R S", area: "KAMALAPOOR", ownerName: "KAMALAPOOR/ RAJAIAH", cellNo: "9912322858" },
    { sno: 41, shopName: "HUSNABAD RICE SHOP", area: "HUSNABAD", ownerName: "HNK Road/ Mahender reddy", cellNo: "7981958509" },
    { sno: 42, shopName: "HANSIKA RICE SHOP", area: "HUZURZBAD", ownerName: "sydapoor road/ chakrapani", cellNo: "9393424530" },
    { sno: 43, shopName: "SARGAM LAXMINARAYANA", area: "HUZURZBAD", ownerName: "NEARAMBEDKAR CENTRE", cellNo: "9247125942" },
    { sno: 44, shopName: "RAMAKRISHNA R S", area: "KAZIPET", ownerName: "KAZIPET MARKET /RAMAKRISHNA", cellNo: "9392495957" },
    { sno: 45, shopName: "SANTHOSH RICE SHOP", area: "PARKAL", ownerName: "bustand/santhosh", cellNo: "9849502353" },
    { sno: 46, shopName: "SRINIVASA RICE SHOP", area: "SYDAPOOR", ownerName: "srinivas", cellNo: "9441891220" },
    { sno: 47, shopName: "LUCKY RICE SHOP", area: "VELAIR", ownerName: "sadanandam", cellNo: "9966512259" }
  ];

  // Group shops by area for better organization
  const shopsByArea = riceShops.reduce((acc, shop) => {
    if (!acc[shop.area]) {
      acc[shop.area] = [];
    }
    acc[shop.area].push(shop);
    return acc;
  }, {});

  return (
    <section className="container mx-auto px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-amber-800 text-center">
          <FaBowlRice className="inline-block mr-3 mb-1" />
          Our Distribution Network
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Find our premium rice products at these authorized retail outlets across Telangana and Hyderabad
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold">{riceShops.length}</h3>
            <p className="text-sm">Total Outlets</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold">{Object.keys(shopsByArea).length}</h3>
            <p className="text-sm">Cities Covered</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold">{shopsByArea['HYDERABAD']?.length || 0}</h3>
            <p className="text-sm">Hyderabad Outlets</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold">{shopsByArea['HANAMKONDA']?.length || 0}</h3>
            <p className="text-sm">Hanamkonda Outlets</p>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4">
            <h3 className="text-xl font-semibold text-center">Mill Tech Rice Mill - Active Retail Outlets</h3>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-amber-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">S.No</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Shop Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Area</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Location/Owner</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Contact</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {riceShops.map((shop, index) => (
                  <motion.tr
                    key={shop.sno}
                    className="hover:bg-amber-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.02 }}
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{shop.sno}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">{shop.shopName}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">
                        {shop.area}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">{shop.ownerName}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <a href={`tel:${shop.cellNo}`} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                        {shop.cellNo}
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden p-4 space-y-4">
            {riceShops.map((shop, index) => (
              <motion.div
                key={shop.sno}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">{shop.shopName}</h4>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">
                    {shop.area}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{shop.ownerName}</p>
                <a href={`tel:${shop.cellNo}`} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  📞 {shop.cellNo}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        
      </motion.div>
    </section>
  );
};

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
          content="Experience our premium rice varieties including Sona Masoori, Jai Sri Ram, and Telangana Sona. Quality rice products from farm to table, available across 47+ retail outlets."
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
      {/* <SectionBanner 
        image={riceData.bannerImages.varieties} 
        title="Discover Our Premium Varieties" 
        icon={FaBowlRice} 
        description="Each grain tells a story of quality and tradition" 
      /> */}
      <VarietiesSection varieties={riceData.varieties} />

      {/* Retail Section */}
      {/* <SectionBanner 
        image={riceData.bannerImages.retail} 
        title="Our Distribution Network" 
        icon={FaStore} 
        description="Find us at convenient locations across major towns" 
      /> */}
      <RetailOutletsSection />

      {/* Performance Section */}
      {/* <SectionBanner 
        image={riceData.bannerImages.metrics} 
        title="Our Growth Story" 
        icon={FaChartLine} 
        description="Track our journey of success through numbers" 
      />
      <PerformanceSection salesData={riceData.salesData} /> */}

      {/* Background Effects */}
      <BackgroundEffects />
    </div>
  );
};

export default Rice;