import ArtistName from '../ArtistName';
import AlbumName from '../AlbumName';
import PropTypes from 'prop-types';


import './Album.css'

const Album = ({ albumData }) => {
  console.log(albumData);

  return (
    <div className='album-container'>
      {albumData.map((album) => (
        <div
          key={album.id}
          className='album'
        >
          <AlbumName albumName={album.name} />
          <ArtistName artistName={album.artists[0].name} />
        </div>
      ))}
    </div>
  );
};

Album.propTypes = {
  albumData: PropTypes.string.isRequired,
};


export default Album;
