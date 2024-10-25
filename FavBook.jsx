import React from 'react';
import FavBookCover from "../assets/BooksPoster/FavBooks.jpg"
import { Link } from 'react-router-dom';

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col sm:flex-row justify-between items-center gap-9'>
       <div className='md:w-1/2'>
        <img src={FavBookCover} alt="" className='rounded md:w-10/12'/>
       </div>

       <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading leading-snug'>Find Your Favorite <span className='text-yellow-400'>Books Here!</span></h2>
    
    <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias delectus facere fugiat hic velit, est sed rem laudantium debitis illo aspernatur doloremque veritatis fuga.</p>
    {/* stats */}

     <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
     <div>
        <h3 className='text-3xl font-bold'>800+</h3>
        <p className='text-base'>Book Listening</p>
       </div>
       <div>
        <h3 className='text-3xl font-bold'>570+</h3>
        <p className='text-base'>Registered Users</p>
       </div>
       <div>
        <h3 className='text-3xl font-bold'>1870+</h3>
        <p className='text-base'>PDF Downloads</p>
       </div>
     </div>
    <Link to="/shop" className='m8-12 block'><button className='bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
     </div>

    </div>
  )
}

export default FavBook
