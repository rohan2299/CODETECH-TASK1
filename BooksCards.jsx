// BooksCards.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'; 
import { FaCartShopping } from 'react-icons/fa6';

const BooksCards = ({ headline, books }) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

      {/* Swiper with responsive slides */}
      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map(book => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className='relative shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                  {/* Image with fixed height and responsive width */}
                  <img
                    src={book.imageURL}
                    alt={book.bookTitle}
                    className='h-64 w-full object-cover' // Ensures consistent image display
                  />
                  {/* Cart icon */}
                  <div className='absolute top-3 right-3 bg-orange-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping className='w-4 h-4 text-white'/>
                  </div>
                </div>

                {/* Book Information */}
                <div className='p-4 text-center'>
                  <h3 className='text-lg font-bold text-gray-800'>{book.bookTitle}</h3>
                  <p className='text-gray-500'>{book.authorName}</p>
                  <p className='text-lg font-semibold text-green-600 mt-2'>₹{book.price}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// Define PropTypes for validation
BooksCards.propTypes = {
  headline: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      bookTitle: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BooksCards;