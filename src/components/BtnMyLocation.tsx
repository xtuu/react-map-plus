import { useContext } from 'react'
import { MapContext, PlacesContext } from '../context'


export const BtnMyLocation = () => {


    const { map, isMapReady } = useContext(MapContext)
    const { userLocation } = useContext(PlacesContext)

    const onClick = () => {


        if (!isMapReady) throw new Error('Mapa no esta lista')
        if (!userLocation) throw new Error('No hay ubicacion de usuario')


        map?.flyTo({
            zoom: 14,
            center: userLocation
        })


    }

    return (
        <button
            onClick={onClick}
            className='fixed top-2 right-2 z-50 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
            Mi Ubicacion
        </button>
    )
}
