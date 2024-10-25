import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaXmark } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const {user} = useContext(AuthContext);
    console.log(user);

    // Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);    
    }

    useEffect(() => {
        const handleScroll = () => {
           if (window.scrollY > 100) {
               setIsSticky(true);
           } else {
               setIsSticky(false);
           }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // NavItems 
    const navItems = [
        { link: 'Home', path: "/" },
        { link: 'About', path: "/about" },
        { link: 'Shop', path: "/shop" },
        { link: 'Sell Your Book', path: "/admin/dashboard" }
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 right-0 left-0 transition-all ease-in duration-300'>
            <nav className={`py-5 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-lime-200" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                
                    {/* Logo */}
                    <Link to="/" className="text-2x1 font-bold text-orange-500 flex items-center gap-2">
                        <FaBook className="inline-block" />BookStore
                    </Link>
               

                {/* Nav items for large devices */}
                <ul className='md:flex space-x-12 hidden'>
                {
                  navItems.map(({ link, path }) => <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-orange-500">{link}</Link>)
                }
                </ul>

                {/* btn for lg devices */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-orange-500'/></button>
                    {/* {
                        user? user.email : ""
                    } */}
                </div>

                 {/* menu btn for mobile devices */}
                 <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black hover:text-orange-500'/>
                        }
                    </button>
                 </div>
            </div>
            </nav>

            {/* nav items for small devices */}
            <div className={`space-Y-4 px-7 mt-16 py-7 bg-orange-600 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
            navItems.map(({ link, path }) => <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer hover:text-black">{link}</Link>)
            }
            </div>
        </header>
    );
}

export default Navbar;


