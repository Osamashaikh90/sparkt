import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import hydration from "./assets/images/hydration.png";
import skin from "./assets/images/skin.png";
import hand from "./assets/images/hand.png";
import leaf from "./assets/images/leaf.png";
import face from "./assets/images/face.png";
import second from "./assets/images/second.png";
import box from "./assets/images/box.png";
import uncap from "./assets/images/uncap.png";
import cap from "./assets/images/cap.png";
import "./App.css";

function App() {
  const [animateCapUncap, setAnimateCapUncap] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [animateSecond, setAnimateSecond] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const boxRef = useRef(null);
  // const handRef = useRef(null);
  const benefits = [
    {
      title: "Deep Hydration",
      description:
        "Provides long-lasting moisture, keeping skin soft and smooth.",
      imgSrc: hydration,
      marginLeft: "lg:ml-40 md:ml-20",
    },
    {
      title: "Soothes Irritated Skin",
      description: "Calms redness and irritation, perfect for sensitive skin.",
      imgSrc: face,
      marginLeft: "lg:mr-20 md:mr-10",
    },
    {
      title: "Promotes Skin Healing",
      description: "Enhances healing of minor cuts, burns, and blemishes.",
      imgSrc: skin,
      marginLeft: "lg:ml-28 md:ml-14",
    },
    {
      title: "Rich in Antioxidants",
      description: "Fights aging and repairs skin with essential vitamins.",
      imgSrc: leaf,
    },
  ];
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
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min(scrollTop / maxScroll, 1));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        {/* 1st component */}
        <div className="relative flex items-center justify-center min-h-screen">
          {/* Hello text */}
          <h1 className="font-playfair absolute w-full font-bold text-center text-black text-[4rem] sm:text-[8rem] md:text-[16rem] lg:text-[20rem] opacity-20">
            NOURISH
          </h1>

          {/* Cap animation */}
          <div
            className={`absolute flex items-center justify-center w-full h-full ${
              animateCapUncap ? "cap-animation" : ""
            }`}
          >
            <img
              src={cap}
              alt="Cap"
              className={`z-20 mb-28 h-auto w-48 md:w-72 lg:w-96 ${!animateCapUncap && "hidden"}`}
            />
          </div>

          {/* Uncap animation */}
          <div
            className={`absolute flex items-center justify-center w-full h-full ${
              animateCapUncap ? "uncap-animation" : ""
            }`}
          >
            <img
              src={uncap}
              alt="Uncap"
              className={`z-10 h-auto mb-28 w-48 md:w-72 lg:w-96 ${!animateCapUncap && "hidden"}`}
            />
          </div>

          {/* Box image  */}
          {showBox && (
            <div
              ref={boxRef}
              className="relative z-50 flex items-center justify-center w-full h-full"
            >
              <img src={box} alt="Box" className="z-50 w-48 h-auto md:w-72 lg:w-96 mb-28" />
            </div>
          )}

          {/* Second animation */}
          <div
            className={`w-[120%] lg:w-[82%] h-[60%] md:h-[86%] mt-12 circle second ${
              animateSecond ? "animate" : ""
            }`}
          >
            <img 
              src={second} 
              alt="Second Animation" 
              className="w-full h-full"
              
            />
          </div>
        </div>
{/* =================== */}
        {/* 2nd component */}
        <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-16 bg-white md:flex-row lg:px-28">
          {/* Left Section */}
          <div className="order-2 w-full p-4 space-y-8 md:order-1 md:w-1/2 md:p-6 md:space-y-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } ${benefit.marginLeft || ""}`}
              >
                <img
                  src={benefit.imgSrc}
                  alt={benefit.title}
                  className="w-16 h-16 p-1 bg-green-100 border border-green-900 rounded-full md:w-20 md:h-20"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-green-900 md:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-600 md:text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="relative flex items-center justify-center order-1 w-full mt-8 md:order-2 md:w-1/2 md:mt-0">
            <div className="relative flex items-center justify-center overflow-hidden bg-green-100 rounded-full w-72 h-72 md:w-96 md:h-96">
              <img
                src={hand}
                alt="Product"
                className="object-contain w-[300px] md:w-[400px] absolute bottom-0 -rotate-12 h-full scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
