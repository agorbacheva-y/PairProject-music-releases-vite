import PropTypes from 'prop-types';

const ArtistName = ({ artistName, externalURL  }) => {
  console.log(artistName);

  return (
    <div className="artist-name">
      {artistName.map(( artists, index ) => (
        <a
        style={{ textDecoration: 'none', color: 'white' }}
        key={artists.id}
        href={externalURL}
        target="_blank"
        rel="noopener noreferrer"
      >
          {artists.name}
          {index < artistName.length -1 ? " & " : "" }
        </a>
      ))}
    </div>
  );
};

ArtistName.propTypes = {
  artistName: PropTypes.string.isRequired,
  externalURL: PropTypes.string.isRequired,
};

export default ArtistName;
