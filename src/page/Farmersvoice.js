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
                    <h1 className="text-3xl md:text-4xl font-bold text-earth-600 mb-4">Farmers' Voice</h1>
                    <p className="text-lg md:text-xl text-earth-500 max-w-4xl mx-auto leading-relaxed">
                        Mulkanoor Cooperative Society has empowered over 7600+ farmers by providing essential services that support their growth and success. Spanning across 14 villages and gram panchayats, we have been a pillar of strength for the farming community.
                    </p>
                </div>
                <Third />
            </div>
        </div>
    )
}

export default Farmersvoice