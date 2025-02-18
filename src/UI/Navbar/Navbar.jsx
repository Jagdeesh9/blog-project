import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-yellow-50 border-b border-black w-full">
    {/* Logo Section */}
    <div className="ml-8 md:ml-32">
      <h1 className="text-2xl md:text-3xl font-serif font-bold">Medium</h1>
    </div>
  
    {/* Navigation Links */}
    <div className="hidden md:flex">
      <ul className="flex items-center space-x-4 md:space-x-6 text-gray-700 text-sm md:text-base mr-8 md:mr-32">
        <li className="text-black">Our Story</li>
        <li className="text-black">Membership</li>
        <li className="text-black">Write</li>
        <li className="text-black">Sign in</li>
        <li className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900">
          Get started
        </li>
      </ul>
    </div>
  
    {/* Mobile Menu Button (Optional) */}
    <div className="md:hidden">
      <button className="text-black focus:outline-none">☰</button>
    </div>
  </div>
  
  );
};

export default Navbar;
