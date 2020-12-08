import React from "react";
import { playAudio } from "../util";

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

    setCurrentSong(selectedSong[0]);

    const newSongs = songs.map((newSong) => {
      return { ...newSong, active: newSong.id === song.id };
    });
    setSongs(newSongs);

    playAudio(isPlaying, audioRef);
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
