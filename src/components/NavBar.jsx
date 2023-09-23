import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { navLinks } from '../constants';
// import AppleIcon from "../assets/apple.svg"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <>
            <header className="sm:px-8 p-3 z-10 w-full font-SFPro bg-black text-white fixed">

                <nav className="flex justify-between items-center max-container">
                    <a href="/" className="text-xl pr-2 font-normal">
                        {/* <AppleIcon /> */}
                        Apple Store
                    </a>
                    <ul className="flex-1 lg:flex justify-center items-center gap-16  hidden">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="  cursor-pointer text-white hover:text-gray"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* <a href="/">

                        </a> */}
                    <button className="hidden hover:text-gray lg:flex btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <label tabIndex={0} className=" hidden hover:text-gray lg:flex btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">0</span>
                        </div>
                    </label>

                    <div
                        className="hidden max-lg:block cursor-pointer"
                        onClick={() => {
                            setToggleMenu(!toggleMenu);
                        }}
                    >
                        {/* <RxHamburgerMenu className="text-4xl" /> */}
                    </div>
                </nav>


                <div className='absolute lg:hidden top-3 right-4 '>
                    <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

                    {
                        toggleMenu && (
                            <div className='fixed top-0 left-0 w-full h-full bg-black ease-in-out flex-col z-10 flex__center slide-bottom duration-200'>
                                <IoCloseSharp fontSize={27} className='text-3xl text-white cursor-pointer absolute top-4 right-4' onClick={() => setToggleMenu(false)} />
                                <ul className="pt-40">
                                    {navLinks.map((item) => (

                                        <li key={item.label} className='list-none text-center my-4'>
                                            <a
                                                href={item.href}
                                                className="m-4 cursor-pointer text-white hover:text-gray"
                                            >
                                                {item.label}
                                            </a>
                                        </li>

                                    ))}
                                </ul>
                                <div class="mx-52 sm:mx-64 md:mx-96">
                                    <button className="btn btn-ghost btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-sm indicator-item">0</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                        )
                    }
                </div >

            </header >

        </>
    )

}



export default Navbar;
