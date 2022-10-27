import Link from 'next/link';
import React from 'react';
import { BsFacebook,BsInstagram,BsYoutube } from 'react-icons/bs';

const Navbar = () => {
    return (
        <header className="text-white body-font absolute z-50 w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                
                    <Link href={'/'}><span className="cursor-pointer ml-3 lg:text-4xl text-xl text-white  font-extra">Jibon Dewan</span></Link>
                </a>

                
                <nav className=" md:ml-auto flex flex-wrap gap-5 items-center lg:text-xl justify-center font-type font-light lg:font-semibold">
                <a rel='noreferrer' target='_blank'  href="https://www.facebook.com/profile.php?id=100009225777049"><BsFacebook className='cursor-pointer lg:text-2xl hover:text-neutral-200' /></a>
                <a rel='noreferrer' target='_blank'  href="https://www.instagram.com/jibondewan_jd/"><BsInstagram className='cursor-pointer lg:text-2xl hover:text-neutral-200' /></a>
                <a rel='noreferrer' target='_blank' href="https://www.youtube.com/channel/UCrMYkZiYT8S-y6qVEWqImow"><BsYoutube className='cursor-pointer lg:text-3xl mt-[1px] hover:text-neutral-200 text-xl' /></a>
                </nav>
              
            </div>
        </header>
    );
};

export default Navbar;