/* Stylingová metoda: Tailwind
 */
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { useState } from 'react';
import { StatsPage } from './pages/StatsPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 text-gray-900 p-6 dark:bg-black dark:text-white">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center justify-between mb-6 p-4 bg-white rounded-xl shadow-sm dark:bg-gray-900">
            <div className="flex items-center gap-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-3 py-1 rounded-lg transition font-medium
         ${
           isActive
             ? 'bg-black text-white dark:bg-white dark:text-black'
             : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800'
         }`
                }
              >
                My Watchlist
              </NavLink>

              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  `px-3 py-1 rounded-lg transition font-medium
         ${
           isActive
             ? 'bg-black text-white dark:bg-white dark:text-black'
             : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800'
         }`
                }
              >
                Watchlist statistics
              </NavLink>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-auto px-4 py-2 rounded-lg border transition
               bg-white text-black hover:bg-gray-100
               dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </nav>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
