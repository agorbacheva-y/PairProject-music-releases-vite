import PropTypes from 'prop-types';

const AlbumName = ({ albumName,albumURL  }) => {
  return (
    <a
    style={{ textDecoration: 'none', color: 'white' }}
      href={albumURL}
      target="_blank"
      rel="noopener noreferrer"
    >
    <div className="album-name">
      {albumName}
    </div>
    </a>
  );
};

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  albumURL: PropTypes.string.isRequired,
};


export default AlbumName;
