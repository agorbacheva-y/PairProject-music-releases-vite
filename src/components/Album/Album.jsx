import ArtistName from '../ArtistName';
import AlbumName from '../AlbumName';
import AlbumCover from '../AlbumCover';
import PropTypes from 'prop-types';


import './Album.css'

const Album = ({ albumData }) => {
  console.log(albumData);

  const artistName = albumData.artists;

  return (
    <div className='album-container'>
      {albumData.map((album) => (
        <div
          key={album.id}
          className='album'
        >
          <AlbumCover albumCover={album.images[0].url} />
          <AlbumName albumName={album.name} />
          <ArtistName artistName={album.artists} />
        </div>
      ))}
    </div>
  );
};

Album.propTypes = {
  albumData: PropTypes.string.isRequired,
};


export default Album;
