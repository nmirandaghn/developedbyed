import React from "react";

const LibrarySong = ({
  songs,
  setCurrentSong,
  song,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelected = () => {
    const selectedSong = songs.filter((state) => state.id === song.id);

    const newSongs = songs.map((newSong) => {
      return { ...newSong, active: newSong.id === song.id };
    });
    setSongs(newSongs);

    setCurrentSong(selectedSong[0]);

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelected}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
