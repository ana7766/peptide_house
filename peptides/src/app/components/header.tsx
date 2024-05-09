import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className="flex flex-col items-center justify-between p-14">
      <nav className="max-w-5xl w-full mx-auto flex justify-between items-center">
        <div>
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
    </div>
  );
}

export default Header;
