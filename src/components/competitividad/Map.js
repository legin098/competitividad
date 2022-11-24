import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const Map = (props) => {
  return (
    <GoogleMap 
      defaultZoom={20}
      defaultCenter={{ lat: 4.16216090346931, lng: -73.63903318625198 }}
      //4.127158600723892, -73.63914548957379
      //4.16216090346931, -73.63903318625198
    />
  )
}
export default withScriptjs(
  withGoogleMap(
    Map
  )
)