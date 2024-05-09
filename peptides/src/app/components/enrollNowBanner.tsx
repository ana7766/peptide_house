"use client";
import React from 'react';

function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const EnrollNowBanner = () => {
  return (
    <div className='h-24'>
      <div className="container mx-auto flex justify-between items-center p-4 max-w-5xl w-full">
        <div className="container mx-auto mid-size-text font-bold text-gray-300 flex items-center">
          Enroll now to discover a comprehensive list of peptides
        </div>
        <div
          style={{
            backgroundImage: 'url("/arrow_blue.png")',
            width: '51.5px',
            height: '15px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            cursor: 'pointer', // Add cursor pointer to indicate it's clickable
          }}
          onClick={() => scrollToElement('enrollPartition')}
        ></div>
      </div>
    </div>
  );
};

export default EnrollNowBanner;
