import { useRef, ChangeEvent, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResult } from './';


export const SearchBar = () => {

    const { searchPlacesByTerm } = useContext(PlacesContext)

    //manejar el Bounce de forma manual 
    //esto nos permite manejar la cantidad de peticiones HTTP
    const debounRef = useRef<NodeJS.Timeout>()

    const OnQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {

        if (debounRef.current)
            clearTimeout(debounRef.current)

        debounRef.current = setTimeout(() => {
            //buscar algo
            console.log('debounce value', event.target.value)
            searchPlacesByTerm(event.target.value)
        }, 450);

    }
    ////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <div className='fixed top-2 left-2 z-50'>
                <input
                    type="text"
                    className="w-auto h-6 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
                    placeholder="Buscar lugar ... "
                    onChange={OnQueryChanged}
                />
                <SearchResult />

            </div>
        </>


    )
}
