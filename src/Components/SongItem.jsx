import React from "react";

const SongItem = ({ name, desc, image }) => {
  return (
    <div className="w-40 lg:w-48 cursor-pointer hover:scale-105 transform transition duration-300">
      <img
        className="rounded-lg shadow-md object-cover w-full h-40 lg:h-48"
        src={image}
        alt={name}
      />
      <h3 className="mt-3 text-sm font-bold truncate">{name}</h3>
      <p className="text-sm text-gray-400 truncate">{desc}</p>
    </div>
  );
};

export default SongItem;
