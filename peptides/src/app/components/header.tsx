"use client";
import React, { useState } from 'react';
import Image from 'next/image';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-center justify-between p-10">
      <nav className="max-w-[1200px] w-full mx-auto flex justify-between items-center hidden md:flex">
        <div className='mr-8'>
          <Image src="/logo.png" alt="Logo" width={309} height={37} />
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-800">
              What Are Peptides
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800">
              Peptides for Muscle Grow
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800">
              Muscle Grow
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800">
              FAQ&apos;s
            </a>
          </li>
        </ul>
      </nav>

      <div className="md:hidden">
        <div className="flex justify-between items-center w-full">
          <div className='mr-20'>
            <Image src="/logo.png" alt="Logo" width={309} height={37} />
          </div>
          <button
            className="block md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="w-full flex flex-col items-center">
            <a href="#" className="text-gray-800 my-2">
              What Are Peptides
            </a>
            <a href="#" className="text-gray-800 my-2">
              Peptides for Muscle Grow
            </a>
            <a href="#" className="text-gray-800 my-2">
              Muscle Grow
            </a>
            <a href="#" className="text-gray-800 my-2">
              FAQ&apos;s
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
