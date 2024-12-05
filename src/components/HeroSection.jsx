import { useEffect, useState, useRef } from "react";
import cap from "../assets/images/cap.png";
import uncap from "../assets/images/uncap.png";
import box from "../assets/images/box.png";
import second from "../assets/images/second.png";

const HeroSection = () => {
  const [animateCapUncap, setAnimateCapUncap] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [animateSecond, setAnimateSecond] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const boxRef = useRef(null);

  useEffect(() => {
    setAnimateCapUncap(true);
    setTimeout(() => {
      setAnimateCapUncap(false);
      setShowBox(true);
      setTimeout(() => setAnimateSecond(true), 1000);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min(scrollTop / maxScroll, 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      const boxElement = boxRef.current;
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      const targetX = isMobile 
        ? window.innerWidth * 0.1 
        : isTablet 
          ? window.innerWidth * 0.25
          : window.innerWidth * 0.21;
      
      const targetY = isMobile 
        ? window.innerHeight * 0.8 
        : isTablet 
          ? window.innerHeight * 0.99
          : window.innerHeight * 0.92;
      
      const translateX = targetX;
      const translateY = targetY;
      const progressFactor = Math.min(scrollProgress * 2, 1);
      
      boxElement.style.transform = `
        translate(${translateX * progressFactor}px, ${translateY * progressFactor}px)
        scale(${1 - progressFactor * 0.5})
      `;
    }
  }, [scrollProgress]);

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Hello text */}
      <h1 className="font-playfair absolute w-full font-bold text-center text-black text-[4rem] sm:text-[8rem] md:text-[16rem] lg:text-[20rem] opacity-20">
        NOURISH
      </h1>

      {/* Cap animation */}
      <div className={`absolute flex items-center justify-center w-full h-full ${
        animateCapUncap ? "cap-animation" : ""
      }`}>
        <img
          src={cap}
          alt="Cap"
          className={`z-20 mb-28 h-auto w-48 md:w-72 lg:w-96 ${!animateCapUncap && "hidden"}`}
        />
      </div>

      {/* Uncap animation */}
      <div className={`absolute flex items-center justify-center w-full h-full ${
        animateCapUncap ? "uncap-animation" : ""
      }`}>
        <img
          src={uncap}
          alt="Uncap"
          className={`z-10 h-auto mb-28 w-48 md:w-72 lg:w-96 ${!animateCapUncap && "hidden"}`}
        />
      </div>

      {/* Box image */}
      {showBox && (
        <div ref={boxRef} className="relative z-50 flex items-center justify-center w-full h-full">
          <img src={box} alt="Box" className="z-50 w-48 h-auto md:w-72 lg:w-96 mb-28" />
        </div>
      )}

      {/* Second animation */}
      <div className={`w-[120%] lg:w-[82%] h-[60%] md:h-[86%] mt-12 circle second ${
        animateSecond ? "animate" : ""
      }`}>
        <img 
          src={second} 
          alt="Second Animation" 
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroSection; 