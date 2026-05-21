import AddFilmForm from './components/AddFilmForm';
import FilmCard from './components/FilmCard';
import { useWatchList } from './context/WatchListContext';

function App() {
  const { films, toggleWatched, markAllAsWatched, removeFilm, watchNumbers } = useWatchList();
  return (
    <>
      <h1>Films Watchlist</h1>
      <h2>{watchNumbers()}</h2>
      <button onClick={markAllAsWatched}>Mark all as watched</button>
      {films.map((film, index) => (
        <FilmCard
          key={index}
          id={film.id}
          title={film.title}
          year={film.year}
          genre={film.genre}
          rating={film.rating}
          watched={film.watched}
          onToggleWatched={toggleWatched}
          onRemove={removeFilm}
        />
      ))}
      <section>
        <AddFilmForm />
      </section>
    </>
  );
}

export default App;
