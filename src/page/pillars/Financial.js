import React from 'react';
import { 
  FaTractor, 
  FaSeedling, 
  FaWater, 
  FaTools,
  FaSchool, 
  FaHouseUser,
  FaTree,
  FaHandHoldingHeart
} from 'react-icons/fa';

// Add the image imports
import onesideimg from '../../assets/financial/onesideimg.jpg';
import cardone from '../../assets/financial/card1.jpg';
import cardtwo from '../../assets/financial/card2.jpg';
import banner from '../../assets/financial/banner.jpg';
import card3 from '../../assets/financial/card3.jpg';
import card4 from '../../assets/financial/card4.jpg';

const Financial = () => {
  return (
    <div className="bg-gray-50 mt-20">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img 
            src={banner} 
            alt="Financial Services Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/50"></div>
        </div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Agricultural Financial Services
            </h1>
            <p className="text-xl text-white max-w-2xl">
              Empowering farmers with institutional lending solutions for modern farming operations
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Seasonal Crop Loans Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex items-center mb-8">
            <FaSeedling className="w-10 h-10 text-blue-700 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Seasonal Crop Loans</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Supporting both Kharif and Rabi seasons
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
                  <span>Currently, farmers can avail crop loans of ₹24,000 per acre, with a maximum limit of 10 acres (₹2,40,000) at an interest rate of 7% per annum.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
                  <span>Both the State and Central Governments offer a Zero-Interest Scheme for farmers who repay their crop loans on time.</span>
                </li>
              </ul>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h4 className="text-lg font-semibold mb-3">Zero-Interest Scheme</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
                    <span>For crop loans up to ₹1 lakh: 4% State + 3% Central subvention = 0% interest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
                    <span>For crop loans between ₹1-3 lakhs: 1% State + 3% Central subvention = 3% effective interest</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <img 
                src={onesideimg} 
                alt="Crop Loan Services" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Medium Term Loans Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex items-center mb-8">
            <FaTools className="w-10 h-10 text-blue-700 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Medium Term Loans</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
                icon: <FaWater className="w-8 h-8 text-blue-700 mb-2" />,
                title: "Irrigation Solutions",
                items: ["Minor irrigation projects", "Well digging & electric motors", "Pipelines", "Drip irrigation", "Sprinklers"]
              },
              {
                icon: <FaTractor className="w-8 h-8 text-blue-700 mb-2" />,
                title: "Farm Machinery",
                items: ["Maize shellers", "Rotovators", "Tractor trailers", "Modern implements"]
              },
              {
                icon: <FaTree className="w-8 h-8 text-blue-700 mb-2" />,
                title: "Agri-Allied Activities",
                items: ["Dairy farming", "Sheep rearing", "Horticulture crops", "Sericulture"]
              },
              {
                icon: <FaHandHoldingHeart className="w-8 h-8 text-blue-700 mb-2" />,
                title: "Welfare Activities",
                items: ["Toilet construction", "Solar lanterns", "LPG gas connections", "Community infrastructure"]
              }
            ].map((card, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6">
                {card.icon}
                <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Long-Term & General Loans Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <FaTractor className="w-10 h-10 text-blue-700 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Long-Term Loans</h2>
            </div>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">Financing for tractors, harvesters, and paddy plantation machines</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">Establishment of citrus and mango orchards with 5-year gestation period</span>
              </li>
            </ul>
            <img 
              src={cardone} 
              alt="Long-Term Loan Illustration" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <FaHouseUser className="w-10 h-10 text-blue-700 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">General Term Loans</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{
                  icon: "🏥",
                  title: "Medical",
                  items: ["Emergency care", "Hospitalization", "Treatment"]
                },
                {
                  icon: "🎓",
                  title: "Education",
                  items: ["School fees", "Higher education", "Skill development"]
                },
                {
                  icon: "💒",
                  title: "Marriage",
                  items: ["Ceremony expenses", "Family events", "Community celebrations"]
                },
                {
                  icon: "🏠",
                  title: "Housing",
                  items: ["Construction", "Renovation", "Infrastructure improvement"]
                }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <ul className="text-sm text-gray-600">
                    {item.items.map((sub, idx) => (
                      <li key={idx} className="mb-1">{sub}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;