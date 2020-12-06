import React from "react";

const LibrarySong = ({ songs, setCurrentSong, song }) => {
  const songSelected = () => {
    const selectedSong = songs.filter((state) => state.id === song.id);
    setCurrentSong(selectedSong[0]);
  };
  return (
    <div className="library-song" onClick={songSelected}>
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
