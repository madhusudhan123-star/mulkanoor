import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Videos = () => {
  // Featured videos from YouTube
  const featuredVideos = [
    {
      id: 1,
      title: "Mulkanoor Cooperative Society - Our Journey",
      description: "Learn about the history and impact of Mulkanoor Cooperative Society on local farming communities and rural development.",
      embedUrl: "https://www.youtube.com/embed/6cA5lgAGJJ0", // Corrected embed URL
      thumbnailUrl: "https://img.youtube.com/vi/6cA5lgAGJJ0/maxresdefault.jpg"
    },
    {
      id: 2,
      title: "Sustainable Agricultural Practices at Mulkanoor",
      description: "Explore the innovative agricultural techniques and sustainable farming practices implemented by our cooperative members.",
      embedUrl: "https://www.youtube.com/embed/gD-XybQhWSc", // Corrected embed URL
      thumbnailUrl: "https://img.youtube.com/vi/gD-XybQhWSc/maxresdefault.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 pt-24 pb-16">
      <Helmet>
        <title>Featured Videos - Mulkanoor Cooperative Society</title>
        <meta 
          name="description" 
          content="Watch videos showcasing Mulkanoor Cooperative Society's initiatives, success stories, and impact on farming communities."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Featured Videos</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Watch these videos to learn more about our cooperative's mission, 
            achievements, and the positive impact we're making in rural communities.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>
      </div>

      {/* Videos Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-transparent rounded-xl overflow-hidden"
            >
              {/* Video Player */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-64 md:h-80 lg:h-96"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Channel</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our YouTube channel to stay updated with our latest videos, 
            farmer success stories, and agricultural innovations.
          </p>
          <a 
            href="https://www.youtube.com/@mcrcmslimited3433" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-slate-800 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors"
          >
            <svg className="w-6 h-6 mr-2 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            YouTube Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videos;