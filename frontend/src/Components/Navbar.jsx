import { useState } from 'react';
import logo1 from '../../public/logo2.png';
import { IoLanguage } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import {Link} from 'react-scroll';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] =  useState(false);

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {link:"Overview", path:"home"},
        {link:"Features", path:"features"},
        {link:"About", path:"about"},
        {link:"Pricing", path:"pricing"},
    ]

  return (
    <>
    <nav className="bg-white md:px-14 p-4 max-w-screen-3xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
            <div className="flex items-center space-x-14 pt-3">
                <a href="/" className="text-2xl font-semibold flex items-center space-x-3 pl-4  text-primary"><img src={logo1} alt="logo1" className="w-10 inline-block items-center"/><span>NexPlan</span></a>

                {/* showing nav Items */}

                <ul className="md:flex space-x-14 hidden">
                
                    {
                        navItems.map(({link,path})=> 
                        <Link spy={true} smooth={true} offset={-100} activeClass='active' key={link} to={path} className="block cursor-pointer hover:text-gray-300">{link}</Link>
                        )
                    }

                </ul>
            </div>

            {/* language and sign up */}

            <div className="space-x-12 hidden md:flex items-center pt-3">
                <a href="/" className="hidden lg:flex items-center hover:text-secondary"><IoLanguage className="mr-2"/><span>Languages</span></a>
                <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">Sign Up</button>
            </div>

            {/* menu btn only display to mobile divices */}

            <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
                        {
                            isMenuOpen ? (<IoCloseCircleOutline className="w-6 h-6 text-primary"/>) : (<IoMenu className="w-6 h-6 text-primary"/>)
                        } 
                    </button>

            </div>


        </div>
      
    </nav>
    

    {/* // navitem display for mobile divices */}

    <div className= {`space-y-6 px-11 pt-24 pb-4 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0":"hidden" } `}>
    {
        navItems.map(({link, path})=>
        <Link key={link} to={path} spy={true} smooth={true} offset={-80} activeClass='active' className="block text-white hover:text-gray-300" onClick={toggleMenu}>{link}</Link>
        )
    }

    </div>
    </>
  )
}

export default Navbar
