import Link from 'next/link';
import './navbarcss.css';
import React from 'react';
export function Navbar () {
    return(
        <nav className='flex justify-center items-center rectangle'>
        
          <div className='w-52'>
                <img src='/logo2.png'/>
          </div>

        </nav>
    );
}