import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Map = ({ stops }) => {
  // Check if stops is defined before mapping
  if (!stops || stops.length === 0) {
    return <p>Loading...</p>;
  }

  // Extract lat/lon pairs for the polyline
  const route = stops.map(stop => [stop.stop_lat, stop.stop_lon]);

  // Calculate the midpoint of the route
  const totalStops = stops.length;
  const avgLat = stops.reduce((sum, stop) => sum + stop.stop_lat, 0) / totalStops;
  const avgLon = stops.reduce((sum, stop) => sum + stop.stop_lon, 0) / totalStops;
  const center = [avgLat, avgLon];

  return (
    <div>
      <MapContainer center={center} zoom={12} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {stops.map((stop, index) => (
          <Marker key={index} position={[stop.stop_lat, stop.stop_lon]}>
            <Popup>{stop.stop_name}</Popup>
          </Marker>
        ))}
        <Polyline positions={route} color="black" weight={3} />
      </MapContainer>
    </div>
  );
};

export default Map;