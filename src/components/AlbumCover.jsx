import { useState } from "react";
import Overlay from "./Overlay";

const AlbumCover = ({ albumCover }) => {
  // state for showing hover overlay
  const [showOverlay, setShowOverlay ] = useState(false);

  const handleHover = () => {
    setShowOverlay(false);
  }

  return (
    <div className="album-cover" onMouseOver={handleHover}>
      <img src={albumCover} alt="album cover" />

      <div>
        {showOverlay && (
          <Overlay />
        )}

      </div>
    </div>
  )
}

export default AlbumCover
