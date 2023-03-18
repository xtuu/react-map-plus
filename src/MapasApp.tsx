import { MapProvider, PlacesProvider } from './context'
import { HomePage } from './pages'



if (!navigator.geolocation) {
  alert('Tu navegador no tiene esta opcion de Geolocation')
  throw new Error('Tu navegador no tiene esta opcion de Geolocation')
}


export const MapasApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomePage />
      </MapProvider>
    </PlacesProvider>
  )
}
