// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-7">
      <div className="container mx-auto flex justify-center items-center">
        <a href="/" className="text-white text-2xl font-bold">Star Wars Planets Directory</a>
      </div>
    </nav>
  );
};

export default Navbar;
