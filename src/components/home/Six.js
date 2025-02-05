import React from 'react'
import map from '../../assets/home_map.png'

const Six = () => {
    return (
        <div className="relative w-screen">
            <div className="container mx-">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Our Coverage Area</h2>
            </div>
            <div className=" aspect-h-9 w-full">
                <img
                    src={map}
                    alt="Coverage Map"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

export default Six