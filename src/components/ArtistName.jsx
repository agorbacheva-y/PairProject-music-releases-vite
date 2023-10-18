import PropTypes from 'prop-types';

const ArtistName = ({ artistName }) => {
  return (
    <div className="artist-name">
      Artist: {artistName}
    </div>
  );
};

ArtistName.propTypes = {
  artistName: PropTypes.string.isRequired
};

export default ArtistName;
