import React from "react";
import NavBar from "./NavBar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      {/* Featured Charts Section */}
      <div className="mb-8">
        <h1 className="my-6 font-bold text-2xl lg:text-3xl">Featured Charts</h1>
        <div className="flex overflow-x-auto gap-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Today's Biggest Hits Section */}
      <div className="mb-8">
        <h1 className="my-6 font-bold text-2xl lg:text-3xl">Today's Biggest Hits</h1>
        <div className="flex overflow-x-auto gap-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
