import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
    <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black'>Buy & Sell Your Books <span className='text-yellow-400'>For The Best Prices</span></h2>
            <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ab vero illo autem debitis blanditiis doloribus quod quae in itaque praesentium quasi laboriosam ipsam voluptatem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ab vero illo autem debitis blanditiis doloribus quod quae in itaque praesentium quasi laboriosam ipsam voluptatem.</p>
            <div>
                <input type='search' name='search' id='search' placeholder='Search a Books...' className='py-2 px-2 rounded-sm outline-none'/>
                <button className='bg-black px-6 py-2 text-white font-medium hover:bg-orange-500 transition-all ease-in duration-200'>Search</button>
            </div>
        </div>

         {/* right side */}
         <div>
            <BannerCard/>
         </div>
    </div>
    </div>
  )
}

export default Banner
