import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books Are Here...!</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {books.map(book => (
          <Link to={`/books/${book._id}`} key={book._id}> {/* Link to single book page */}
            <Card className="shadow-lg transition-transform transform hover:scale-105">
              <img 
                src={book.imageURL} 
                alt={book.bookTitle} 
                className='h-80 w-full object-cover rounded-t-lg' 
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookTitle}</h3>
                <p className="font-normal text-gray-700 dark:text-gray-400">{book.authorName}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">₹{book.price}</p>
              </div>
              <button className='bg-black font-semibold text-white py-2 rounded hover:bg-orange-500 transition-colors duration-300'>
                Buy Now
              </button>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;