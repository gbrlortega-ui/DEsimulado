import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EstatisticasTeste } from './EstatisticasTeste';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EstatisticasTeste />
  </StrictMode>,
);
