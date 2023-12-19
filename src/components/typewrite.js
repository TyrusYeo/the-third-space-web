'use client';
import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const textArray = ["welcome", "i want to fix the loneliness epidemic", "join The Third Space", "->"];
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentStringIndex = 0;
    let currCharCount = 0;
    
    const intervalId = setInterval(() => {
      const currentChar = textArray[currentStringIndex % textArray.length][currCharCount];

      console.log(currCharCount)
      
      setDisplayText((prevDisplayString) => prevDisplayString + currentChar);
      currCharCount++ 
      
      // Move to next string
      if (currCharCount === textArray[currentStringIndex % textArray.length].length + 1) {
        setDisplayText("");
        currentStringIndex++;
        currCharCount = 0;
      }
    }, 340);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="wrapper">
      <span className="typewriter">{displayText}</span>
      <span className="cursor">&nbsp;</span>
    </div>
  );
};

export default Typewriter;