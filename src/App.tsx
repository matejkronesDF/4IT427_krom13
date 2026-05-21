import FilmCard from './components/FilmCard';
import { type Film } from './types/film.types';
import { useWatchList } from './hooks/useWatchList';

function App() {
  const initialFilms: Film[] = [
    { id: '1', title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 9, watched: true },
    { id: '2', title: 'The Matrix', year: 1999, genre: 'Sci-Fi', rating: 8, watched: false },
    { id: '3', title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 9, watched: true },
  ];

  const { films, toggleWatched, markAllAsWatched } = useWatchList(initialFilms);
  return (
    <>
      <h1>Films Watchlist</h1>
      <button onClick={markAllAsWatched}>Mark all as watched</button>
      {films.map((film) => (
        <FilmCard
          key={film.id}
          title={film.title}
          year={film.year}
          genre={film.genre}
          rating={film.rating}
          watched={film.watched}
          onToggleWatched={toggleWatched}
        />
      ))}
    </>
  );
}

export default App;
