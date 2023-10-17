import React from 'react';
import ArtistName from './ArtistName';

const Album = ({ albumData }) => {
  console.log(albumData);

  return (
    <div>
      {albumData.map((album) => (
        <div
          key={album.id}
        >
          <ArtistName artistName={album.artists[0].name} />
        </div>
      ))}
    </div>
  );
};

export default Album;
