import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import card1 from '../../assets/media/card1.jpg'
import card2 from '../../assets/media/card2.jpg'
import card3 from '../../assets/media/card3.jpg'
import card4 from '../../assets/media/card4.jpg'
import card5 from '../../assets/media/card5.jpg'
import card6 from '../../assets/media/card6.jpg'
import card7 from '../../assets/media/card7.jpg'
import card8 from '../../assets/media/card8.jpg'
import card9 from '../../assets/media/card9.jpg'
import card10 from '../../assets/media/card10.jpg'
import card11 from '../../assets/media/card11.jpg'
import card12 from '../../assets/media/card12.jpg'
import card13 from '../../assets/media/card13.jpg'
import card14 from '../../assets/media/card14.jpg'
import card15 from '../../assets/media/card15.jpg'
import card16 from '../../assets/media/card16.jpg'
import card17 from '../../assets/media/card17.jpg'
import card18 from '../../assets/media/card18.jpg'
import card19 from '../../assets/media/card19.jpg'
import card20 from '../../assets/media/card20.jpeg'
import card21 from '../../assets/media/card21.jpeg'
import card22 from '../../assets/media/card22.jpeg'
import card23 from '../../assets/media/card23.jpeg'
import card24 from '../../assets/media/card24.jpeg'
import card25 from '../../assets/media/card25.jpeg'
import card26 from '../../assets/media/card26.png'
import card27 from '../../assets/media/card27.png'
import card28 from '../../assets/media/card28.png'
import card29 from '../../assets/media/card29.png'
import card30 from '../../assets/media/card30.png'
import card31 from '../../assets/media/card31.png'
import card32 from '../../assets/media/card32.png'
import card33 from '../../assets/media/card33.png'
import card34 from '../../assets/media/card34.png'
import card35 from '../../assets/media/card35.png'
import card36 from '../../assets/media/card36.png'
import card37 from '../../assets/media/card37.png'
import card38 from '../../assets/media/card38.png'
import card39 from '../../assets/media/card39.jpeg'
import card40 from '../../assets/media/card40.png'
import card41 from '../../assets/media/card41.png'
import card42 from '../../assets/media/card42.png'
import card43 from '../../assets/media/card43.png'
import card44 from '../../assets/media/card44.png'
import card45 from '../../assets/media/card45.png'
import card46 from '../../assets/media/card46.png'
import card47 from '../../assets/media/card47.png'
import card48 from '../../assets/media/card48.png'
import card49 from '../../assets/media/card49.png'
import card50 from '../../assets/media/card50.png'
import card51 from '../../assets/media/card51.png'
import card52 from '../../assets/media/card52.png'
import card53 from '../../assets/media/card53.png'
import card54 from '../../assets/media/card54.png'
import card55 from '../../assets/media/card55.png'
import card56 from '../../assets/media/card56.png'
import card57 from '../../assets/media/card57.png'
import card58 from '../../assets/media/card58.png'
import card59 from '../../assets/media/card59.png'
import card60 from '../../assets/media/card60.png'
import card61 from '../../assets/media/card61.png'
import card62 from '../../assets/media/card62.png'
import card63 from '../../assets/media/card63.png'
import card64 from '../../assets/media/card64.png'
import card65 from '../../assets/media/card65.png'
import card66 from '../../assets/media/card66.png'
import card67 from '../../assets/media/card67.png'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Create an array of all the imported images
  const images = [
    card1, card2, card3, card4, card5, card6, card7, card8, card9, card10,
    card11, card12, card13, card14, card15, card16, card17, card18, card19, card20,
    card21, card22, card23, card24, card25, card26, card27, card28, card29, card30,
    card31, card32, card33, card34, card35, card36, card37, card38, card39, card40,
    card41, card42, card43, card44, card45, card46, card47, card48, card49, card50,
    card51, card52, card53, card54, card55, card56, card57, card58, card59, card60,
    card61, card62, card63, card64, card65, card66, card67
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="p-5 max-w-7xl md:mt-20 mt-0 mx-auto">
      <Helmet>
        <title>Media Gallery - Mulkanoor Cooperative Society</title>
        <meta 
          name="description" 
          content="Explore our media gallery showcasing Mulkanoor Cooperative Society's journey, achievements, and community impact through a collection of photographs and memorable moments."
        />
      </Helmet>
      <h1 className="text-center my-5 text-gray-800 cursor-default text-3xl font-bold">Media Center</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(image)}
          >
            <img 
              src={image} 
              alt={`Gallery item ${index + 1}`} 
              className="w-full h-48 object-cover block"
            />
          </div>
        ))}
      </div>

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              className="absolute top-0 right-0  -mr-12 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-h-[90vh] max-w-full mx-auto object-contain"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery