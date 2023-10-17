import React from 'react';
import ArtistName from './ArtistName';
import AlbumName from './AlbumName';

const Album = ({ albumData }) => {
  console.log(albumData);

  return (
    <div>
      {albumData.map((album) => (
        <div
          key={album.id}
        >
          <ArtistName artistName={album.artists[0].name} />
          <AlbumName albumName={album.name} />
        </div>
      ))}
    </div>
  );
};

export default Album;
