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
    { title: "Voluntary Membership", description: "Open to all who require its services" },
    { title: "Democratic Management", description: "Operates on a 'one member, one vote' principle" },
    { title: "Equity in Capital", description: "Share capital offers no special privileges except a limited return" },
    { title: "Member-Centric Benefits", description: "Economic benefits based on utilization of services" },
    { title: "Education & Training", description: "Regular initiatives for members, staff, and farmers" },
    { title: "Equitable Surplus Distribution", description: "Surplus funds are distributed fairly among members" },
    { title: "Cooperative Awareness", description: "Members are well-informed about cooperative practices" },
    { title: "Collaboration", description: "Works with other cooperatives for mutual support" },
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
        className="max-w-6xl mx-auto py-16 px-4 mt-20 relative"
      >
        <div className="absolute inset-0 pattern-wheat opacity-10"></div>
        <h2 className="text-3xl cursor-default font-bold mb-8 text-center text-earth-500">Our Journey</h2>

        {/* Add historical images */}
        <div className="flex justify-center">
          <div className="relative rounded-xl overflow-hidden h-80">
            <img
              src={Founder}
              alt="Founder A.K. Vishwanatha Reddy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <p className="text-sm cursor-default">Late Sri A.K. Vishwanatha Reddy, Our Founder</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-earth-400 mt-10">
          <p className="leading-relaxed cursor-default ">
            The Mulkanoor Cooperative Bank was established in 1956 by its visionary founder, Late Sri A.K. Vishwanatha Reddy, under the Hyderabad Cooperative Society Act, 1952. After the enactment of the Cooperative Society Act, 1964, the society was deemed registered under the new legislation. Subsequently, with the introduction of the Mutually Aided Cooperative Society Act, 1995, it transitioned to operate under the MACS Act.
          </p>
          <p className="leading-relaxed cursor-default">
            The society serves 14 revenue villages and 18 Gram Panchayats within a drought-prone region characterized by uplands and hillocks. With limited irrigation options, the area depends primarily on small tanks, ponds, open wells, and bore wells. Over-reliance on groundwater has resulted in significant depletion of the water table, making agricultural activities challenging.
          </p>
          <p className="leading-relaxed cursor-default">
            Initially, the cooperative operated from the founder's residence for 14 years before establishing its own office premises in 1970. Today, the society boasts 7,629 members, a share capital of ₹13.96 crores, and thrift deposits amounting to ₹24.61 crores. The society achieved a turnover of ₹270.18 crores in 2015-16 and maintains an "A" Class audit classification.
          </p>
        </div>
      </motion.section>

      {/* Our Impact Section */}


      {/* Principles Section */}
      <section className="bg-harvest-50 py-16 relative">
        <div className="absolute inset-0 pattern-field opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl cursor-default font-bold mb-12 text-center text-earth-500">Our Principles</h2>

          {/* Updated Principles Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-xl"></div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-earth-200/30 relative z-10 h-full flex flex-col">
                  <div className="bg-earth-100/50 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-earth-200/50 transition-colors duration-300">
                    <span className="text-2xl text-earth-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl cursor-default font-semibold mb-3 text-crop-600">{principle.title}</h3>
                  <p className="text-earth-600/90 cursor-default flex-grow">{principle.description}</p>
                  <div className="h-1 w-20 bg-gradient-to-r from-crop-400 to-crop-500 mt-4 group-hover:w-full transition-all duration-300"></div>
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