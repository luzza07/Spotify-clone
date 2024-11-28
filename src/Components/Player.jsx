import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-[#181818] text-white flex items-center justify-between px-4">
      {/* Left Section: Track Details */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-14 h-14 rounded-md" src={track.image} alt="Track Thumbnail" />
        <div className="text-sm">
          <p className="font-medium">{track.name || "No Track Playing"}</p>
          <p className="text-gray-400">{track.desc?.slice(0, 12) || "Unknown Artist"}</p>
        </div>
      </div>

      {/* Center Section: Playback Controls */}
      <div className="flex flex-col items-center gap-2 w-full lg:w-auto">
        {/* Playback Buttons */}
        <div className="flex items-center gap-6">
          <img
            className="w-5 cursor-pointer hover:opacity-80"
            src={assets.shuffle_icon}
            alt="Shuffle Icon"
          />
          <img
            onClick={previous}
            className="w-5 cursor-pointer hover:opacity-80"
            src={assets.prev_icon}
            alt="Previous Icon"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-6 cursor-pointer hover:opacity-80"
              src={assets.pause_icon}
              alt="Pause Icon"
            />
          ) : (
            <img
              onClick={play}
              className="w-6 cursor-pointer hover:opacity-80"
              src={assets.play_icon}
              alt="Play Icon"
            />
          )}
          <img
            onClick={next}
            className="w-5 cursor-pointer hover:opacity-80"
            src={assets.next_icon}
            alt="Next Icon"
          />
          <img
            className="w-5 cursor-pointer hover:opacity-80"
            src={assets.loop_icon}
            alt="Loop Icon"
          />
        </div>

        {/* Seek Bar */}
        <div className="flex items-center gap-4 w-full">
          <p className="text-xs">{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="relative w-full max-w-[500px] h-1 bg-gray-500 rounded-full cursor-pointer"
          >
            <div
              ref={seekBar}
              className="absolute top-0 left-0 h-1 bg-green-500 rounded-full"
              style={{ width: '0%' }} // Initial width, dynamically update via context
            ></div>
          </div>
          <p className="text-xs">{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      {/* Right Section: Additional Controls */}
      <div className="hidden lg:flex items-center gap-3 opacity-80">
        <img className="w-5 cursor-pointer hover:opacity-80" src={assets.plays_icon} alt="Plays Icon" />
        <img className="w-5 cursor-pointer hover:opacity-80" src={assets.mic_icon} alt="Mic Icon" />
        <img className="w-5 cursor-pointer hover:opacity-80" src={assets.queue_icon} alt="Queue Icon" />
        <img className="w-5 cursor-pointer hover:opacity-80" src={assets.speaker_icon} alt="Speaker Icon" />
        <div className="flex items-center gap-2">
          <img className="w-5 cursor-pointer hover:opacity-80" src={assets.volume_icon} alt="Volume Icon" />
          <div className="relative w-24 h-1 bg-gray-500 rounded-full">
            <div className="absolute top-0 left-0 h-1 bg-green-500 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
        <img className="w-5 cursor-pointer hover:opacity-80" src={assets.mini_player_icon} alt="Mini Player Icon" />
        <img className="w-5 cursor-pointer hover:opacity-80" src={assets.zoom_icon} alt="Zoom Icon" />
      </div>
    </div>
  );
};

export default Player;
