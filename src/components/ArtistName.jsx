const ArtistName = ({ artistName }) => {
  console.log(artistName);

  return (
    <div className="artist-name">
      {artistName.map(({ i, name }) => (
        <span
          key={i}
        >
          {name} {i > (artistName.length-1) ? " & " : ""}
        </span>
      ))}
    </div>
  );
};

export default ArtistName;
