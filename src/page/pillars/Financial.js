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
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Hero Section - Using the banner image */}
      <div className="relative">
        <div className="absolute inset-0">
          <img 
            src={banner} 
            alt="Financial Services Banner" 
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div> */}
        </div>
        <div className="relative bg-transparent text-white py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans">
              Agricultural Financial Services
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Institutional lending solutions for modern farming operations
            </p>
          </div>
        </div>
      </div>

      {/* Seasonal Crop Loans Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex items-center mb-8">
            <FaSeedling className="w-12 h-12 text-blue-900 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Seasonal Crop Loans</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">The society provides seasonal agricultural crop loans for both Kharif and Rabi seasons every year.</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3"></span>
                  Currently, farmers can avail crop loans of ₹24,000 per acre, with a maximum limit of 10 acres (₹2,40,000) at an interest rate of 7% per annum. Additionally, both the State and Central Governments offer a Zero-Interest Scheme for farmers who repay their crop loans on time. 
                </li>
              <h3 className="text-lg font-semibold mb-4 text-blue-900">Under this scheme</h3>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3"></span>
                   For crop loans up to ₹1 lakh, the State Government provides a 4% interest subvention, while the Central Government provides 3%, making the loan completely interest-free.
                </li>
    <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3"></span>
                  For crop loans above ₹1 lakh and up to ₹3 lakhs, the State Government provides a 1% subvention, and the Central Government provides 3%, significantly reducing the interest burden on farmers.
                </li>
              </ul>
              {/* Adding the onesideimg here */}
              <div className="mt-6">
                <img 
                  src={onesideimg} 
                  alt="Crop Loan Services" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Zero-Interest Scheme</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Up to ₹1 lakh</h4>
                  <p className="text-sm text-gray-600">
                    4% State + 3% Central subvention = 0% interest
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">₹1-3 lakhs</h4>
                  <p className="text-sm text-gray-600">
                    1% State + 3% Central subvention = 3% effective interest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Financial Services Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={cardone} alt="Financial Service 1" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src={cardtwo} alt="Financial Service 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src={card3} alt="Financial Service 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src={card4} alt="Financial Service 4" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
        </div>

        {/* Medium Term Loans Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex items-center mb-8">
            <FaTools className="w-12 h-12 text-blue-900 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Medium Term Loans</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
                icon: <FaWater className="w-8 h-8 text-blue-900 mb-2" />,
                title: "Agricultural Implements & Irrigation",
                items: [" Loans for minor irrigation purposes", "well digging, electric motors", "pipelines"," drip irrigation","sprinklers"]
              },
              {
                icon: <FaTractor className="w-8 h-8 text-blue-900 mb-2" />,
                title: "Farm Machinery",
                items: ["Support for purchasing equipment such as maize shellers", "Rotovators", "Tractor trailers"]
              },
              {
                icon: <FaTree className="w-8 h-8 text-blue-900 mb-2" />,
                title: "Agri-Allied Activities",
                items: [" Financial assistance for dairy farming", " sheep rearing", "horticulture crops","sericulture"]
              },
              {
                icon: <FaHandHoldingHeart className="w-8 h-8 text-blue-900 mb-2" />,
                title: "Welfare Activities",
                items: ["Loans for constructing toilets", " purchasing solar lanterns", "LPG gas connections"]
              }
            ].map((card, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6">
                {card.icon}
                <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Long-Term & General Loans Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaTractor className="w-10 h-10 text-blue-900 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Long-Term Loans</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3"></span>
                These loans are also available for purchasing tractors, harvesters, paddy plantation machines, and for establishing citrus and mango orchards, with a gestation period of 5 years.
              </li>
              {/* <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3"></span>
                Paddy Plantation Machines
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3"></span>
                Citrus/Mango Orchards Development
              </li> */}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaHouseUser className="w-10 h-10 text-blue-900 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">General Term Loans</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{
                  icon: "🏥",
                  title: "Medical",
                  items: ["Emergency care", "Hospitalization"]
                },
                {
                  icon: "🎓",
                  title: "Education",
                  items: ["School fees", "Higher studies"]
                },
                {
                  icon: "💒",
                  title: "Marriage",
                  items: ["Ceremony costs", "Family events"]
                },
                {
                  icon: "🏠",
                  title: "Housing",
                  items: ["Construction", "Renovation"]
                }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <ul className="text-sm text-gray-600">
                    {item.items.map((sub, idx) => (
                      <li key={idx}>{sub}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Existing CTA Section with Banner Background */}
      <div className="relative">
        <div className="absolute inset-0">
          <img 
            src={banner} 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div> */}
        </div>
        <div className="relative py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Partner with Agricultural Financial Experts
            </h2>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;