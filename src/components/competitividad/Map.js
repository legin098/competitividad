import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const Map = (props) => {
  return (
    <GoogleMap 
      defaultZoom={20}
      defaultCenter={{ lat: props.lat, lng: props.lon }}
    />
  )
}
export default withScriptjs(
  withGoogleMap(
    Map
  )
)