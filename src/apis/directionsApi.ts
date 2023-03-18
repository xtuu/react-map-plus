import axios from 'axios';
import { mapboxToken } from '../helpers/constant';



const directionsApi = axios.create({
    baseURL: `https://api.mapbox.com/directions/v5/mapbox/driving`,
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: mapboxToken
    }
})


export default directionsApi;
