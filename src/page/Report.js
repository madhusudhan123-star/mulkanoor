import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaFilePdf, FaDownload, FaChartLine, FaFileAlt, FaTimes } from 'react-icons/fa';

const Report = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  
  // Annual reports data
  const reports = [
    {
      id: 1,
      year: "2021-22",
      title: "Annual Report 2021-22",
      description: "Financial performance and operational highlights of Mulkanoor Cooperative Society for the year 2021-22.",
      pdfFile: "https://drive.google.com/file/d/1osaJ5TPGI1V-qozH16k9C_bw-uxQMjdI/view?usp=sharing",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      year: "2022-23",
      title: "Annual Report 2022-23",
      description: "Key achievements, financial statements, and strategic initiatives undertaken by Mulkanoor Cooperative Society during 2022-23.",
      pdfFile: "https://drive.google.com/file/d/1s1aX3EEsBrEMpkI7rQ326KdGcqGwoHUS/view?usp=sharing",
      color: "from-green-500 to-green-700",
    },
    {
      id: 3,
      year: "2023-24",
      title: "Annual Report 2023-24",
      description: "Comprehensive overview of operations, governance, and financial performance of Mulkanoor Cooperative Society for 2023-24.",
      pdfFile: "https://drive.google.com/file/d/12o5Q4Gy5uJQKZ2FgML9pCokLDTZML8G8/view?usp=sharing",
      color: "from-purple-500 to-purple-700",
    }
  ];

  // Handler for direct PDF download
  const downloadPdf = (e, pdfFile) => {
    e.stopPropagation();
    window.open(pdfFile, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24 pb-16">
      <Helmet>
        <title>Annual Reports - Mulkanoor Cooperative Society</title>
        <meta 
          name="description" 
          content="View and download annual reports of Mulkanoor Cooperative Society detailing our financial performance, operational highlights, and strategic initiatives." 
        />
      </Helmet>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-slate-800 mb-6"
          >
            Annual Reports
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-slate-600 mb-8">
              Explore our comprehensive annual reports that highlight our financial performance, 
              impact on the farming community, and strategic initiatives for sustainable growth.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Reports Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Report Header with Year */}
              <div className={`bg-gradient-to-r ${report.color} p-6 relative`}>
                <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-bl-xl font-bold">
                  {report.year}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <FaFileAlt className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{report.title}</h3>
                </div>
              </div>

              {/* Report Description */}
              <div className="p-6">
                <p className="text-slate-600 mb-6">{report.description}</p>
                
                {/* Action buttons */}
                <div className="flex items-center justify-between">
                  <button 
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-colors shadow-md"
                    onClick={(e) => downloadPdf(e, report.pdfFile)}
                  >
                    <FaDownload /> Download
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Report;


    //   {/* Information Section */}
    //   <div className="container mx-auto px-4">
    //     <div className="bg-white rounded-xl p-8 shadow-lg">
    //       <div className="flex flex-col md:flex-row items-center justify-between">
    //         <div className="md:w-2/3 mb-6 md:mb-0">
    //           <h2 className="text-2xl font-bold text-slate-800 mb-4">Understanding Our Annual Reports</h2>
    //           <p className="text-slate-600">
    //             Our annual reports provide transparency into our operations, financial health, 
    //             and impact in the agricultural sector. They include audited financial statements, 
    //             key achievements, challenges, and our strategic vision for the future.
    //           </p>
    //           <ul className="mt-4 space-y-2">
    //             <li className="flex items-center text-slate-600">
    //               <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
    //               Comprehensive financial statements and audit reports
    //             </li>
    //             <li className="flex items-center text-slate-600">
    //               <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
    //               Operational highlights and major milestones
    //             </li>
    //             <li className="flex items-center text-slate-600">
    //               <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
    //               Future plans and strategic initiatives
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-slate-100">
    //           <div className="text-center mb-4">
    //             <FaFilePdf className="text-4xl text-green-600 mx-auto mb-2" />
    //             <h3 className="text-lg font-semibold text-slate-800">Need an older report?</h3>
    //           </div>
    //           <p className="text-sm text-slate-600 mb-4">
    //             Looking for reports from previous years? Contact our administrative office for access to our archive.
    //           </p>
    //           <button className="w-full bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-700 transition-colors">
    //             Contact for Archives
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* PDF Preview Modal */}
    //   <AnimatePresence>
    //     {selectedReport && (
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         className="fixed inset-0 bg-black/80 z-50 p-4 flex items-center justify-center backdrop-blur-sm"
    //         onClick={closePdfPreview}
    //       >
    //         <motion.div
    //           initial={{ scale: 0.9, opacity: 0 }}
    //           animate={{ scale: 1, opacity: 1 }}
    //           exit={{ scale: 0.9, opacity: 0 }}
    //           className="relative bg-white rounded-lg w-full max-w-6xl max-h-[90vh] flex flex-col"
    //           onClick={(e) => e.stopPropagation()}
    //         >
    //           {/* Modal Header */}
    //           <div className="p-4 border-b border-gray-200 flex justify-between items-center">
    //             <div>
    //               <h3 className="text-xl font-bold text-slate-800">{selectedReport.title}</h3>
    //               <p className="text-sm text-slate-600">Financial Year: {selectedReport.year}</p>
    //             </div>
    //             <button
    //               className="bg-slate-200 text-slate-800 p-2 rounded-full hover:bg-slate-300 transition-colors"
    //               onClick={closePdfPreview}
    //             >
    //               <FaTimes />
    //             </button>
    //           </div>
              
    //           {/* PDF Viewer */}
    //           <div className="flex-1 overflow-hidden">
    //             <iframe
    //               src={`${selectedReport.pdfFile}#toolbar=0&navpanes=0`}
    //               title={selectedReport.title}
    //               className="w-full h-full border-none"
    //             ></iframe>
    //           </div>
              
    //           {/* Modal Footer */}
    //           <div className="p-4 border-t border-gray-200 flex justify-between items-center">
    //             <p className="text-sm text-slate-600">
    //               Review key financial data and operational highlights for {selectedReport.year}.
    //             </p>
    //             <button 
    //               className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
    //               onClick={(e) => downloadPdf(e, selectedReport.pdfFile)}
    //             >
    //               <FaDownload /> Download PDF
    //             </button>
    //           </div>
    //         </motion.div>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>