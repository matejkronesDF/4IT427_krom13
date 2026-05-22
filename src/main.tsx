import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { WatchListProvider } from './context/WatchListContext.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <WatchListProvider>
        <App />
      </WatchListProvider>
    </BrowserRouter>
  </StrictMode>
);
