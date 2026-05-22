import { useWatchList } from '@/context/WatchListContext';
import { useState } from 'react';

export function AddFilmForm() {
  const { addFilm } = useWatchList();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newFilm = {
      id: crypto.randomUUID(),
      title,
      year: Number(year),
      genre,
      rating: Number(rating),
      watched: false,
    };

    addFilm(newFilm);

    setTitle('');
    setYear('');
    setGenre('');
    setRating('');
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
      <h3 className="text-lg font-semibold">➕ Add new film</h3>

      {/* Inputs grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Rating (1–10)"
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Add film
      </button>
    </form>
  );
}

export default AddFilmForm;
