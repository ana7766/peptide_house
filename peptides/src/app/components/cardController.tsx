"use client";
import React, { createContext, useContext, useState } from 'react';

interface CardContextType {
  openCardIndex: number;
  setOpenCardIndex: (index: number) => void;
}

const CardContext = createContext<CardContextType>({
  openCardIndex: -1,
  setOpenCardIndex: () => {},
});

export const useCardContext = () => useContext(CardContext);

interface CardProviderProps {
  children: React.ReactNode;
}

export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [openCardIndex, setOpenCardIndex] = useState<number>(-1);

  return (
    <CardContext.Provider value={{ openCardIndex, setOpenCardIndex }}>
      {children}
    </CardContext.Provider>
  );
};
