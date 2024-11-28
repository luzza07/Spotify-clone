import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[20%] min-w-[200px] h-full p-4 bg-black text-white hidden lg:flex flex-col">
      {/* Navigation Section */}
      <div className="space-y-4">
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-4 pl-4 py-2 hover:text-green-500 cursor-pointer"
        >
          <img src={assets.home_icon} alt="Home Icon" className="w-6" />
          <p className="text-lg font-medium">Home</p>
        </div>
        <div 
          onClick={() => navigate('/search')} 
          className="flex items-center gap-4 pl-4 py-2 hover:text-green-500 cursor-pointer"
        >
          <img src={assets.search_icon} alt="Search Icon" className="w-6" />
          <p className="text-lg font-medium">Search</p>
        </div>
      </div>

      {/* Your Library Section */}
      <div className="flex-1 mt-6">
        <div className="flex items-center justify-between px-4 mb-4">
          <div className="flex items-center gap-4">
            <img src={assets.stack_icon} alt="Library Icon" className="w-6" />
            <p className="text-lg font-medium">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} alt="Arrow Icon" className="w-4 cursor-pointer" />
            <img src={assets.plus_icon} alt="Plus Icon" className="w-4 cursor-pointer" />
          </div>
        </div>

        {/* Create Playlist Section */}
        <div className="p-4 bg-[#242424] rounded-lg mb-4">
          <h1 className="text-lg font-semibold mb-1">Create your first playlist</h1>
          <p className="text-sm text-gray-400 mb-4">It's easy, we'll help you.</p>
          <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200">
            Create Playlist
          </button>
        </div>

        {/* Podcast Suggestion Section */}
        <div className="p-4 bg-[#242424] rounded-lg">
          <h1 className="text-lg font-semibold mb-1">Find some podcasts to follow</h1>
          <p className="text-sm text-gray-400 mb-4">We'll keep you updated on new episodes.</p>
          <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
