// Card.tsx
import React from "react";

interface CardProps {
  mainText: string;
  additionalText: string;
}

const Card: React.FC<CardProps> = ({ mainText, additionalText }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{mainText}</h2>
        <button onClick={toggleCard}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && (
        <div className="card-body">
          <p>{additionalText}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
