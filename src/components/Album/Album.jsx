import React from 'react';
import ArtistName from '../ArtistName';
import AlbumName from '../AlbumName';
import AlbumCover from '../AlbumCover';
import './Album.css'

const Album = ({ albumData }) => {
  console.log(albumData);

  return (
    <div className='album-container'>
      {albumData.map((album) => (
        <div
          key={album.id}
          className='album'
        >
          <AlbumCover albumCover={album.images[0].url} />
          <AlbumName albumName={album.name} />
          <ArtistName artistName={album.artists[0].name} />
        </div>
      ))}
    </div>
  );
};

export default Album;
