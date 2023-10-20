import ArtistName from '../ArtistName';
import AlbumName from '../AlbumName';
import AlbumCover from '../AlbumCover';
import PropTypes from 'prop-types';

import './Album.css'

const Album = ({ albumData }) => {
  console.log(albumData);

  //const artistName = albumData.artists;

  return (
    <div className='album-container'>
      {albumData.map((album) => (
        <div
          key={album.id}
          className='album'
        >
          <AlbumCover albumCover={album.images[0].url} albumURL={album.external_urls.spotify} />
          <AlbumName albumName={album.name} albumURL={album.external_urls.spotify} />
          <ArtistName artistName={album.artists} externalURL={album.artists[0].external_urls.spotify} />
          
        </div>
      ))}
    </div>
  );
}


Album.propTypes = {
  albumData: PropTypes.string.isRequired,
};


export default Album;
