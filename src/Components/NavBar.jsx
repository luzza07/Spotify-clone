import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navigation Buttons */}
      <div className="w-full flex justify-between items-center font-semibold">
        {/* Back and Forward Buttons */}
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 h-8 bg-black p-2 rounded-full cursor-pointer hover:bg-gray-800"
            src={assets.arrow_left}
            alt="Go Back"
          />
          <img
            onClick={() => navigate(+1)}
            className="w-8 h-8 bg-black p-2 rounded-full cursor-pointer hover:bg-gray-800"
            src={assets.arrow_right}
            alt="Go Forward"
          />
        </div>

        {/* Premium and Install App Buttons */}
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-sm px-4 py-1 rounded-full hidden md:block cursor-pointer hover:bg-gray-300">
            Explore Premium
          </p>
          <p className="bg-black text-white text-sm py-1 px-3 rounded-full cursor-pointer hover:bg-gray-800">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            LN
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-full cursor-pointer hover:bg-gray-300">ALL</p>
        <p className="bg-black text-white px-4 py-1 rounded-full cursor-pointer hover:bg-gray-800">Music</p>
        <p className="bg-black text-white px-4 py-1 rounded-full cursor-pointer hover:bg-gray-800">Podcasts</p>
      </div>
    </>
  );
};

export default NavBar;
