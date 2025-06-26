import React from 'react'
import banner from '../../assets/homebannersecond.jpg'
import nav1 from '../../assets/home/nav1.jpg'
import nav2 from '../../assets/home/nav2.jpg'
import nav3 from '../../assets/home/nav3.jpg'
import nav4 from '../../assets/home/nav4.jpg'
import nav5 from '../../assets/home/nav5.jpg'
import nav6 from '../../assets/home/nav6.jpg'
import nav7 from '../../assets/home/nav7.jpg'
import nav8 from '../../assets/home/nav8.jpg'
import nav9 from '../../assets/home/nav9.jpg'
import nav10 from '../../assets/home/nav10.jpg'

const Second = () => {
    return (
        <div className='px-4 md:px-8 py-8 md:py-12 bg-transparent'>
            <div className='flex items-center text-center justify-center flex-col'>
                <h1 className='text-2xl md:text-5xl'>Mulkanoor Cooperative Ecosystem</h1>
                <p className='text-sm md:text-lg w-full md:w-1/2 mt-4 md:mt-5 px-2'>
                    For 69+ years, Mulkanoor Coop has transformed into a holistic network of solutions, resources, and assistance for farmers, championing equity, openness, and sustainable development.
                </p>
                
                <div className='grid  grid-cols-2 md:grid-cols-4 gap-4 w-full mt-6 md:mt-8'>
                    <a href='/pillars/winning'>
                        <img src={nav7} alt="Navigation Image 7" className='w-full cursor-pointer rounded-lg  hover:shadow-lg transition-all' />
                    </a>
                    <a href='/pillars/agri'>
                        <img src={nav2} alt="Navigation Image 2" className='w-full cursor-pointer rounded-lg  hover:shadow-lg transition-all' />
                    </a>
                    <a href='/pillars/extension'>
                        <img src={nav9} alt="Navigation Image 8" className='w-full cursor-pointer rounded-lg  hover:shadow-lg transition-all' />
                    </a>
                    <a href='/product'>
                        <img src={nav6} alt="Navigation Image 6" className='w-full cursor-pointer rounded-lg  hover:shadow-lg transition-all' />
                    </a>
                    <a href='/processing'>
                        <img src={nav10} alt="Navigation Image 8" className='w-full cursor-pointer rounded-lg  hover:shadow-lg transition-all' />
                    </a>
                    <a href='/marketing'>
                        <img src={nav5} alt="Navigation Image 5" className='w-full cursor-pointer rounded-lg  hover:shadow-lg transition-all' />
                    </a>
                    <a href='/consumer'>
                        <img src={nav3} alt="Navigation Image 3" className='w-full cursor-pointer rounded-lg  hover:shadow-lg transition-all' />
                    </a>
                    <a href='/pillars/Welfare'>
                        <img src={nav8} alt="Navigation Image 8" className='w-full cursor-pointer rounded-lg  hover:shadow-lg transition-all' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Second