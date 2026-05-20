import FilmCard from './components/FilmCard';
const films = [
  { id: '1', title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 9, watched: true },
  { id: '2', title: 'The Matrix', year: 1999, genre: 'Sci-Fi', rating: 8, watched: false },
  { id: '3', title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 9, watched: true },
];
function App() {
  return (
    <>
      <h1>Films Watchlist</h1>
      {films.map((film) => (
        <FilmCard
          key={film.id}
          title={film.title}
          year={film.year}
          genre={film.genre}
          rating={film.rating}
          watched={film.watched}
          onToggleWatched={(title) => console.log('toggle:', title)}
        />
      ))}
    </>
  );
}

export default App;
