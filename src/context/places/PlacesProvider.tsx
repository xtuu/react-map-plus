import { useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../apis';
import { Feature, PlacesResponse } from '../../interfaces/places';



export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]
    isLoadingPlaces: boolean;
    places: Feature[]
}


const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
}


interface Props {
    children: JSX.Element | JSX.Element[]
}


export const PlacesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)


    useEffect(() => {
        getUserLocation()
            .then(LngLat => dispatch({ type: 'setUserLocation', payload: LngLat }))
    }, []);


    const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
        if (query.length === 0) {
            dispatch({ type: 'setPlaces', payload: [] })
            return []
        }

        if (!state.userLocation) throw new Error('No hay ubicacion del usuario')

        dispatch({ type: 'setLoadingPlaces' });

        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        });

        dispatch({ type: 'setPlaces', payload: resp.data.features });
        return resp.data.features
    }


    return (
        <PlacesContext.Provider value={{
            ...state,
            //Methods
            searchPlacesByTerm
        }}>

            {children}
        </PlacesContext.Provider>
    )
}
