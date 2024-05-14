"use client";
import { useCardContext } from './cardController';
import Image from "next/image";
import React, { useState } from 'react';

interface CardProps {
  mainText: string;
  additionalText: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ mainText, additionalText, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto items-center m-3 max-w-[794px] w-full">
      <div className={`relative min-h-[48px] items-center`}>
        <div className="max-w-[762px] w-full h-12 min-h-[24px] flex cursor-pointer items-center rounded-[5px] border-[1px] border-solid border-gray-300 px-[14px] py-[11px] transition duration-300 ease-linear selection:bg-slate-500 hover:border-blue-400 hover:bg-blue-200 sm:w-[100%] sm:px-[16px] sm:py-[13px] md:w-[100%]">
         <div className='text max-[530px] flex-1 font-bold'> {mainText}</div>
          <button className="text-blue-500 cursor-pointer items-center flex h-[12px] w-[12px]" onClick={toggleCard}>
            {isOpen ? (
              <svg
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H12" stroke="#3D9BE9" strokeWidth="2" />
            </svg>
            ) : (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.75 0.75C6.75 0.335786 6.41421 0 6 0C5.58579 0 5.25 0.335786 5.25 0.75V5.24886H0.75C0.335786 5.24886 0 5.58465 0 5.99886C0 6.41308 0.335786 6.74886 0.75 6.74886H5.25V11.2478C5.25 11.6621 5.58579 11.9978 6 11.9978C6.41421 11.9978 6.75 11.6621 6.75 11.2478V6.74886H11.2478C11.6621 6.74886 11.9978 6.41308 11.9978 5.99886C11.9978 5.58465 11.6621 5.24886 11.2478 5.24886H6.75V0.75Z"
                  fill="#3D9BE9"
                />
              </svg>
            )}
          </button>
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
