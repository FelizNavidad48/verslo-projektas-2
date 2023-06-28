import Link from 'next/link';
import './navbarcss.css';
import Image from 'next/image'
import React from 'react';
export function Navbar () {
    return(
        <nav className='flex justify-center items-center rectangle'>
        
          <div className=''>
                <Image unoptimized src="/logo2.png" width={210} height={210} alt='Logo picture'/>
          </div>

        </nav>
    );
}