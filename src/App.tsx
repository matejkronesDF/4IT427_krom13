/* Stylingová metoda: Tailwind */
import { useState } from 'react';
import AddFilmForm from './components/AddFilmForm';
import FilmCard from './components/FilmCard';
import { useWatchList } from './context/WatchListContext';

function App() {
  const { films, toggleWatched, markAllAsWatched, removeFilm, watchNumbers } = useWatchList();
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 text-gray-900 p-6 dark:bg-black dark:text-white">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold mb-2 dark:text-white">🎬 Films Watchlist</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mb-4 px-4 py-2 rounded-lg border
                    bg-white text-black
                    dark:bg-gray-800 dark:text-white"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>

          <h2 className="text-lg text-gray-600 mb-4 dark:text-white">{watchNumbers()}</h2>
          {/* Actions */}
          <button
            onClick={markAllAsWatched}
            className="mb-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition dark:bg-gray-200 dark:text-black dark:hover:bg-green-300"
          >
            Mark all as watched
          </button>

          {/* Film list */}
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

          {/* Form */}
          <section className="mt-8 p-4 bg-white rounded-xl shadow dark:text-black">
            <AddFilmForm />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
