import type { Film } from '@/types/film.types';
import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type WatchListContextType = {
  films: Film[];
  addFilm: (film: Film) => void;
  removeFilm: (id: string) => void;
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
  watchNumbers: () => string;
  isLoading: boolean;
  isError: boolean;
};
const WatchListContext = createContext<WatchListContextType | null>(null);

export function WatchListProvider({ children }: { children: ReactNode }) {
  const {
    data: serverFilms,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['films'], // klíč cache – unikátní identifikátor dotazu
    queryFn: () => fetch('/films.json').then((r) => r.json() as Promise<Film[]>),
    staleTime: 60_000, // přepíše global default
  });

  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    if (serverFilms) {
      setFilms(serverFilms);
    }
  }, [serverFilms]);

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

  function watchNumbers() {
    const watchedCount = films.filter((f) => f.watched).length;
    const totalCount = films.length;
    if (films.length === 0) {
      return 'Watchlist is empty.';
    }
    return `${watchedCount}/${totalCount} movies seen.`;
  }

  useEffect(() => {
    const watchedCount = films.filter((f) => f.watched).length;
    const totalCount = films.length;

    document.title = `Watchlist (${watchedCount}/${totalCount}) seen.`;
  }, [films]);

  return (
    <WatchListContext.Provider
      value={{
        films,
        addFilm,
        removeFilm,
        toggleWatched,
        markAllAsWatched,
        watchNumbers,
        isLoading,
        isError,
      }}
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
