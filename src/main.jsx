import React from 'react';
import ReactDOM from 'react-dom/client'; // Aquí está la corrección
import './index.css';
import { BrowserRouter } from "react-router-dom";

// main.js o index.js
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);

import Rutas from './Rutas.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Rutas />
  </BrowserRouter>
);