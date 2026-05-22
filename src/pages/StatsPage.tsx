import { useWatchList } from '@/context/WatchListContext';

export function StatsPage() {
  const { films } = useWatchList();
  const filmsWatched = films.filter((f) => f.watched).length;
  const filmsUnwatched = films.filter((f) => !f.watched).length;
  const averageRating =
    films.length === 0
      ? 0
      : films.reduce((sum, film) => sum + Number(film.rating), 0) / films.length;

  return (
    <div
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800"
    >
      <h2 className="text-xl font-semibold mb-4">📊 Watchlist Stats</h2>

      <table className="w-full text-left">
        <tbody className="space-y-2">
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <th className="py-3 font-medium text-gray-700 dark:text-gray-300">
              Total films in watchlist
            </th>
            <td className="py-3 font-semibold">{films.length}</td>
          </tr>

          <tr className="border-b border-gray-200 dark:border-gray-800">
            <th className="py-3 font-medium text-gray-700 dark:text-gray-300">Films watched</th>
            <td className="py-3 font-semibold">{filmsWatched}</td>
          </tr>

          <tr className="border-b border-gray-200 dark:border-gray-800">
            <th className="py-3 font-medium text-gray-700 dark:text-gray-300">Films not watched</th>
            <td className="py-3 font-semibold">{filmsUnwatched}</td>
          </tr>

          <tr>
            <th className="py-3 font-medium text-gray-700 dark:text-gray-300">Average rating</th>
            <td className="py-3 font-semibold">⭐ {averageRating.toFixed(1)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
