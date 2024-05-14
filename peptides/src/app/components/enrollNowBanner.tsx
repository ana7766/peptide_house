"use client";
import React from 'react';
import Image from 'next/image';

function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const EnrollNowBanner = () => {
  return (
    <div className='min-h-[95px] border-b-[3px] border-solid border-gray-100'>
      <div className="container mx-auto flex justify-between items-center p-4 max-w-[1003.5px] max-h-[95px] w-full h-full">
        <div className="container mx-auto mid-size-text font-bold text-gray-300 flex items-center">
          Enroll now to discover a comprehensive list of peptides
        </div>
        <Image
          src="/arrow_blue.png"
          alt="Arrow"
          width={51.5}
          height={15} 
          className="cursor-pointer"
          onClick={() => scrollToElement('enrollPartition')}
        />
      </div>
    </div>
  );
};

export default EnrollNowBanner;

