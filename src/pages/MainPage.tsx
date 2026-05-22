import { useWatchList } from '@/context/WatchListContext';
import AddFilmForm from '../components/AddFilmForm';
import FilmCard from '../components/FilmCard';

export function MainPage() {
  const { films, toggleWatched, markAllAsWatched, removeFilm, watchNumbers } = useWatchList();

  return (
    <div className="mb-6 p-4 bg-white rounded-xl shadow-sm dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-2 dark:text-white">🎬 Films Watchlist</h1>
      </div>

      <h2 className="text-lg text-gray-600 mb-4 dark:text-white">{watchNumbers()}</h2>

      <div className="flex justify-between items-center mb-6">
        <button
          onClick={markAllAsWatched}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition dark:bg-gray-200 dark:text-black dark:hover:bg-green-300"
        >
          Mark all as watched
        </button>
        <AddFilmForm />
      </div>

      <div className="space-y-3 dark:text-black">
        {films.map((film) => (
          <FilmCard
            key={film.id}
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
      </div>
    </div>
  );
}
