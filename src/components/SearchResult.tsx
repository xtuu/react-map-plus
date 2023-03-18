import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { LoadingPlaces } from './';
import { Feature } from '../interfaces/places';


export const SearchResult = () => {

    const [activeId, setActiveId] = useState('')

    const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);

    const { map, getRouteBetweenPoints } = useContext(MapContext)

    const onPlaceClicked = (place: Feature) => {
        setActiveId(place.id)
        const [lng, lat] = place.center;
        map?.flyTo({
            zoom: 14,
            center: [lng, lat]
        })
    }

    const classNames = (...classes: any) => {
        return classes.filter(Boolean).join(' ')
    }


    const getRoute = (place: Feature) => {
        if (!userLocation) return;
        const [lng, lat] = place.center

        getRouteBetweenPoints(userLocation, [lng, lat]);
    }

    if (isLoadingPlaces) {
        return (<LoadingPlaces />);
    }

    if (places.length === 0) {
        return <></>
    }



    return (
        <ul className='p-2 absolute z-10 mt-1 max-h-auto w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>

            {places.map((place) => (
                <li
                    key={place.id}
                    className={classNames(
                        activeId === place.id ? 'bg-gray-100' : 'bg-white',
                        'my-1 border-1 border-black cursor-pointer'
                    )}
                    onClick={() => onPlaceClicked(place)}
                >
                    <h6 className='ml-1 font-bold mb-1 text-left'>{place.text_es}</h6>
                    <p className='text-black text-xs'>
                        {place.place_name}
                    </p>
                    <button
                        onClick={() => getRoute(place)}
                        className='mt-2 mb-4 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                        Direcciones
                    </button>
                </li>

            ))}

        </ul>
    )
}
