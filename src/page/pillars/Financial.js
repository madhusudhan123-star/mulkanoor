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
import { Helmet } from 'react-helmet'
// Add the image imports
import onesideimg from '../../assets/financial/onesideimg.jpg';
import cardone from '../../assets/financial/card1.jpg';
import cardtwo from '../../assets/financial/card2.jpg';
import banner from '../../assets/financial/banner.jpg';
import card3 from '../../assets/financial/card3.jpg';
import card4 from '../../assets/financial/card4.jpg';
import card5 from '../../assets/financial/card5.png';
import card6 from '../../assets/financial/card6.png';
import card7 from '../../assets/financial/card1.png';
import card8 from '../../assets/financial/card2.png';
import card9 from '../../assets/financial/card3.png';
import card10 from '../../assets/financial/card4.png';

const Financial = () => {
  return (
    <div className="bg-gray-50 mt-20">
      <Helmet>
        <title>Agricultural Financial Services - Mulkanoor Cooperative Society</title>
        <meta 
          name="description" 
          content="Access affordable agricultural loans including crop loans up to ₹2,40,000, zero-interest schemes, and specialized financing for farm machinery, irrigation, and welfare activities."
        />
        <meta
          name="keywords"
          content="agricultural loans, crop loans, farm financing, zero interest loans, agricultural credit, rural banking, farmer loans"
        />
        <meta 
          property="og:title" 
          content="Agricultural Financial Services - Mulkanoor Cooperative Society" 
        />
        <meta 
          property="og:description" 
          content="Comprehensive financial solutions for farmers including seasonal crop loans, medium-term loans, and welfare schemes." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Mulkanoor Agricultural Financial Services",
            "description": "Comprehensive agricultural financing solutions for farmers",
            "provider": {
              "@type": "Organization",
              "name": "Mulkanoor Cooperative Society"
            },
            "areaServed": "Telangana",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Agricultural Loans",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Seasonal Crop Loans",
                  "description": "Up to ₹24,000 per acre with zero interest scheme"
                },
                {
                  "@type": "Offer",
                  "name": "Medium Term Loans",
                  "description": "For irrigation, farm machinery, and allied activities"
                },
                {
                  "@type": "Offer",
                  "name": "Long Term Loans",
                  "description": "For tractors, harvesters, and orchard establishment"
                }
              ]
            }
          })}
        </script>
      </Helmet>
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
            <h1 className="text-4xl cursor-default md:text-5xl font-bold mb-6 text-white">
              Agricultural Financial Services
            </h1>
            <p className="text-xl cursor-default text-white max-w-2xl">
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
            <h2 className="text-3xl cursor-default font-bold text-gray-900">Seasonal Crop Loans</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl cursor-default font-semibold mb-4 text-blue-800">
                Supporting both Kharif and Rabi seasons
              </h3>
              <ul className="space-y-4">
                <li className="flex cursor-default items-start">
                  <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
                  <span>Currently, farmers can avail crop loans of ₹ 40,000 per acre, with a maximum limit of Rs 5 Lakh with an interest rate of 7% per annum</span>
                </li>
                <li className="flex cursor-default items-start">
                  <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
                  <span> Under the Modified Interest Subvention Scheme, farmers who repay their loans on time are eligible for a 3% interest subvention from the Central Government.</span>
                </li>
              </ul>
              
              {/* <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h4 className="text-lg cursor-default font-semibold mb-3">Zero-Interest Scheme</h4>
                <ul className="space-y-3">
                  <li className="flex cursor-default items-start">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
                    <span>For crop loans up to ₹1 lakh: 4% State + 3% Central subvention = 0% interest</span>
                  </li>
                  <li className="flex cursor-default items-start">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
                    <span>For crop loans between ₹1-3 lakhs: 1% State + 3% Central subvention = 3% effective interest</span>
                  </li>
                </ul>
              </div> */}
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
            <FaTools className="w-10 h-10 text-green-700 mr-4" />
            <div className='flex flex-col'>
              <h2 className="text-3xl cursor-default font-bold text-gray-900">Medium Term Loans</h2>
              <p>The loan is to be repaid within 3 years at an interest rate of 10% per annum, with each crop cutting season considered as one instalment.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
                icon: <FaWater className="w-8 h-8 text-green-700 mb-2" />,
                title: "Irrigation Solutions",
                items: ["Minor irrigation projects", "Well digging & electric motors", "Pipelines", "Drip irrigation", "Sprinklers"]
              },
              {
                icon: <FaTractor className="w-8 h-8 text-green-700 mb-2" />,
                title: "Farm Machinery",
                items: ["Maize shellers", "Rotovators", "Tractor trailers", "Modern implements"]
              },
              {
                icon: <FaTree className="w-8 h-8 text-green-700 mb-2" />,
                title: "Agri-Allied Activities",
                items: ["Dairy farming", "Sheep rearing", "Horticulture crops", "Sericulture"]
              },
              {
                icon: <FaHandHoldingHeart className="w-8 h-8 text-green-700 mb-2" />,
                title: "Welfare Activities",
                items: ["Toilet construction", "Solar lanterns", "LPG gas connections", "Community infrastructure"]
              }
            ].map((card, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6">
                {card.icon}
                <h3 className="text-lg cursor-default font-semibold mb-3">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex cursor-default items-start">
                      <span className="w-1.5 h-1.5 bg-green-700 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700 cursor-default">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Long-Term */}
          <div className="">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <FaTractor className="w-10 h-10 text-blue-700 mr-4" />
                <h2 className="text-2xl cursor-default font-bold text-gray-900">Long-Term Loans</h2>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
            <span className="text-gray-700 cursor-default">Long-term loans are to be repaid within 7 years at an interest rate of 10% per annum.</span>
                </li>
                <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span>
            <span className="text-gray-700 cursor-default">Financing for tractors, harvesters, and paddy plantation machines</span>
                </li>
              </ul>
              <div className="grid grid-cols-2 gap-4">
                <img 
            src={card5} 
            alt="Long-Term Loan Illustration" 
            className="w-full h-auto rounded-lg shadow-md"
                />
                <img 
            src={card6} 
            alt="Long-Term Loan Illustration" 
            className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

            {/* General Term Loans */}
          <div className="bg-white rounded-lg shadow-md mt-4 p-8">
            <div className="flex items-center mb-6">
              <FaHouseUser className="w-10 h-10 text-green-700 mr-4" />
              <h2 className="text-2xl cursor-default font-bold text-gray-900">General Term Loans</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                {
                  icon: card7,
                  title: "Emergency Hospitalization support",
                },
                {
                  icon: card8,
                  title: "Higher Education",
                  items: ["School fees", "Higher education", "Skill development"]
                },
                {
                  icon: card9,
                  title: "Community Celebrations",
                  items: ["Ceremony expenses", "Family events", "Community celebrations"]
                },
                {
                  icon: card10,
                  title: "Housing",
                  items: ["Construction", "Renovation", "Infrastructure improvement"]
                }
              ].map((item, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <img src={item.icon} />
                  <h3 className="font-medium cursor-default mb-2">{item.title}</h3>
                </div>
              ))}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Financial;