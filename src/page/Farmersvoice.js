import React from 'react'
// import Fourth from '../components/home/Fourth'
import { Third } from '../components/home/Third'
import { Helmet } from 'react-helmet'

const Farmersvoice = () => {
    return (
        <div>
             <Helmet>
                <title>Farmers' Voice - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Hear directly from our 7600+ farmer members about their experiences with Mulkanoor Cooperative Society. Real stories of agricultural transformation and community empowerment."
                />
            </Helmet>
            <div className="container mx-auto px-4 md:px-8 mt-20 py-14 md:py-20">
                <div className="mb-10 text-center">
                    <h1 className="text-3xl cursor-default md:text-4xl font-bold text-earth-600 mb-4">Farmers' Voice</h1>
                    <p className="text-lg cursor-default md:text-xl text-earth-500 max-w-4xl mx-auto leading-relaxed">
                        The society started with the primary objective of socio economic development of the farmers of 14 revenue villages of bheemadevarapally, elkathurthy and velair mandals. The farmers who have cultivable land of at least an acre and reside in any of these villages are eligible for the membership of the cooperative.
                    </p>
                </div>
                
                <Third />
                {/* Area of Operations Section */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-earth-600 mb-8 text-center">Area of Operations</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">

                            <div className="mt-4">
                                <p className="font-semibold text-earth-600">Bheemadevarapally:</p>
                                <p className="text-earth-500">Mulkanoor, Mutharam, Bheemadevarapally, Gatla Narsingapur, Kothapally, Koppur, Vangara, Rathnagiri, Mallaram, Kothakonda, Mustafapur</p>
                                
                                <p className="font-semibold text-earth-600 mt-3">Elkathurthy:</p>
                                <p className="text-earth-500">Gopalpur, Jeelugula</p>
                                
                                <p className="font-semibold text-earth-600 mt-3">Velair:</p>
                                <p className="text-earth-500">Errabelly</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 rounded-lg overflow-hidden h-80">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d61046.19853141186!2d79.27638409151968!3d18.192441697839815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1691034567890!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mulkanoor Operational Areas"
                                className="rounded-lg shadow-md"
                            ></iframe>
                        </div>
                    </div>
                </div>
                
                {/* Our Impact Section */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-earth-600 mb-8 text-center">Our Impact</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-3xl font-bold text-earth-600 mb-2">₹220 Crores</h3>
                            <p className="text-earth-500">Credit facilitated to farmers every year</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-3xl font-bold text-earth-600 mb-2">20000+</h3>
                            <p className="text-earth-500">Acres cultivated</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-3xl font-bold text-earth-600 mb-2">₹5.6 Crores</h3>
                            <p className="text-earth-500">Paid each year to members in the form of dividends and incentives on agricultural production</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-3xl font-bold text-earth-600 mb-2">₹150 Crores</h3>
                            <p className="text-earth-500">Reserve created by society promotes sustainable and profitable farming</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-3xl font-bold text-earth-600 mb-2">₹67 Crores</h3>
                            <p className="text-earth-500">Worth assets accumulated</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-3xl font-bold text-earth-600 mb-2">15000+</h3>
                            <p className="text-earth-500">Farmers empowered across 4 generations over 7 decades</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Farmersvoice