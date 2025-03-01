import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaTractor, FaLeaf, FaTree, FaSun, FaWater } from 'react-icons/fa';
import { GiFarmTractor, GiWheat, GiPlantWatering } from 'react-icons/gi';
import vision from '../../assets/vision/vision.jpg';
import card from '../../assets/vision/card.jpg';

const Mission = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-harvest overflow-x-hidden font-custom">
      {/* Header Spacing - Adjusted for mobile */}
      <div className='h-[12vh] md:h-[18vh] w-screen'></div>

      {/* Decorative Elements with Agricultural Patterns */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 pattern-wheat opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 pattern-field opacity-10 transform rotate-180"></div>
      </div>

      {/* Main Content - Enhanced responsiveness */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 pattern-diagonal opacity-5 pointer-events-none"></div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 md:mb-16 text-[#4A3F35] relative">
          <span className="inline-block">
            <FaSeedling className="inline-block mr-2 md:mr-4 text-green-600" />
            Vision & Mission
          </span>
        </h1>

        {/* Vision Section - Mobile responsive layout */}
        <motion.section className="mb-12 md:mb-20 relative" {...fadeIn}>
          <div className='w-full h-full rounded-xl absolute bg-white/20 z-10'></div>
          <img
            className='absolute rounded-xl w-full h-full z-0 object-cover'
            src={vision}
            alt="Vision background"
          />
          <div className="rounded-2xl md:rounded-3xl shadow-grain overflow-hidden border border-earth-200 backdrop-blur-sm relative z-20">
            <div className="bg-gradient-to-r from-crop-400 to-crop-500 p-4 sm:p-6 md:p-8 relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Our Vision</h2>
            </div>

            {/* Vision Content - Responsive flex layout */}
            <div className="p-4 sm:p-6 md:p-8 relative flex flex-col md:flex-row gap-6 md:gap-8 overflow-hidden z-10">
              <motion.div
                className="space-y-4 md:space-y-6 font-bold text-base sm:text-lg relative z-20 leading-relaxed text-black md:w-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p>The vision of Mulkanoor Cooperative Society is to be a beacon of excellence in the cooperative movement, recognized for transforming rural communities and fostering a resilient and prosperous farming ecosystem.</p>
                <p>We aspire to lead by example, setting benchmarks in cooperative governance, member empowerment, and sustainable rural development. Our vision encompasses creating a future where every farmer, regardless of their economic background, has access to equitable opportunities, modern agricultural resources, and a platform to achieve financial independence.</p>
                <p>By integrating advanced technologies, fostering collaborative partnerships with like-minded organizations, and embracing innovative solutions, we envision a society where agriculture is not only a means of livelihood but a pathway to enduring economic and social progress.</p>
                <p>As a model cooperative, we are committed to promoting environmental sustainability, advancing gender equity, and nurturing the next generation of leaders in the rural economy. Our ultimate goal is to create a legacy of cooperative excellence that uplifts communities, strengthens families, and contributes to the broader goal of national development.</p>
              </motion.div>
              <img
                className='rounded-xl md:rounded-tl-[10rem] md:rounded-br-[10rem] w-full md:w-1/2 h-[200px] md:h-auto object-cover relative z-20'
                src={card}
                alt="Vision illustration"
              />
            </div>
          </div>
        </motion.section>

        {/* Infinite Slider Section - Mobile optimized */}
        <div className="mt-8 md:mt-16 mb-8 md:mb-16 relative overflow-hidden">
          <motion.div
            className="flex space-x-4 md:space-x-8"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            <div className="flex space-x-4 md:space-x-8 flex-shrink-0">
              {[
                { icon: <FaTractor />, text: "Setting benchmarks in cooperative governance and member empowerment" },
                { icon: <FaSun />, text: "Creating equitable opportunities and access to modern agricultural resources" },
                { icon: <GiPlantWatering />, text: "Integrating advanced technologies and fostering collaborative partnerships" },
                { icon: <FaLeaf />, text: "Promoting environmental sustainability and advancing gender equity" },
                { icon: <FaSeedling />, text: "Equipping farmers with tools and knowledge for improved productivity" },
                { icon: <FaWater />, text: "Promoting adoption of sustainable agricultural techniques" },
                { icon: <GiWheat />, text: "Ensuring fair and ethical economic practices for rural development" }
              ].map((point, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br w-[250px] sm:w-[280px] md:w-[300px] from-[#f0ebe0] to-white p-4 md:p-6 rounded-xl border border-[#e3dfd7] flex items-start gap-3 md:gap-4"
                >
                  <div className="text-green-600 text-2xl md:text-3xl flex-shrink-0">
                    {point.icon}
                  </div>
                  <p className="text-[#4A3F35] text-sm md:text-lg">{point.text}</p>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex space-x-4 md:space-x-8 flex-shrink-0">
              {[
                { icon: <FaTractor />, text: "Setting benchmarks in cooperative governance and member empowerment" },
                { icon: <FaSun />, text: "Creating equitable opportunities and access to modern agricultural resources" },
                { icon: <GiPlantWatering />, text: "Integrating advanced technologies and fostering collaborative partnerships" },
                { icon: <FaLeaf />, text: "Promoting environmental sustainability and advancing gender equity" },
                { icon: <FaSeedling />, text: "Equipping farmers with tools and knowledge for improved productivity" },
                { icon: <FaWater />, text: "Promoting adoption of sustainable agricultural techniques" },
                { icon: <GiWheat />, text: "Ensuring fair and ethical economic practices for rural development" }
              ].map((point, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="bg-gradient-to-br w-[250px] sm:w-[280px] md:w-[300px] from-[#f0ebe0] to-white p-4 md:p-6 rounded-xl border border-[#e3dfd7] flex items-start gap-3 md:gap-4"
                >
                  <div className="text-green-600 text-2xl md:text-3xl flex-shrink-0">
                    {point.icon}
                  </div>
                  <p className="text-[#4A3F35] text-sm md:text-lg">{point.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission Section - Enhanced mobile responsiveness */}
        <motion.section {...fadeIn} transition={{ delay: 0.3 }} className="relative">
          <div className='w-full h-full rounded-xl absolute bg-white/20 z-10'></div>
          <img
            className='absolute rounded-xl w-full h-full z-0 object-cover'
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
            alt="Agriculture background"
          />
          <div className="rounded-2xl md:rounded-3xl shadow-grain overflow-hidden border border-earth-200 backdrop-blur-sm relative z-20">
            <div className="bg-gradient-to-r from-earth-300 to-earth-400 p-4 sm:p-6 md:p-8 relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
            </div>

            {/* Mission Content - Responsive text sizing */}
            <div className="p-4 sm:p-6 md:p-8 relative z-10">
              <motion.div className="space-y-4 md:space-y-8">
                <div className="space-y-4 md:space-y-6 font-bold text-base sm:text-lg md:text-xl leading-relaxed text-black relative z-20">
                  <p>The mission of Mulkanoor Cooperative Society is to empower farmers and rural communities by delivering transparent, inclusive, and sustainable financial and cooperative services. We strive to uplift the livelihoods of our members by fostering innovation in agriculture, promoting self-reliance, and encouraging community-driven growth.</p>
                  <p>Through education, training, and access to modern techniques, we aim to equip farmers with the tools and knowledge they need to improve productivity, mitigate challenges posed by drought-prone conditions, and adopt sustainable agricultural practices.</p>
                  <p>We are dedicated to creating a supportive ecosystem where farmers, small-scale entrepreneurs, and rural households can thrive by addressing their financial needs, providing high-quality seeds and resources, and ensuring fair and ethical economic practices. Our mission is rooted in building trust, fostering unity, and driving holistic development in every aspect of rural life.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Mission;


