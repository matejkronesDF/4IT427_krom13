interface FilmCardProps {
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
  onToggleWatched: (title: string) => void;
}

function FilmCard({ title, year, genre, rating, watched, onToggleWatched }: FilmCardProps) {
  const isRatingValid = rating >= 1 && rating <= 10;

  return (
    <>
      <h2>{title}</h2>
      <p>Rok: {year}</p>
      <p>Žánr: {genre}</p>
      {isRatingValid ? <p>⭐️ {rating}</p> : <p>❌ Invalid</p>}
      {watched ? <p>✅ Zhlédnuto</p> : <p>❌ Nezhlédnuto</p>}
      <button onClick={() => onToggleWatched(title)}>Změnit stav zhlédnutí</button>
    </>
  );
}
export default FilmCard;
