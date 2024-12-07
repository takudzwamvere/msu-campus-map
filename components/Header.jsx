"use client";

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
import tableIcon from '../public/dots.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-between items-center p-1 bg-blue-200'>
      <Link href='/'>
        <h1 className='text-lg text-blue-600'>campus<span className='font-bold text-lg text-yellow-400'>Map</span></h1>
      </Link>
      <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
        <Image src={tableIcon} alt="Menu" width={24} height={24} />
      </div>
      <ul className={`flex-col md:flex-row md:flex md:items-center ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <li className='p-2'><Link href='/aboutMap'>About Map</Link></li>
        <li className='p-2'><Link href='/aboutCreator'>About Creator</Link></li>
        <li className='p-2'><Link href='/'>LeafletJS</Link></li>
        <li className='p-2'><Link href='/'>Midlands State University</Link></li>
        <li className='p-2 h-8 rounded-xl border-yellow-400 border-2 flex items-center'>
          <Link href='/sponsor' className='text-sm text-center w-full h-full flex items-center justify-center'>
            Support the Project
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;