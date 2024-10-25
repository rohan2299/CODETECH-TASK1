import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
   // Categories for the book
   const bookCategories = [
    "Fiction", "Non-Fiction", "Biography", "Historical", "Programming", "Science", "Technology",
    "Horror", "Fantasy", "Health", "Autobiography", "Self-Help", "Business", "Romance", "Mystery",
    "Thriller", "Adventure", "Travel", "Cooking", "Art", "Novel", "Poetry", "Philosophy", "History",
    "Mythology", "Science Fiction", "Drama", "Indian Literature", "Hinduism", "Children Books", 
    "Young Adult", "Graphic Novels", "Comics", "Religion", "Spirituality", "Art and Design","Historical-Fiction"
    ];

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

    const handleChangeSelectedValue = (event) => {
        setSelectedBookCategory(event.target.value);
    };  

    // Handle form submission
    const handleBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        // Collect data from form fields
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const price = form.price.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFUrl = form.bookPDFUrl.value;

        // Create book object to send to backend
        const bookObj = {
            bookTitle, 
            authorName, 
            imageURL, 
            category, 
            price,
            bookDescription, 
            bookPDFUrl
        };

        // Send data to the backend using fetch
        fetch("http://localhost:4000/upload-book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",  // Corrected headers
            },
            body: JSON.stringify(bookObj),  // Send the data in JSON format
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert("Book Uploaded Successfully!");
            form.reset();
        })
        // .catch(error => {
        //     console.error("Error uploading book:", error);
        //     alert("Error uploading book, please try again.");
        // });
    };

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

            <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                {/* 1st Row - Book Title and Author Name */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
                    </div>
                </div>

                {/* 2nd Row - Book Image URL and Category */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image" />
                        </div>
                        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL..." required />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>
                        <select name="categoryName" id="inputState" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                            {bookCategories.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Book Description */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" name='bookDescription' placeholder="Write Your Book Description..." required rows={5} className='w-full'/>
                </div>
                {/* {price} */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="price" value="Book Price" />
                    </div>
                    <TextInput id="price" name='price' type="number" placeholder="Book Price" required />
                </div>

                {/* Book PDF Link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFUrl" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPDFUrl" name='bookPDFUrl' type="text" placeholder="Book PDF URL" required />
                </div>

                <Button type="submit" className='mt-5 text-white bg-black justify-center'>Upload Book</Button>
            </form>
        </div>
    );
};

export default UploadBook;
