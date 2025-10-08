import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-opacity-80 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-10xl mx-auto px-10 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide">
          MyBrand
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <button className="hover:text-yellow-300 transition">Home</button>
          <button className="hover:text-yellow-300 transition">About</button>
          <button className="hover:text-yellow-300 transition">Contact</button>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-white text-purple-700 px-4 py-1.5 rounded hover:bg-yellow-300 hover:text-black transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <button className="block w-full text-left hover:text-yellow-300">Home</button>
          <button className="block w-full text-left hover:text-yellow-300">About</button>
          <button className="block w-full text-left hover:text-yellow-300">Contact</button>
          <button className="w-full bg-white text-purple-700 py-2 rounded mt-2 hover:bg-yellow-300 hover:text-black transition">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
