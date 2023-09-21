import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
// import AppleIcon from "../assets/apple.svg"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about-us", label: "About Us" },
        { href: "#products", label: "Products" },
        { href: "#contact-us", label: "Contact Us" },
    ];
    return (
        <>
            <header className="sm:px-8 p-3 z-10 w-full font-SFPro bg-black text-white">

                <nav className="flex justify-between items-center max-container">
                    <a href="/" className="text-xl pr-2 font-normal">
                        {/* <AppleIcon /> */}
                        Apple Store
                    </a>
                    <ul className="flex-1 md:flex justify-center items-center gap-16  hidden">
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
                    <div className="gap-2 font-thin  md:flex hidden wide:mr-24 cursor-pointer text-white hover:text-gray">
                        <a href="/">Sign in</a>
                    </div>
                    <div
                        className="hidden max-lg:block cursor-pointer"
                        onClick={() => {
                            setToggleMenu(!toggleMenu);
                        }}
                    >
                        {/* <RxHamburgerMenu className="text-4xl" /> */}
                    </div>
                </nav>


                <div className='absolute md:hidden top-3 right-4 '>
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
                            </div>

                        )
                    }
                </div>

            </header >

        </>
    )

}



export default Navbar;
