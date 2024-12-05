import { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { GoHeart } from "react-icons/go";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const leftLinks = [
    { name: "Home", href: "#", className: "font-medium underline text-black" },
    { name: "Shop", href: "#", className: "font-medium text-gray-600 hover:text-black" },
    { name: "About Us", href: "#", className: "font-medium text-gray-600 hover:text-black" },
    { name: "Blog", href: "#", className: "font-medium text-gray-600 hover:text-black" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-transparent">
      <div className="flex items-center justify-between px-4 py-5 md:px-8 lg:px-28">
        {/* Logo - Mobile only */}
        <div className="text-3xl font-bold text-black font-playfair lg:hidden">
          VERA
        </div>

        {/* Desktop/Tablet Navigation */}
        <div className="items-center justify-between hidden w-full lg:flex">
          {/* Left Links */}
          <div className="flex space-x-8">
            {leftLinks.map((link, index) => (
              <a key={index} href={link.href} className={link.className}>
                {link.name}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div className="text-5xl font-bold text-black font-playfair">VERA</div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 lg:ml-40">
            <button className="text-gray-600 hover:text-black">
              <GoHeart />
            </button>
            <button className="text-gray-600 hover:text-black">
              <BsHandbag />
            </button>
            <button className="font-medium text-gray-600 hover:text-black">
              Profile
            </button>
          </div>
        </div>

        {/* Tablet Navigation (md screens) */}
        <div className="items-center justify-between hidden w-full md:flex lg:hidden">
          <div className="flex items-center space-x-6">
            {leftLinks.map((link, index) => (
              <a key={index} href={link.href} className={link.className}>
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section for Tablet */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black">
              <GoHeart />
            </button>
            <button className="text-gray-600 hover:text-black">
              <BsHandbag />
            </button>
            <button className="font-medium text-gray-600 hover:text-black">
              Profile
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 md:hidden hover:text-black"
        >
          {!isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-4 py-3 space-y-3">
            {leftLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block font-medium text-gray-600 hover:text-black"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-200">
              <button className="flex items-center space-x-2 font-medium text-gray-600 hover:text-black">
                <GoHeart className="w-5 h-5" />
                <span>Wishlist</span>
              </button>
              <button className="flex items-center mt-3 space-x-2 font-medium text-gray-600 hover:text-black">
                <BsHandbag className="w-5 h-5" />
                <span>Bag</span>
              </button>
              <button className="flex items-center mt-3 space-x-2 font-medium text-gray-600 hover:text-black">
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;