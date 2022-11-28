import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

const Map = (props) => {
  return (
    <div>
    <GoogleMap 
      defaultZoom={17.6}
      defaultCenter={{ lat: props.lat, lng: props.lon }}
      isMarkerShown={true}
      
    >
       <Marker position={{ lat: props.lat, lng: props.lon }} />
    </GoogleMap>
    
    
    </div>
  )
}

export default withScriptjs(
  withGoogleMap(
    Map
  )
)