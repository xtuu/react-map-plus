import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MapasApp } from './MapasApp';


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { mapboxToken } from './helpers/constant';

const token: string = mapboxToken!
mapboxgl.accessToken = token;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapasApp />
  </React.StrictMode>
);


