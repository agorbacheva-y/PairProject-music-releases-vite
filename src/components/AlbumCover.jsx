import { useState } from "react";
import Overlay from "./Overlay";

const AlbumCover = ({ albumCover }) => {
  // state for showing hover overlay
  const [showOverlay, setShowOverlay ] = useState(false);

  const handleOnHover = () => {
    setShowOverlay(true);
  };

  const handleOffHover = () => {
    setShowOverlay(false);
  }

  return (
    <>
      <div className="album-cover" onMouseOver={handleOnHover} onMouseOut={handleOffHover}>
        <img src={albumCover} alt="album cover" />

        <div className="overlay-container">
          {showOverlay && (
            <Overlay />
          )}
        </div>

      </div>
    </>
    
  )
}

export default AlbumCover

// fix css to show overlay on top of img 
