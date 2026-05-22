interface FilmCardProps {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
  onToggleWatched: (id: string) => void;
  onRemove: (id: string) => void;
}

function FilmCard({
  id,
  title,
  year,
  genre,
  rating,
  watched,
  onToggleWatched,
  onRemove,
}: FilmCardProps) {
  const validRating = rating >=1 && rating <= 10;
  return (
    <div
      className={`p-4 rounded-xl shadow-sm border transition flex justify-between items-center
      ${watched ? "bg-green-50 border-green-200" : "bg-white border-gray-200 dark:bg-gray-200"}
      hover:shadow-md`}
    >
      {/* Left side */}
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>

          {watched && (
            <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
              Watched
            </span>
          )}
        </div>

        <p className="text-sm text-gray-500">
          {year} • {genre} • {validRating ? `⭐ ${rating}/10` : "❌ Chybný rating"}
        </p>
      </div>

      {/* Right side buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => onToggleWatched(id)}
          className={`px-3 py-1 rounded-lg text-sm transition
            ${
              watched
                ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
        >
          {watched ? "Unwatch" : "Watch"}
        </button>

        <button
          onClick={() => onRemove(id)}
          className="px-3 py-1 rounded-lg text-sm bg-red-100 text-red-700 hover:bg-red-200 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default FilmCard;
