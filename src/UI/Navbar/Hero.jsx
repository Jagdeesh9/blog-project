import React from "react";

const Hero = () => {
  const Image1 =
    "https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png";

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-yellow-50 w-full px-4 md:px-16">
    {/* Left Section */}
    <div className="text-center md:text-left md:ml-48 max-w-3xl">
      <h1 className="text-6xl md:text-8xl font-serif text-gray-900 mb-4">
        Human <br /> Stories & Ideas
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 py-4 md:py-8">
        A place to read, write, and deepen your understanding.
      </p>
      <button className="cursor-pointer bg-black text-lg md:text-xl text-white px-6 md:px-9 py-2 rounded-full hover:bg-gray-900">
        Start reading
      </button>
    </div>
  
    {/* Right Section - Image */}
    <div className="flex justify-center items-start w-full md:w-auto">
      <img
        src={Image1}
        alt="Human Stories"
        className="w-full md:w-[500px] max-w-full object-cover"
      />
    </div>
  </div>
  
  
  );
};

export default Hero;
