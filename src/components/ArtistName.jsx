import PropTypes from 'prop-types';

const ArtistName = ({ artistName, externalURL  }) => {
  //console.log(artistName);

  // Function to add '&' btwn artists if there are only 2 artists
  // if there are >2 artists, show ',' between all artists 
  // except the last two which should have '&':
  const addCharacter = (index) => {
    let character;
    if (artistName.length === 2 && index < artistName.length - 1) {
      character = " & ";
    } else if (artistName.length > 2 && index < artistName.length - 2) {
      character = ", ";
    } else if (artistName.length > 2 && index === artistName.length - 2) {
      character = " & ";
    } else {
      character = "";
    }

    return character;
  }

  return (
    <div className="artist-name">
      {artistName.map(( artists, index ) => (
        <a
        style={{ textDecoration: 'none', color: '#a0a0a0' }}
        key={artists.id}
        href={externalURL}
        target="_blank"
        rel="noopener noreferrer"
      >
          {artists.name}
          {addCharacter(index)}
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

// Initial code to add '&' btwn artist names:
// index < artistName.length -1 ? " & " : "" 