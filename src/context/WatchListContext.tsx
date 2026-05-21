import type { Film } from '@/types/film.types';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type WatchListContextType = {
  films: Film[];
  addFilm: (film: Film) => void;
  removeFilm: (id: string) => void;
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
  watchNumbers: () => string;
};
const WatchListContext = createContext<WatchListContextType | null>(null);
const initialFilms: Film[] = [
  { id: '1', title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 9, watched: true },
  { id: '2', title: 'The Matrix', year: 1999, genre: 'Sci-Fi', rating: 8, watched: false },
  { id: '3', title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 9, watched: true },
];

export function WatchListProvider({ children }: { children: ReactNode }) {
  const [films, setFilms] = useState<Film[]>(initialFilms);

  function addFilm(film: Film) {
    setFilms((prevFilms) => [...prevFilms, film]);
  }

  function removeFilm(id: string) {
    setFilms((prevFilms) => prevFilms.filter((film) => film.id !== id));
  }

  function toggleWatched(id: string) {
    setFilms((prevFilms) =>
      prevFilms.map((film) => (film.id === id ? { ...film, watched: !film.watched } : film))
    );
  }

  function markAllAsWatched() {
    setFilms((prevFilms) => prevFilms.map((film) => ({ ...film, watched: true })));
  }

  function watchNumbers(){
    const watchedCount = films.filter((f) => f.watched).length;
    const totalCount = films.length;
    return `${watchedCount}/${totalCount} zhlédnuto.`
  }

  useEffect(() => {
    const watchedCount = films.filter((f) => f.watched).length;
    const totalCount = films.length;

    document.title = `Watchlist (${watchedCount}/${totalCount}) zhlédnuto.`;
  }, [films]);

  return (
    <WatchListContext.Provider
      value={{ films, addFilm, removeFilm, toggleWatched, markAllAsWatched, watchNumbers }}
    >
      {children}
    </WatchListContext.Provider>
  );
}

export function useWatchList() {
  const context = useContext(WatchListContext);

  if (!context) {
    throw new Error('useWatchList must be used inside WatchListProvider');
  }

  return context;
}
