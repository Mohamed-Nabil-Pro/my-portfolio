import logo from '../assets/logo.svg';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50  bg-gradient-to-b from-zinc-900 to-zinc-900/0 '>
        <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
            {/* Logo */}
            <div className='cursor-pointer'>
                <a href="#home"><img src={logo} alt="Logo" className='size-10 object-contain'/></a>
            </div>


            {/* mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className=' md:hidden size-10 grid place-items-center  bg-zinc-50/10 rounded-xl ring-1 ring-zinc-50/[0.02] hover:bg-zinc-50/15 transition-[background-color, transform] active:scale-95 backdrop-blur-2xl'>
                {
                    isMenuOpen ? <HiX className='size-7'/> : <HiMenu className='size-7'/>
                }
            </button>


            {/* Navigation */}
            <div className='hidden md:flex items-center gap-10  bg-zinc-50/10 px-5 py-1 rounded-full ring-1 ring-zinc-50/5 '>
                {
                    navLinks.map((link , index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={`text-sm font-medium relative  ${activeLink === link.href ? ' text-zinc-600 bg-zinc-200 py-2 px-4 rounded-full transition-all duration-500 ' : 'text-zinc-400 hover:text-zinc-100'}`}
                            onClick={() => setActiveLink(link.href)}
                        >
                            {link.name}
                        </a>
                    ))
                }
            </div>

            {/* get in touch btn */}
            <a href="#contact" className='hidden md:block  bg-zinc-50/10 text-zinc-400 hover:text-zinc-100  px-8 py-2 rounded-full'>Contact Me</a>

            
            
        </div>
        {/* mobile menu */}
        {isMenuOpen && (
            
            <div className='md:hidden relative'>
                <div className=' max-w-40  absolute top-full right-4 bg-zinc-50/10 text-zinc-400 py-2 px-4 rounded-2xl ring-1 ring-zinc-50/5'>
                <div className=''>
                    {
                        navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={`block text-sm font-medium  ${activeLink === link.href ? '  text-zinc-600 bg-zinc-200 py-2 px-4 rounded-2xl transition-all duration-500 ' : 'text-zinc-400 hover:text-zinc-100 px-4 py-3'}`}
                                onClick={() => {
                                    setActiveLink(link.href);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {link.name}
                            </a>
                        ))
                    }

                    {/* get in touch btn */}
                    <a 
                        href="#contact" 
                        className={`block text-sm font-medium  
                            ${activeLink === "#contact" 
                                ? 'text-zinc-600 bg-zinc-200 py-2 px-4 rounded-2xl transition-all duration-500' 
                                : 'text-zinc-400 hover:text-zinc-100 px-4 py-2'}
                        `}
                        onClick={() => {
                            setActiveLink("#contact");
                            setIsMenuOpen(false);
                        }}
                        >
                        Contact Me
                    </a>
                </div>
            </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar
