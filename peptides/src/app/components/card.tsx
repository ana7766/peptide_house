"use client";
import React, { useState } from 'react';

interface CardProps {
  mainText: string;
  additionalText: string;
}

const Card: React.FC<CardProps> = ({ mainText, additionalText }) => {
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const toggleAdditionalText = () => {
    setShowAdditionalText(!showAdditionalText);
  };

  return (
    <div className="container mx-auto items-center p-4 max-w-5xl w-full">
      <div className="border border-solid border-gray-300 rounded-lg relative">
        <div className="m-2 flex justify-between">
          <span className='font-bold'>{mainText}</span>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleAdditionalText}
          >
            {showAdditionalText ? '-' : '+'}
          </span>
        </div>
        {showAdditionalText && (
          <div className="m-2">
            <span>{additionalText}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

