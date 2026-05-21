import { type Film } from '@/types/Film';
import { useState, useEffect } from 'react';

export function useWatchList(initialFilms: Film[]) {
  const [films, setFilms] = useState(initialFilms);

  function toggleWatched(title: string) {
    setFilms((prev) =>
      prev.map((film) => (film.title === title ? { ...film, watched: !film.watched } : film))
    );
  }

  function markAllAsWatched() {
    setFilms((prev) => prev.map((film) => ({ ...film, watched: true })));
  }

  useEffect(() => {
    const watchedCount = films.filter((f) => f.watched).length;
    const totalCount = films.length;

    document.title = `Watchlist (${watchedCount}/${totalCount}) zhlédnuto.`;
  }, [films]);

  return { films, toggleWatched, markAllAsWatched };
}
