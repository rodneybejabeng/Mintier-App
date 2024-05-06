import React, { useState, useEffect } from 'react';
import financial_freedom_3 from "../images/financial_freedom_3.jpg";

const About = () => {
  const [offset, setOffset] = useState(0);
  const maxScroll = 150; // Adjust this value based on your content's height

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const overlayOpacity = Math.min(1, offset / maxScroll);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${financial_freedom_3})`,
           backgroundSize: 'cover',
           backgroundAttachment: 'fixed',
           backgroundPosition: 'center'
         }}>
      <div className="z-10 p-4" style={{ height: '200vh' }}> {/* Adjust height as needed */}
        <h1 className="text-4xl font-bold">What is Mintier?</h1>
        <p>This is the about Mintier page. Talk about what Mintier is.</p>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center text-white text-sm opacity-80 animate-pulse">
        <span>Scroll Down</span>
      </div>
    </div>
  );
};

export default About;
