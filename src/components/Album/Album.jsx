import ArtistName from '../ArtistName';
import AlbumName from '../AlbumName';
import PropTypes from 'prop-types';


import './Album.css';

//Export 
export const Album = ({ albumData }) => { //Defining a functional React component, using album as prop (object containing information about an album)
  console.log(albumData)
  const { name, external_urls, artists } = albumData; //Destructuring

  //Rendering JSX. Creating structure of how the album information should be displayed/order.
  return (
      <div className="album-container">
          <AlbumName albumName={name} albumURL={external_urls.spotify} />
          <ArtistName artists={artists} />
      </div>
  );
}


Album.propTypes = {
  albumData: PropTypes.string.isRequired,
};


export default Album;
