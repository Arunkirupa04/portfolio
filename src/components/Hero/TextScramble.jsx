import { useState, useEffect } from 'react';

const TextScramble = ({ 
  text = 'Full-Stack Developer',
  className = '',
  scrambleSpeed = 35,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let iteration = 0;
    const length = text.length;
    const maxIterations = length * 2; // Faster reveal
    
    // Small delay before starting
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              // Reveal characters progressively from left to right
              if (index < iteration / 2) {
                return text[index];
              }
              // Keep spaces as spaces
              if (char === ' ' || char === '-') return char;
              // Random character for unrevealed positions
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        iteration += 1;

        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsComplete(true);
        }
      }, scrambleSpeed);

      return () => clearInterval(interval);
    }, 800); // Wait for page load animation

    return () => clearTimeout(startDelay);
  }, [text, scrambleSpeed, characters]);

  return (
    <span className={`text-scramble ${className} ${isComplete ? 'complete' : 'scrambling'}`}>
      {displayText}
      {!isComplete && <span className="scramble-cursor">|</span>}
    </span>
  );
};

export default TextScramble;

