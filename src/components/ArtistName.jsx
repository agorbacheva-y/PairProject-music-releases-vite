const ArtistName = ({ artistName }) => {
  console.log(artistName);

  return (
    <div className="artist-name">
      
      {artistName.map(( artists, index ) => (
        <span
          key={artists.id}
        >
          {artists.name}
          {index < artistName.length -1 ? " & " : "" }
          
        </span>
      ))}
    </div>
  );
};

export default ArtistName;
