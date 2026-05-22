import { useWatchList } from '@/context/WatchListContext';
import { Dialog, DialogPanel } from '@headlessui/react';
import { useState } from 'react';

export function AddFilmForm() {
  const { addFilm } = useWatchList();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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

    addFilm(newFilm);

    setTitle('');
    setYear('');
    setGenre('');
    setRating('');

    setIsOpen(false);
  }

  return (
    <>
    <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition dark:bg-gray-200 dark:text-black dark:hover:bg-gray-400"
            >
              Add film
            </button>
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 flex items-center justify-center bg-black/30">
        <DialogPanel>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
            <h3 className="text-lg font-semibold">➕ Add new film</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="px-3 py-2 border rounded-lg"
              />

              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Year"
                className="px-3 py-2 border rounded-lg"
              />

              <input
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Genre"
                className="px-3 py-2 border rounded-lg"
              />

              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="Rating (1–10)"
                className="px-3 py-2 border rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded-lg"
            >
              Add film
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
    </>
  );
}

export default AddFilmForm;
