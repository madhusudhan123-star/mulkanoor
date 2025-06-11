import React from 'react';
import { FaSeedling, FaTractor, FaLeaf, FaBalanceScale, FaHandHoldingHeart } from 'react-icons/fa';
import { GiGrain, GiPlantRoots, GiTreeBranch } from 'react-icons/gi';
import { BsPeopleFill } from 'react-icons/bs';
import vision from '../../assets/vision/vision.jpg';
import { Helmet } from 'react-helmet'
import card from '../../assets/vision/card.jpg'
const Mission = () => {
    const coreValues = [
      { 
        icon: <BsPeopleFill />, 
        title: "Farmer-Centric Approach", 
        description: "Prioritizing the needs and well-being of our farming community in every decision we make"
      },
    // ...other values
  ];
  return (
    <div className="min-h-screen bg-[#f8f5f0] font-custom">
      <Helmet>
        <title>Vision & Mission - Mulkanoor Cooperative Society</title>
        <meta 
          name="description" 
          content="Discover our commitment to uplift farmers through sustainable agriculture, democratic governance, and cooperative excellence. Learn about our vision, mission, and core values."
        />
        <meta
          name="keywords"
          content="cooperative vision, agricultural mission, farmer empowerment, sustainable farming, rural development, cooperative values"
        />
        <meta 
          property="og:title" 
          content="Vision & Mission - Mulkanoor Cooperative Society" 
        />
        <meta 
          property="og:description" 
          content="Building a sustainable future through cooperative excellence. Empowering farmers with dignity and economic prosperity." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mulkanoor Cooperative Society",
            "description": "A farmer-centric cooperative society promoting sustainable agriculture",
            "slogan": "Building a sustainable future through cooperative excellence",
            "mission": "Voluntary, Democratic, Accountable, Self Reliant Cooperative to ensure farmer control over Agricultural Production & Marketing",
            "vision": "To uplift the farmers from Poverty to a better socio-economic status and have a dignified life",
            "ethicsPolicy": {
              "@type": "CreativeWork",
              "name": "Core Values",
              "text": coreValues.map(value => ({
                "name": value.title,
                "description": value.description
              }))
            },
            "foundingDate": "1956",
            "image": vision,
            "award": [
              {
                "@type": "Award",
                "name": "Best Cooperative Society",
                "description": "Recognition for excellence in cooperative management"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Header spacing */}
      <div className="h-[1vh] md:h-[15vh] w-full"></div>
      
      {/* Hero Banner */}
      <section className="relative h-[300px] mb-16">
        <div className="absolute inset-0">
          <img src={vision} alt="Agricultural landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#3b6e46]/50"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl cursor-default md:text-6xl font-bold text-white mb-4">
              Vision & Mission
            </h1>
            <div className="w-24 h-1 bg-[#d6b670] mx-auto mb-4"></div>
            <p className="text-lg cursor-default md:text-xl text-white max-w-2xl mx-auto">
              Building a sustainable future through cooperative excellence
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        {/* Vision Section */}
        <section className="mb-16 md:mb-24">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Left content - Vision Statement */}
              <div className="md:w-1/2 p-8 md:p-12 bg-[#3b6e46] text-white">
                <div className="flex items-center mb-6">
                  <div className="mr-4 bg-white/20 p-3 rounded-full">
                    <FaSeedling className="text-2xl" />
                  </div>
                  <h2 className="text-3xl cursor-default md:text-4xl font-bold">Our Vision</h2>
                </div>
                
                <div className="mb-6 border-l-4 border-[#a9d18e] pl-4 ">
                    <ul className="list-disc pl-6 space-y-2 text-lg cursor-default">
                      <li>To stop migration of farmers to urban areas in search of work.</li>
                      <li>To uplift socio-economic status of farmers.</li>
                      <li>To ensure farmer control over agriculture production and marketing.</li>
                    </ul>
                    </div>
                    </div>

                    {/* Right content - Image */}
              <div className="md:w-1/2 h-64 md:h-auto">
                <img src={card} alt="Vision illustration" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="mb-16 md:mb-24">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex flex-row-reverse">
              {/* Left content - Mission Statement */}
              <div className="md:w-1/2 p-8 md:p-12 bg-[#d6b670]">
                <div className="flex items-center mb-6">
                  <div className="mr-4 bg-white/20 p-3 rounded-full">
                    <FaTractor className="text-2xl text-[#3b3d34]" />
                  </div>
                  <h2 className="text-3xl cursor-default md:text-4xl font-bold text-[#3b3d34]">Our Mission</h2>
                </div>
                
                <div className="mb-6 border-l-4 border-[#3b6e46] pl-4 ">
                  <p className="text-xl cursor-default md:text-2xl font-medium text-[#3b3d34]">
                    Voluntary, Democratic, Accountable, Self Reliant Cooperative to ensure farmer control over Agricultural Production & Marketing.
                  </p>
                </div>
              </div>
              
              {/* Right content - Image */}
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop" 
                  alt="Mission illustration" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl cursor-default md:text-4xl font-bold text-[#3b3d34] mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-[#d6b670] mx-auto mb-4"></div>
            <p className="max-w-2xl cursor-default mx-auto text-gray-600">
              The foundational principles that guide our cooperative's actions and decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <BsPeopleFill />, 
                title: "Farmer-Centric Approach", 
                description: "Prioritizing the needs and well-being of our farming community in every decision we make"
              },
              { 
                icon: <FaBalanceScale />, 
                title: "Democratic Governance", 
                description: "Ensuring equal voice and representation for all members in our cooperative's operations"
              },
              { 
                icon: <FaHandHoldingHeart />, 
                title: "Social Responsibility", 
                description: "Committed to creating positive impacts in the lives of farmers and rural communities"
              },
              { 
                icon: <GiTreeBranch />, 
                title: "Sustainable Practices", 
                description: "Promoting agricultural methods that respect our environment and preserve resources for future generations"
              },
              { 
                icon: <GiPlantRoots />, 
                title: "Innovation & Adaptation", 
                description: "Embracing new technologies and approaches to address evolving agricultural challenges"
              },
              { 
                icon: <GiGrain />, 
                title: "Quality & Excellence", 
                description: "Maintaining the highest standards in our products, services, and cooperative management"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md border-l-4 border-[#3b6e46]"
              >
                <div className="px-6 py-8">
                  <div className="mb-4 rounded-full bg-[#f0f4eb] text-[#3b6e46] p-3 inline-block">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl cursor-default font-semibold mb-3 text-[#3b3d34]">{value.title}</h3>
                  <p className="text-gray-600 cursor-default">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mission;


