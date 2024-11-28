import { useContext } from "react";
import Display from "./Components/Display";
import Player from "./Components/Player";
import SideBar from "./Components/SideBar";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen  bg-black text-white flex flex-col">
      {/* Main Content Area */}
      <div className="flex flex-1 lg:flex-row">
        {/* Sidebar */}
        <SideBar className="w-full lg:w-1/4 bg-[#181818] p-6 hidden lg:block" />

        {/* Main Display */}
        <div className="flex-1 overflow-y-auto bg-[#121212] p-6">
          <Display />
        </div>
      </div>

      {/* Player */}
      <div className="w-full bg-[#181818] fixed bottom-0 left-0 z-50 shadow-lg">
        <Player />
      </div>

      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src={track?.file || ""} 
        preload="auto"
      />
    </div>
  );
};

export default App;
