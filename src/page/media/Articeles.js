import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaFilePdf, FaDownload, FaEye, FaTimes } from 'react-icons/fa';
import thum1 from '../../assets/articeles/1.png';
import thum2 from '../../assets/articeles/2.png';
import thum3 from '../../assets/articeles/3.png';
import thum4 from '../../assets/articeles/4.png';
import thum5 from '../../assets/articeles/5.png';
import thum6 from '../../assets/articeles/6.png';
import thum7 from '../../assets/articeles/7.png';
import thum8 from '../../assets/articeles/8.png';


const Articeles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  // Array of article PDF data
  const articles = [
    {
      id: 1,
      title: "The Story of Mulkanoor Cooperative Society- A Special Feature in the Esteemed Labour & Industrial Chronicle.",
      date: "June 30, 1981",
      pdfFile: "https://drive.google.com/file/d/1PQOwnNdTI_SValGcoqRmsgHg399nGFhc/view?usp=sharing",
      thumbnail: thum1,
    },
    {
      id: 2,
      title: "Mulkanoor Cooperative Society Featured in India Today – A Celebrated Story of Rural Transformation and Trust.",
      date: "August 1-15, 1981",
      pdfFile: "https://drive.google.com/file/d/1e-MsrKwApBdemfpLMt2cv4U5R80-8mQx/view?usp=sharing",
      thumbnail: thum2,

    },
    {
      id: 3,
      title: "Mulkanoor Cooperative Society Featured in 'The Cooperator' for its inspiring Success Story.",
      date: "15th August 1981",
      pdfFile: "https://drive.google.com/file/d/1zypmSkg0qqhXSA2djSMXjUZThg4yqJgx/view?usp=sharing",
      thumbnail: thum3,
    },
    {
      id: 4,
      title: "Citation of the Award “Manager of the Year:198” awarded to Shri. A.K.Vishwanath Reddy garu reproduced in the renowned publication “Voluntary Action Awards Monthly Journal”.",
      date: "October 1981",
      pdfFile: "https://drive.google.com/file/d/1Cr5VOLoe9ksMfpv_L_iar8ojfh4qxWhz/view?usp=sharing",
      thumbnail: thum4,
    },
    {
      id: 5,
      title: "International Cooperative Alliance (ICA) Regional Bulletin Volume 22 Spotlight on Mulkanoor Cooperative’s Story of Self-Reliance and Rural Upliftment.",
      date: "January 1982",
      pdfFile: "https://drive.google.com/file/d/1rK-RuIStA2k6-KLaoeAZ-Om2j9z8P-YG/view?usp=sharing",
      thumbnail: thum5,
    },
    {
      id: 6,
      title: "Mulkanoor Cooperative Society’s Socio-Economic Impact on Farmers Spotlighted in the Esteemed publication ‘Agriculture Today.",
      date: "July 2014",
      pdfFile: "https://drive.google.com/file/d/1r2hQUFgnIIkEOgl7SBhlmaXncBeLZOsw/view?usp=sharing",
      thumbnail: thum6,
    },
    {
      id: 7,
      title: "Mulkanoor Cooperative society to the rescue of drought-ridden villages in Karimnagar- Article featured on THE HINDU.",
      date: "May-2016",
      author: "Ramesh Kumar",
      pdfFile: "https://drive.google.com/file/d/1QJ361EZLMIcoiF7HEv1DuxyUcN4WzyHB/view?usp=sharing",
      thumbnail: thum7,
    },
    {
      id: 8,
      title: "Mulkanoor Cooperative Society’s impact on the agrarian community- Article featured on RURAL MODELS.",
      date: "November 19th",
      pdfFile: "https://drive.google.com/file/d/1hE-eqDvcW0QZNmS7c82Gfv9d_geHKoQP/view?usp=sharing",
      thumbnail: thum8,
    },
  ];

  // Handler for opening PDF preview
  const openPdfPreview = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Handler for closing PDF preview
  const closePdfPreview = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handler for direct PDF download
  const downloadPdf = (e, pdfFile) => {
    e.stopPropagation(); // Prevent triggering the card click event
    // Logic for direct download - this is a placeholder
    // In a real implementation, you would trigger the download
    window.open(pdfFile, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50/40 pt-24 pb-12">
      <Helmet>
        <title>Research Articles - Mulkanoor Cooperative Society</title>
        <meta 
          name="description" 
          content="Access research articles and publications about Mulkanoor Cooperative Society's agricultural practices, economic impact, and rural development initiatives."
        />
        <meta
          name="keywords"
          content="Mulkanoor research, agricultural publications, cooperative farming research, rural development studies, sustainable agriculture papers"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">Research Articles</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore academic publications, research papers, and in-depth articles about Mulkanoor Cooperative Society's 
            innovative approaches to agricultural development and rural prosperity.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              onClick={(e) => downloadPdf(e, article.pdfFile)}
            >
              {/* PDF Icon & Thumbnail Area */}
              <div className="relative bg-green-50 p-2 flex items-center justify-center h-48 overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-xs font-medium z-10">
                  PDF
                </div>
                <img 
                  src={article.thumbnail} 
                  alt={article.title} 
                  className="object-contain h-full w-full" 
                />
              </div>

              {/* Article Info */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="mb-2">
                  <span className="text-xs text-green-700 font-medium">
                    {article.date} • {article.author}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600 flex-1">{article.description}</p>
                
                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                  <button 
                    className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                    onClick={(e) => downloadPdf(e, article.pdfFile)}
                  >
                    <FaDownload className="text-xs" /> Download PDF
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 p-4 flex items-center justify-center backdrop-blur-sm"
            onClick={closePdfPreview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-lg w-full max-w-5xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-green-800">{selectedArticle.title}</h3>
                  <p className="text-sm text-gray-600">
                    {selectedArticle.date} • {selectedArticle.author}
                  </p>
                </div>
                <button
                  className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition-colors"
                  onClick={closePdfPreview}
                >
                  <FaTimes />
                </button>
              </div>
              
              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={`${selectedArticle.pdfFile}#toolbar=0&navpanes=0`}
                  title={selectedArticle.title}
                  className="w-full h-full border-none"
                ></iframe>
              </div>
              
              {/* Modal Footer */}
              <div className="p-4 border-t border-gray-200 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Use the download button to save this article for offline reading.
                </p>
                <button 
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  onClick={(e) => downloadPdf(e, selectedArticle.pdfFile)}
                >
                  <FaDownload /> Download PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Additional divider */}
      <div className="container mx-auto mt-16">
        <div className="w-full border-t border-gray-200"></div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">New research articles are regularly published. Check back for updates.</p>
        </div>
      </div>
    </div>
  );
};

export default Articeles;