import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                
                    <span className="ml-3 text-3xl font-display">Jibon Dewan</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-type font-semibold">
                    <Link href={'/'} className="mr-5 hover:text-gray-900"><li className='list-none' >Songs & EPs</li></Link>
                    <Link href={'/'} className="mr-5 hover:text-gray-900"><li className='list-none' >About</li></Link>
                </nav>
              
            </div>
        </header>
    );
};

export default Navbar;