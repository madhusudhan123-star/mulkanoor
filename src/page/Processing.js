import React from 'react';
import { motion } from 'framer-motion';
import { FaWarehouse, FaIndustry, FaSeedling, FaLeaf, FaBoxes } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import godowns from '../assets/processing/godowns.jpg'
import ricemill from '../assets/processing/ricemill.jpg'
import rawricemill from '../assets/processing/rawricemill.JPG'
import seedprocessing from '../assets/processing/seedprocessing.JPG'
import cottonprocessing from '../assets/processing/cottonprocessing.JPG'


const Processing = () => {
  // Processing facility sections data with dummy internet images
  const processingFacilities = [
    {
      id: 'godowns',
      title: 'Godowns',
      icon: <FaWarehouse className="text-3xl" />,
      description: 'In our 56000 MT capacity storage structures across 18 villages, we store both agri inputs and farm produce. The storage aids to manage agri input demand, provide the buffer time for value addition and  to time markets for fetching best price',
      image: godowns
    },
    {
      id: 'parboiled',
      title: 'Parboiled rice mill-4 ton/hr',
      icon: <FaIndustry className="text-3xl" />,
      description: 'In the fully automated parboiled rice mill unit the paddy undergoes cleaning, boiling, drying, dehusking, polishing and colour sorting, grading.  Here the final product rice is supplied to FCI or exported.',
      image: ricemill
    },
    {
      id: 'rawrice',
      title: 'Modern raw rice mill-4 ton/hr',
      icon: <FaBoxes className="text-3xl" />,
      description: 'The paddy is cleaned and then directly dehusked, polished to get fine rice. The rice is colour sorted and graded for automated packing. The process is fully automated and packed hygienically.',
      image: rawricemill
    },
    {
      id: 'seed',
      title: 'Seed processing units-23 ton/hr with 7 units',
      icon: <FaSeedling className="text-3xl" />,
      description: 'Once the seeds are procured they are cleaned, graded and packed.',
      image: seedprocessing
    },
    {
      id: 'cotton',
      title: 'Cotton ginning mills- 15 ton/day ginning machines',
      icon: <FaLeaf className="text-3xl" />,
      description: 'The cotton is cleaned, ginned and pressed into bales.',
      image: cottonprocessing
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-24 pb-16">
      <Helmet>
        <title>Processing Facilities - Mulkanoor Cooperative Society</title>
        <meta 
          name="description" 
          content="Explore Mulkanoor's state-of-the-art processing facilities including 56,000 MT storage capacity, rice mills, seed processing, and cotton ginning units."
        />
        <meta
          name="keywords"
          content="agricultural processing, rice mill, seed processing, cotton ginning, storage facilities, farm produce processing"
        />
        <meta 
          property="og:title" 
          content="Processing Facilities - Mulkanoor Cooperative Society" 
        />
        <meta 
          property="og:description" 
          content="Discover how our integrated processing facilities transform farm produce into prosperity for farmers." 
        />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative h-[300px] overflow-hidden mb-16">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop" 
          alt="Processing Facilities" 
          className="absolute w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Processing Facilities
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              " It's not just about the infrastructure. It is a system that turns farm produce to farmer's prosperity "
            </motion.p>
          </div>
        </div>
      </div>

      {/* Processing Facilities Sections */}
      <div className="container mx-auto px-4 space-y-24">
        {processingFacilities.map((facility, index) => (
          <motion.div
            key={facility.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Content Section - Alternate sides based on index */}
            <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 p-4 rounded-full text-green-800">
                    {facility.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-green-800">{facility.title}</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="rounded-xl overflow-hidden shadow-xl h-[300px]">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    
    </div>
  );
};

export default Processing;