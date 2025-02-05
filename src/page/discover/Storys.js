import React from 'react';
import { motion } from 'framer-motion';

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
      {/* Hero Section with Video */}
      <div className="relative h-screen">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-5xl font-bold text-center max-w-4xl mb-6">
            Empowering Farmers for Over 70 Years
          </h1>
          <p className="text-white text-xl text-center max-w-4xl leading-relaxed">
            At Mulkanoor Cooperative Society, we believe in the power of community and the potential of every farmer. For over 70 years, we've been empowering farmers with access to affordable financial services and expert guidance, helping them grow their farms and improve their livelihoods.
          </p>
        </div>
      </div>

      {/* History Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto py-16 px-4 relative"
      >
        <div className="absolute inset-0 pattern-wheat opacity-10"></div>
        <h2 className="text-3xl font-bold mb-8 text-center text-earth-500">Our Journey</h2>
        <div className="space-y-6 text-earth-400">
          <p className="leading-relaxed">
            The Mulkanoor Cooperative Bank was established in 1956 by its visionary founder, Late Sri A.K. Vishwanatha Reddy, under the Hyderabad Cooperative Society Act, 1952. After the enactment of the Cooperative Society Act, 1964, the society was deemed registered under the new legislation. Subsequently, with the introduction of the Mutually Aided Cooperative Society Act, 1995, it transitioned to operate under the MACS Act.
          </p>
          <p className="leading-relaxed">
            The society serves 14 revenue villages and 18 Gram Panchayats within a drought-prone region characterized by uplands and hillocks. With limited irrigation options, the area depends primarily on small tanks, ponds, open wells, and bore wells. Over-reliance on groundwater has resulted in significant depletion of the water table, making agricultural activities challenging.
          </p>
          <p className="leading-relaxed">
            Initially, the cooperative operated from the founder's residence for 14 years before establishing its own office premises in 1970. Today, the society boasts 7,629 members, a share capital of ₹13.96 crores, and thrift deposits amounting to ₹24.61 crores. The society achieved a turnover of ₹270.18 crores in 2015-16 and maintains an "A" Class audit classification.
          </p>
          <div className="bg-white/80 p-6 rounded-lg mt-8 shadow-grain backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-crop-400">Key Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-green-600">₹24.61 Cr</div>
                <div className="text-gray-600">Thrift Deposits</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-green-600">₹13.96 Cr</div>
                <div className="text-gray-600">Share Capital</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-green-600">₹270.18 Cr</div>
                <div className="text-gray-600">Turnover (2015-16)</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Impact Section */}
      <section className="bg-farmland py-16 relative">
        <div className="absolute inset-0 pattern-leaves opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.p
            className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Through tailored loans for agricultural implements, such as tractors, harvesters, and irrigation systems, we enable farmers to boost productivity and reduce costs. Our training programs offer farmers valuable insights into modern farming techniques, helping them adapt to changing environments and increasing profitability. With seasonal loans, savings schemes, and long-term financial support, Mulkanoor Cooperative Society is creating a foundation for sustainable growth, ensuring every farmer can thrive.
          </motion.p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-harvest-50 py-16 relative">
        <div className="absolute inset-0 pattern-field opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-earth-500">Our Principles</h2>

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
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-earth-200/30 relative z-10 h-full flex flex-col">
                  <div className="bg-earth-100/50 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-earth-200/50 transition-colors duration-300">
                    <span className="text-2xl text-earth-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-crop-600">{principle.title}</h3>
                  <p className="text-earth-600/90 flex-grow">{principle.description}</p>
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