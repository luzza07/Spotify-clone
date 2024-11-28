import React, { useContext } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[parseInt(id)];
    const { playWithId } = useContext(PlayerContext);
    
    if (!albumData) {
        return <div className="text-center text-white mt-10">Album not found</div>;
    }

    const albumSongs = songsData.filter(song => song.albumId === id);

    return (
        <>
            <NavBar />

            {/* Album Header Section */}
            <div className='mt-10 flex flex-col md:flex-row md:items-end gap-8 p-4'>
                <img className='w-48 rounded shadow-lg' src={albumData.image} alt={albumData.name} />
                <div className="flex flex-col">
                    <p className='text-sm text-gray-400'>PLAYLIST</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4 className='text-gray-400'>{albumData.desc}</h4>
                    <p className='mt-2 text-sm text-gray-400'>
                        <img className='inline-block w-5 mr-1' src={assets.spotify_logo} alt="Spotify Logo" />
                        <b>Spotify</b> 
                        • {albumData.likes || '0'} likes
                        • <b>{albumSongs.length} songs</b>, about {albumData.duration || 'N/A'}
                    </p>
                </div>
            </div>

            {/* Song List Header */}
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-4 text-gray-400'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="Clock Icon" />
            </div>
            <hr className='border-gray-700' />

            {/* Songs List */}
            <div className="px-4">
                {albumSongs.map((item, index) => (
                    <div 
                        onClick={() => playWithId(item.id)} 
                        key={index} 
                        className='grid grid-cols-3 sm:grid-cols-4 gap-4 p-2 items-center text-gray-400 hover:bg-[#2a2a2a] rounded cursor-pointer'
                    >
                        <p className='text-white flex items-center'>
                            <b className='mr-4'>{index + 1}</b> 
                            {item.name}
                        </p>
                        <p className='text-sm'>{albumData.name}</p>
                        <p className='text-sm hidden sm:block'>5 days ago</p>
                        <p className='text-sm text-center'>{item.duration}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DisplayAlbum;
