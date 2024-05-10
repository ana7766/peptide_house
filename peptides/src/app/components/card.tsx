"use client";
import React from 'react';
import { useCardContext } from './cardController';

interface CardProps {
  mainText: string;
  additionalText: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ mainText, additionalText, index }) => {
  const { openCardIndex, setOpenCardIndex } = useCardContext();

  const isOpen = index === openCardIndex;

  const toggleCard = () => {
    setOpenCardIndex(isOpen ? -1 : index);
  };

  return (
    <div className="container mx-auto items-center p-4 max-w-5xl w-full">
      <div className="border border-solid border-gray-300 rounded-lg relative">
        <div className="m-2 flex justify-between">
          <span className='font-bold'>{mainText}</span>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleCard}
          >
            {isOpen ? '-' : '+'}
          </span>
        </div>
        {isOpen && (
          <div className="m-2">
            <span>{additionalText}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
