import financial_freedom_3 from "../images/financial_freedom_3.jpg";
import React, { useState, useEffect } from 'react';

const About = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <img
        src={financial_freedom_3}
        className="absolute w-full h-full object-cover"
        style={{ opacity: Math.max(0, 1 - offset / 50) }}
        alt="Background"
      />
      <div
        style={{ opacity: Math.min(1, offset / 50) }}
        className="z-10 p-4"
      >
        <h1 className="text-4xl font-bold">What is Mintier?</h1>
        <p>This is the about Mintier page. Talk about what Mintier is.</p>
      </div>
    </div>
  );
};

export default About;
