// components/ParallaxBackground.jsx
import React, { useEffect, useState } from "react";

const ParallaxBackground = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListenxer("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Large floating circle */}
      <div
        className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl"
        style={{ transform: `translateY(${offsetY * 0.3}px) translateX(20px)` }}
      />
      {/* Medium floating circle */}
      <div
        className="absolute w-48 h-48 bg-blue-400 rounded-full opacity-15 blur-2xl top-1/4 left-1/3"
        style={{ transform: `translateY(${offsetY * 0.5}px) translateX(-10px)` }}
      />
      {/* Small floating circle */}
      <div
        className="absolute w-32 h-32 bg-pink-400 rounded-full opacity-10 blur-xl top-1/2 right-1/4"
        style={{ transform: `translateY(${offsetY * 0.8}px) translateX(5px)` }}
      />
    </div>
  );
};

export default ParallaxBackground;
