import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { WatchListProvider } from './context/WatchListContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WatchListProvider>
      <App />
    </WatchListProvider>
  </StrictMode>
);
