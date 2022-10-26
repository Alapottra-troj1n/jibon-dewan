import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <header className="text-white body-font absolute z-50 w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                
                    <Link href={'/'}><span className="cursor-pointer ml-3 lg:text-4xl text-xl text-white font-light font-display">Jibon Dewan</span></Link>
                </a>
                <nav className="hidden md:ml-auto flex flex-wrap gap-10 items-center lg:text-xl justify-center font-type font-light lg:font-semibold">
                    <Link href={'/'} className="  hover:text-gray-900"><li className='list-none cursor-pointer hover:text-gray-300 transition-all' >Songs & EPs</li></Link>
                    <Link href={'/'} className="  hover:text-gray-900"><li className='list-none cursor-pointer hover:text-gray-300 transition-all' >About</li></Link>
                </nav>
              
            </div>
        </header>
    );
};

export default Navbar;