//Vytvořte komponentu src/components/AddFilmForm.tsx s kontrolovanými inputy pro title, year, genre a rating.
// Po odeslání formuláře zavolejte addFilm z contextu.

import { useWatchList } from '@/context/WatchListContext';
import { useState } from 'react';

export function AddFilmForm() {
  const { addFilm } = useWatchList();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    const newFilm = {
      id: crypto.randomUUID(),
      title,
      year: Number(year),
      genre,
      rating: Number(rating),
      watched: false,
    };
    console.log(newFilm.id);

    addFilm(newFilm);

    setTitle('');
    setYear('');
    setGenre('');
    setRating('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />

      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
      />

      <input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />

      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
      />

      <button type="submit">Přidat film</button>
    </form>
  );
}

export default AddFilmForm;
