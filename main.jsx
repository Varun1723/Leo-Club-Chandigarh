import React from 'react';
import { createRoot } from 'react-dom/client';
import LeoClubApp from './leo_club_portal.tsx';
import './style.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode><LeoClubApp /></React.StrictMode>
);
