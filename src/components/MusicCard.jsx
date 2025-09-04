// src/components/MusicCard.jsx
function MusicCard({ title, artist}) {
  return (
    <div className="music-card">
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
}

export default MusicCard;
