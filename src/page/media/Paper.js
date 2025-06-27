import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import paper1 from '../../assets/paper/1.jpeg';
import paper2 from '../../assets/paper/2.jpg';
import paper3 from '../../assets/paper/3.jpeg';
import paper4 from '../../assets/paper/4.jpeg';
import paper5 from '../../assets/paper/5.jpeg';
import paper6 from '../../assets/paper/6.jpg';

const Paper = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  
  // Array of newspaper cutout images
  const papers = [
    {
      id: 1,
      image: paper1,
      title: "ముల్కనూరు బియ్యం: నాణ్యత 100% - ఈనాడు ప్రత్యేక కథనం",
    },
    {
      id: 2,
      image: paper2,
      title: "రైతుపాలిట కల్పతరువు: ముల్కనూరు సహకార గ్రామీణ పరపతి సంఘం – సాక్షి ప్రత్యేక కథనం",
    },
    {
      id: 3,
      image: paper3,
      title: "ముల్కనూరు సహకార గ్రామీణ పరపతి సంఘం: రైతుల పాలిట కల్పతరువు – నమస్తే తెలంగాణ ప్రత్యేక కథనం",
    },
    {
      id: 4,
      image: paper4,
      title: "రైతు సంక్షేమానికి కాంక్షించే ఏకైక సహకార సంఘం ముల్కనూరు బ్యాంక్- ప్రజామంటలు వారి ప్రత్యేక కథనం",
    },
    {
      id: 5,
      image: paper5,
      title: "సహకార సిగలో కాంతిరేఖ: ముల్కనూరు సహకార సంఘం- విజయక్రాంతి వారి ప్రత్యేక కథనం.",
    },
    {
      id: 6,
      image: paper6,
      title: "సహకార స్ఫూర్తికి జేజేలు అంటూ ముల్కనూరు సహకార సంఘం పై సాక్షి వారి ప్రత్యేక కథనం",
    }
  ];

  // Open modal with selected paper
  const openModal = (paper) => {
    setSelectedPaper(paper);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close modal
  const closeModal = () => {
    setSelectedPaper(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50/40 pt-24 pb-12">
      <Helmet>
        <title>News Articles - Mulkanoor Cooperative Society</title>
        <meta 
          name="description" 
          content="Browse news articles and press coverage featuring Mulkanoor Cooperative Society's achievements, initiatives, and impact on the agricultural community."
        />
        <meta
          name="keywords"
          content="Mulkanoor press, agricultural news, cooperative society news, rural development news, farmer success stories"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">Telugu Articles</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore news articles and press coverage highlighting Mulkanoor Cooperative Society's 
            achievements, innovations, and contributions to agricultural development.
          </p>
        </div>
      </div>

      {/* Newspaper Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openModal(paper)}
            >
              <div className="relative h-56 overflow-hidden bg-yellow-100">
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
                <img 
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                {/* <span className="text-xs text-green-700 font-medium">{paper.source} • {paper.date}</span> */}
                <h3 className="text-xl font-semibold text-gray-800 mt-1 cursor-pointer hover:text-green-700 transition-colors">{paper.title}</h3>
                <div className="flex justify-end mt-2">
                  <button 
                    className="text-green-700 hover:text-green-900 text-sm font-medium"
                    onClick={() => openModal(paper)}
                  >
                    Read Article →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox for viewing paper */}
      <AnimatePresence>
        {selectedPaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 p-4 flex items-center justify-center backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-[80vh] overflow-auto">
                <img
                  src={selectedPaper.image}
                  alt={selectedPaper.title}
                  className="w-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4">
                <h3 className="text-xl font-bold text-green-800">{selectedPaper.title}</h3>
                <p className="text-sm text-gray-600">{selectedPaper.source} • {selectedPaper.date}</p>
              </div>
              <button
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Additional feature: Pagination or "Load More" button if needed */}
      {/* 
      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors shadow-md">
          Load More Articles
        </button>
      </div>
      */}
    </div>
  );
};

export default Paper;