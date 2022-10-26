import React from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="py-2 bg-black text-white flex justify-center items-center gap-2" >
           <h2 className="text-center text-xs" > Developed with </h2> <BsFillSuitHeartFill className="text-red-500" /> <a href="https://alapottra.netlify.app/"><h2 className="text-xs" >By Alapottra</h2></a>
          
        </div>
    );
};

export default Footer;