// src/pages/Explore.jsx
import { href } from "react-router-dom";
import MusicCard from "../components/MusicCard";

function Explore() {
  const songs = [
    { id: 1, title: "Nutshell", artist: "Alice In Chains"},
    { id: 2, title: "Everlong", artist: "Foo Fighters" },
    { id: 3, title: "It's My Life", artist: "Bon Jovi" },
    { id: 4, title: "Love Of My Life", artist: "Queen" },
  ];

  return (
    <div className="container">
      <h2>Explora la música</h2>
      <div className="music-grid">
        {songs.map((song) => (
          <MusicCard key={song.id} {...song} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
