import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const { _id, bookTitle, imageURL, price, authorName, bookDescription, category, bookPDFUrl } = useLoaderData();

    return (
        <div className='mt-28 px-4 lg:px-24 flex flex-col lg:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-md'>
            {/* Book Poster */}
            <div className='lg:w-1/3 mb-6 lg:mb-0'>
                <img src={imageURL} alt={bookTitle} className='w-full h-auto object-cover rounded-lg shadow-lg' />
            </div>
            
            {/* Book Information */}
            <div className='lg:w-2/3 lg:pl-10'>
                <h2 className='text-4xl font-bold mb-4'>Book Name : {bookTitle}</h2>
                <h3 className='text-2xl font-semibold text-gray-800'>Author Name : {authorName}</h3>
                <h4 className='text-xl font-medium text-gray-600 mt-2'>Category : {category}</h4>
                <p className='text-lg font-semibold text-green-600 mt-4'>Price : ₹{price}</p>
                <p className='text-base text-gray-700 mt-4 leading-relaxed'>Description : {bookDescription}</p>
                
                <a href={bookPDFUrl} target="_blank" rel="noopener noreferrer">
                    <button className='mt-6 bg-black text-white font-semibold py-2 px-6 rounded hover:bg-orange-500 transition duration-300'>
                        Buy Now
                    </button>
                </a>
            </div>
        </div>
    );
}

export default SingleBook;

