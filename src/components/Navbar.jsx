import React from "react";
import { BsHandbag } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
const Navbar = () => {
  const leftLinks = [
    { name: "Home", href: "#", className: "font-medium underline text-black" },
    { name: "Shop", href: "#", className: "font-medium text-gray-600 hover:text-black" },
    { name: "About Us", href: "#", className: "font-medium text-gray-600 hover:text-black" },
    { name: "Blog", href: "#", className: "font-medium text-gray-600 hover:text-black" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-5 bg-transparent mx-28">
      {/* Left Section */}
      <div className="flex space-x-8">
        {leftLinks.map((link, index) => (
          <a key={index} href={link.href} className={link.className}>
            {link.name}
          </a>
        ))}
      </div>

      {/* Center Section */}
      <div className="text-5xl font-bold text-black font-playfair">VERA</div>

      {/* Right Section */}
      <div className="flex items-center ml-40 space-x-4">
        <button className="text-gray-600 hover:text-black">
          <GoHeart />
        </button>
        <button className="text-gray-600 hover:text-black">
        <BsHandbag />
        </button>
        <button className="font-medium text-gray-600 hover:text-black">Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
