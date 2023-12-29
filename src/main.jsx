import React from 'react';
import ReactDOM from 'react-dom/client'; // Aquí está la corrección
import './index.css';
import { BrowserRouter } from "react-router-dom";


import Rutas from './Rutas.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Rutas />
  </BrowserRouter>
);