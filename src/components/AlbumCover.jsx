import { useState } from "react";
import Overlay from "./Overlay";
import PropTypes from 'prop-types';

const AlbumCover = ({ albumCover, albumURL }) => {
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
    <a
      href={albumURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="album-cover" onMouseOver={handleOnHover} onMouseOut={handleOffHover}>
        <img src={albumCover} alt="album cover" />

        <div className="overlay-container">
          {showOverlay && (
            <Overlay />
          )}
        </div>

      </div>
      </a>
    </>
    
  )
}

AlbumCover.propTypes = {
  albumCover: PropTypes.string.isRequired,
  albumURL: PropTypes.string.isRequired,
};


export default AlbumCover;

// fix css to show overlay on top of img 
