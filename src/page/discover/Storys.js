import React from 'react';
import { motion } from 'framer-motion';
import banner from '../../assets/ourstory/banner.jpg';
import field from '../../assets/ourstory/field.jpg';
import Building from '../../assets/ourstory/Building.jpg';
import Scene from '../../assets/ourstory/Scene.jpg';
import Original from '../../assets/ourstory/Original.jpg';
import Founder from '../../assets/ourstory/Founder.jpg';
import Modern from '../../assets/ourstory/Modern.jpg';
import farmer from '../../assets/ourstory/farmer.jpg';
import modern from '../../assets/ourstory/modern (2).jpg'; 
import meeting from '../../assets/ourstory/meeting.jpg';
import { Helmet } from 'react-helmet'

const Storys = () => {
  const principles = [
    { title: "Voluntary and open membership", description: "membership rooted in inclusivity, embracing all individuals beyond gender, social standing, race, politics or faith" },
    { title: "Democratic member control", description: "cooperative management is controlled by its members through voting rights. “one member one vote" },
    { title: "Member economic participation", description: "members contribute and control the capital of the cooperative and share Benefits in proportion to the business they conduct with the cooperative." },
    { title: "Autonomy and independence", description: "limited interference of government, and no external influence." },
    { title: "Education, training and information", description: "all the stakeholders are continuously trained on cooperative principles and modern farming technologies from farm to fork." },
    { title: "Cooperation among cooperatives", description: "works with other cooperatives for mutual benefit" },
    { title: "Community development", description: "Invests in sustainable development of local communities through education and infrastructure support,  social welfare initiatives" },
    // { title: "Collaboration", description: "Works with other cooperatives for mutual support" },
  ];

  return (
    <div className="min-h-screen bg-harvest">
      <Helmet>
        <title>Our Story - Mulkanoor Cooperative Society | Since 1956</title>
        <meta 
          name="description" 
          content="Discover the inspiring journey of Mulkanoor Cooperative Society, from its founding in 1956 by Sri A.K. Vishwanatha Reddy to becoming a ₹270.18 crore organization serving 7,629 members across 14 villages."
        />
        <meta
          name="keywords"
          content="Mulkanoor history, A.K. Vishwanatha Reddy, cooperative journey, rural development, agricultural cooperative, farmer empowerment"
        />
        <meta 
          property="og:title" 
          content="Our Story - Mulkanoor Cooperative Society | Since 1956" 
        />
        <meta 
          property="og:description" 
          content="From humble beginnings to agricultural excellence: The inspiring 67-year journey of empowering farmers through cooperative movement." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mulkanoor Cooperative Society",
            "foundingDate": "1956",
            "founder": {
              "@type": "Person",
              "name": "Sri A.K. Vishwanatha Reddy",
              "jobTitle": "Founder",
              "image": Founder
            },
            "description": "Pioneer cooperative society transforming rural agriculture since 1956",
            "areaServed": {
              "@type": "Place",
              "name": "Mulkanoor Region",
              "description": "14 revenue villages and 18 Gram Panchayats",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.2843",
                "longitude": "79.2061"
              }
            },
            "memberOf": {
              "@type": "Organization",
              "name": "MACS Act Cooperatives",
              "description": "Mutually Aided Cooperative Society Act registered organization"
            },
            "numberOfEmployees": "7629",
            "foundingLocation": {
              "@type": "Place",
              "name": "Mulkanoor, Telangana",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              }
            },
            "award": [
              {
                "@type": "Award",
                "name": "A Class Audit Classification",
                "description": "Highest audit rating for cooperative societies"
              }
            ],
            "principles": principles.map(principle => ({
              "@type": "Thing",
              "name": principle.title,
              "description": principle.description
            }))
          })}
        </script>
      </Helmet>

      {/* History Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto py-8 md:py-16 px-4 mt-16 md:mt-20 relative"
      >
        <div className="absolute inset-0 pattern-wheat opacity-10"></div>
        <div className='flex gap-6 md:gap-10 flex-col'>        
          {/* Founder image - responsive sizing */}
          <div className="flex justify-center items-center w-full">
            <div className="relative rounded-xl overflow-hidden w-full sm:w-[80%] md:w-[60%] lg:w-[50%] max-w-md">
              <img
                src={Founder}
                alt="Founder A.K. Vishwanatha Reddy"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 md:p-4">
                <p className="text-xs md:text-sm cursor-default text-center">Late Sri A.K. Vishwanatha Reddy, Our Founder</p>
              </div>
            </div>
          </div>

          <div className="w-full text-earth-400 mt-6 md:mt-10">
            <h2 className="text-2xl md:text-3xl cursor-default font-bold mb-6 md:mb-8 text-center text-earth-500">Our Journey</h2>
            <div className="space-y-4 md:space-y-6 text-sm md:text-base">
              <p className="leading-relaxed cursor-default">
                Mulkanoor cooperative rural bank was established in 1956 by esteemed visionary founder Late sri A.K Vishwanatha Reddy with the primary objective of uplifting socio-economic status of farmers. The society was initially registered under the Hyderabad cooperative societies act 1952. later, automatically deemed into A.P cooperative societies act 1964. After the enactment of Mutually aided cooperative societies act 1995 the cooperative transitioned under this new enactment.
              </p>
              <p className="leading-relaxed cursor-default">
                The cooperative operates in its catchment of 14 revenue villages with a total of 18 gram panchayats. These villages then were in the drought prone region characterized by uplands and hillocks. There were conditions of lack of irrigation facilities,power supply, finance, agri-inputs, remunerative price for their produce. These situations made our ancestors build a temple of trust with a primary objective of countering these challenges and hardships faced by farmers.
              </p>
              <p className="leading-relaxed cursor-default">
                Initially founded with 373 members and a share capital of RS 2300/- today society is 7629 active members strong with share capital of 17.96 crores and thrift deposits of 45.90 crores creating impact in the lives of 35000-40000 people. The present admission number of the society is 14908. The annual turnover is around 352 crores which displays the humongous success achieved and much more to come along. The society initially started operating from the founders' residence for 14 years until it moved to its own office premise in 1970.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Principles Section */}
      <section className="bg-harvest-50 py-8 md:py-16 relative">
        <div className="absolute inset-0 pattern-field opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl cursor-default font-bold mb-8 md:mb-12 text-center text-earth-500">Our Principles</h2>

          {/* Responsive Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5
                }}
                whileHover={{
                  scale: 1.02,
                  rotate: [0, 0.5, -0.5, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-xl"></div>
                <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-xl border border-earth-200/30 relative z-10 h-full flex flex-col min-h-[200px] sm:min-h-[220px]">
                  <h3 className="text-base md:text-lg lg:text-xl cursor-default font-semibold mb-2 md:mb-3 text-crop-600 leading-tight">
                    {principle.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-earth-600/90 cursor-default flex-grow leading-relaxed">
                    {principle.description}
                  </p>
                  <div className="h-1 w-12 md:w-20 bg-gradient-to-r from-crop-400 to-crop-500 mt-3 md:mt-4 group-hover:w-full transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Decorative Elements */}
          <div className="absolute -bottom-4 left-0 w-full h-8 bg-gradient-to-t from-earth-50/20 to-transparent"></div>
          <div className="absolute -top-4 left-0 w-full h-8 bg-gradient-to-b from-earth-50/20 to-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default Storys;