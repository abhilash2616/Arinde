import { useState } from 'react';

const LetterBanner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const letters = ['A', 'R', 'N', 'I', 'D'];

  return (
    <div className="text-[230px] uppercase leading-none font-medium flex">
      {letters.map((letter, idx) => (
        <span
          key={idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`
            inline-block 
            transition-all duration-300
            ${hoveredIndex === idx ? 'text-[#D04713] scale-x-[2.7] mx-[80px]' : 'text-[#B8B9B8] scale-x-100 mx-0'}
          `}
        >
          {letter}
        </span>
      ))}
      <span
        className={`
          inline-block 
          transition-all duration-300 
          ${hoveredIndex === null ? 'text-[#D04713] scale-x-[2.7] mx-[80px]' : 'text-[#B8B9B8] scale-x-100 mx-0'}
        `}
      >
        E
      </span>
    </div>
  );
};

export default LetterBanner;