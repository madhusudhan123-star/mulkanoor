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
    <div className="bg-gray-50 mt-16 md:mt-20">
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
      <div className="relative h-[200px] md:h-[250px] lg:h-[300px]">
        <div className="absolute inset-0">
          <img 
            src={banner} 
            alt="Financial Services Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/50"></div>
        </div>
        <div className="relative container mx-auto px-4 md:px-6 py-8 md:py-16 lg:py-24">
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-6 text-white">
              Agricultural Financial Services
            </h1>
            <p className="text-sm md:text-lg lg:text-xl cursor-default text-white max-w-2xl">
              100% recovery of our loans display ownership by members.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        {/* Seasonal Crop Loans Section */}
        <div className="rounded-lg p-4 md:p-6 lg:p-8 mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center mb-6 md:mb-8">
            <FaSeedling className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-blue-700 mr-3 md:mr-4" />
            <h2 className="text-xl md:text-2xl lg:text-3xl cursor-default font-bold text-gray-900">Seasonal Agricultural loans</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1">
              <ul className="space-y-3 md:space-y-4">
                <li className="flex cursor-default items-start">
                  <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Our member farmers can avail up to 40000/ acre with a maximum capping of 5 lakh @7% ROI per annum.</span>
                </li>
                <li className="flex cursor-default items-start">
                  <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Farmers who repay these loans on time are eligible for 3% interest subvention under the modified interest subvention scheme of GOI.</span>
                </li>
              </ul>
            </div>
            
            <div className='flex justify-center lg:justify-end'>
              <img 
                src={onesideimg} 
                alt="Crop Loan Services" 
                className="w-full max-w-sm lg:w-[70%] rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Medium Term Loans Section */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 mb-8 md:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 md:mb-8">
            <FaTools className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-green-700 mr-0 sm:mr-4 mb-3 sm:mb-0" />
            <div className='flex flex-col'>
              <h2 className="text-xl md:text-2xl lg:text-3xl cursor-default font-bold text-gray-900">Medium Term Loans</h2>
              <p className="text-sm md:text-base mt-1 md:mt-2">These loans are repaid in 3 years with 6 half yearly installments at ROI @10% per annum.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            {[{
                icon: <FaTractor className="w-6 h-6 md:w-8 md:h-8 text-green-700 mb-2" />,
                title: "Farm Machinery",
                items: ["Balers", "Rotovators", "Power Sprayers", "Power Tillers", "Tractor Trailer", "Tanker", "Level Blade", "Chaff Cutter", "Power Weeder"]
              },
              {
                icon: <FaWater className="w-6 h-6 md:w-8 md:h-8 text-green-700 mb-2" />,
                title: "Irrigation Solutions",
                items: ["Digging of wells", "well ring construction", "Electric Pump Sets", "Pipe Lines", "Drip Irrigation System", "Sprinkler Irrigation System"]
              },
              {
                icon: <FaTree className="w-6 h-6 md:w-8 md:h-8 text-green-700 mb-2" />,
                title: "Agri-Allied Activities",
                items: ["Dairy", "Poultry", "Sheep rearing", "Mango", "Citrus", "Papaya", "Sericulture", "Green House","Milking Machines"]
              },
              {
                icon: <FaHandHoldingHeart className="w-6 h-6 md:w-8 md:h-8 text-green-700 mb-2" />,
                title: "Welfare Activities",
                items: ["Construction of Toilets", "LPG gas connections", "Rooftop Solar Systems", "Solar Fencing"]
              }
            ].map((card, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-4 md:p-6">
                {card.icon}
                <h3 className="text-base md:text-lg cursor-default font-semibold mb-2 md:mb-3">{card.title}</h3>
                <ul className="space-y-1 md:space-y-2">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex cursor-default items-start">
                      <span className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1.5 md:mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-700 cursor-default text-xs md:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Long-Term Loans */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 mb-4">
          <div className="flex items-center mb-4 md:mb-6">
            <FaTractor className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-blue-700 mr-3 md:mr-4" />
            <h2 className="text-xl md:text-2xl cursor-default font-bold text-gray-900">Long-Term Loans</h2>
          </div>
          <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 cursor-default text-sm md:text-base">These loans are repaid in 7 years with 14 half yearly installments at ROI @10% per annum.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 cursor-default text-sm md:text-base">Majorly issued for tractors, harvesters and rice transplanters.</span>
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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

        {/* General Term Loans */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
          <div className="flex flex-col items-start mb-4 md:mb-6">
            <div className="flex items-center mb-4 md:mb-6">
              <FaHouseUser className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-blue-700 mr-3 md:mr-4" />
              <h2 className="text-xl md:text-2xl cursor-default font-bold text-gray-900">General-Term loans</h2>
            </div>
            <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 cursor-default text-sm md:text-base">These loans are repaid in 3-5 years with 6-10 half yearly installments at ROI @12% per annum.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 cursor-default text-sm md:text-base">These loans are issued for hospitalization, children higher education, marriages, construction of house.</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              {
                icon: card7,
                title: "Emergency Hospitalization support",
              },
              {
                icon: card8,
                title: "Higher Education",
              },
              {
                icon: card9,
                title: "Community Celebrations",
              },
              {
                icon: card10,
                title: "Housing",
              }
            ].map((item, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-3 md:p-4">
                <img src={item.icon} alt={item.title} className="w-full h-auto mb-2" />
                <h3 className="font-medium cursor-default text-xs md:text-sm lg:text-base text-center">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;