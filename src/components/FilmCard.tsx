interface FilmCardProps {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
  onToggleWatched: (id: string) => void;
  onRemove: (id: string) => void;
}

function FilmCard({ id, title, year, genre, rating, watched, onToggleWatched, onRemove }: FilmCardProps) {
  const isRatingValid = rating >= 1 && rating <= 10;

  return (
    <>
      <h2>{title}</h2>
      <p>Rok: {year}</p>
      <p>Žánr: {genre}</p>
      {isRatingValid ? <p>⭐️ {rating}</p> : <p>❌ Invalid</p>}
      {watched ? <p>✅ Zhlédnuto</p> : <p>❌ Nezhlédnuto</p>}
      <button onClick={() => onToggleWatched(id)}>Změnit stav zhlédnutí</button>
      <button onClick={() => onRemove(id)}>Odebrat</button>
    </>
  );
}
export default FilmCard;
