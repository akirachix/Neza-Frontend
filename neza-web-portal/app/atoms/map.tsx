import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngBoundsLiteral, LatLngTuple } from 'leaflet';
import { useFetchLocationData} from '../hooks/useLocations';
import { useFetchPercentageData } from '../hooks/usePercentagedata';

function LocationMarker({ location }: { location: { lat: number, lng: number, name: string, Percentage: string } }) {
  const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/leaf/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <Marker position={[location.lat, location.lng]} icon={greenIcon}>
      <Popup className='bg-green-500'>
        <div>
          <h2>{location.name}</h2>
          <p>Avg Blood Lead Level Percentage: {location.Percentage} %</p>
        </div>
      </Popup>
    </Marker>
  );
}

export default function NairobiMap() {
  const { locationData, fetchData: fetchLocationData } = useFetchLocationData();
  const { percentageData, fetchData: fetchPercentageData } = useFetchPercentageData();

  const leadPoisoningLocations = locationData 
  
  const mapCenter: LatLngTuple = [-1.286389, 36.817223];
  const nairobiBounds: LatLngBoundsLiteral = [
    [-1.4642, 36.6544],
    [-1.1595, 37.0811],
  ];

  if (!locationData) {
    console.error('Error fetching location data:', locationData);
  }
  if (!percentageData) {
    console.error('Error fetching percentage data:', percentageData);
  }
  return (
    <div>
      <div style={{ height: '580px', width: '100%' }}>
        <MapContainer
          center={mapCenter}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          bounds={nairobiBounds}
          minZoom={10}
          maxZoom={30}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapCenter}>
            <Popup>Nairobi, Kenya</Popup>
          </Marker>
          leadPoisoningLocations((location: any, index: React.Key | null | undefined) = (
          ))
        </MapContainer>
      </div>
    </div>
  );
}
