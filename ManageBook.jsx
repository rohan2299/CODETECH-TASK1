import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBook = () => {
    const [allBooks, setAllBooks] = useState([]);

    // Fetch books from the API when component mounts
    useEffect(() => {
        fetch("http://localhost:4000/all-books")
            .then(res => res.json())
            .then(data => setAllBooks(data))
            .catch(err => console.error('Error fetching books:', err));
    }, []); // Use an empty dependency array to ensure the effect runs only once

    // Delete a book
    
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:4000/book/${id}`, {
            method: "DELETE",
        }).then(res => res.json()).then(data => {
            alert("Book is deleted")
             // Filter out the deleted book from the state to refresh the table
             setAllBooks(allBooks.filter(book => book._id !== id));
        })
    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

            {/* Table for displaying book data */}
            <Table className='lg:w-[1190px]'>
                <Table.Head>
                    <Table.HeadCell>No</Table.HeadCell>
                    <Table.HeadCell>Book Name</Table.HeadCell>
                    <Table.HeadCell>Author Name</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>
                        <span>Edit or Manage</span>
                    </Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">
                    {allBooks.map((book, index) => (
                        <Table.Row key={book._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1} {/* Serial Number */}
                            </Table.Cell>
                            <Table.Cell>{book.bookTitle}</Table.Cell>
                            <Table.Cell>{book.authorName}</Table.Cell>
                            <Table.Cell>{book.category}</Table.Cell>
                            <Table.Cell>{book.price ? `₹${book.price}` : 'N/A'}</Table.Cell>

                            <Table.Cell>
                                <Link href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-books/${book._id}`}>
                                Edit
                                </Link>
                                <button onClick={() => handleDelete(book._id)} className='bg-red-500 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-600'>Delete</button>
                                  
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default ManageBook;