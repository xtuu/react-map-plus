import axios from 'axios';
import { mapboxToken } from '../helpers/constant';



const searchApi = axios.create({
    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places`,
    params: {
        limit: 5,
        language: 'es',
        access_token: mapboxToken
    }
})


export default searchApi;
