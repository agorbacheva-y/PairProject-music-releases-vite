import PropTypes from 'prop-types';

const AlbumName = ({ albumName }) => {
  return (
    <div className="album-name">
      Album: {albumName}
    </div>
  );
};

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
};


export default AlbumName;
