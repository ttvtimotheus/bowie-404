import React, { useState, useEffect } from 'react';
import './NotFound.scss';

const NotFound = () => {
  const phrases = [
    "Life on Mars?",
    "Is There Life on Mars?",
    "Ground Control to Major Tom",
    "Ashes to Ashes, Funk to Funky",
    "Let's Dance",
    "Watch That Man",
    "Rebel Rebel",
    "Space Oddity",
    "Ziggy Played Guitar"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(true);
      }, 500); // Wait for fade out before changing text
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="not-found">
      <div className="not-found__stars"></div>
      <div className="not-found__content">
        <div className="not-found__lightning"></div>
        <h1 className="not-found__title">404</h1>
        <h2 className={`not-found__subtitle ${isAnimating ? 'animate-in' : 'animate-out'}`}>
          {phrases[currentPhraseIndex]}
        </h2>
        <p className="not-found__text">
          "There's a starman waiting in the sky, but this page seems to have fallen to Earth. 
          Changes may have been made, but we can be heroes and get you back on track."
        </p>
        <a href="/" className="not-found__button">
          Sound and Vision
        </a>
      </div>
    </div>
  );
};

export default NotFound;
