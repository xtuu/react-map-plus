import { MapState } from './MapProvider';
import { Map, Marker } from 'mapbox-gl';


type MapAction =
    | { type: 'setMapAction', payload: Map }
    | { type: 'setMarkers', payload: Marker[] }

export const mapReducer = (state: MapState, action: MapAction): MapState => {

    switch (action.type) {
        case 'setMapAction':
            return {
                ...state,
                isMapReady: true,
                map: action.payload
            }

            case 'setMarkers':
                return {
                    ...state,
                    markers: action.payload
                }

        default:
            return state;
    }


}