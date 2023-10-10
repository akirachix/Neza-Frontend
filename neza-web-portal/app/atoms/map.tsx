import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { fetchLocationData, fetchPercentageData } from '../hooks/useLocations';

function LocationMarker({ location }) {
  const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
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
  const [leadPoisoningLocations, setLeadPoisoningLocations] = useState([]);

  const mapCenter = [-1.286389, 36.817223];
  const nairobiBounds = [
    [-1.4642, 36.6544],
    [-1.1595, 37.0811],
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const locationData = await fetchLocationData();
        console.log('Location data length:', locationData.length);

        const locationsWithPercentage = locationData.map((location) => ({
          ...location,
          Percentage: '',
        }));

        const percentageData = await fetchPercentageData();
        console.log('Percentage data:', percentageData);

        if (Array.isArray(percentageData.prediction)) {
          if (locationData.length !== percentageData.prediction.length) {
            console.error('Error: Percentage data length does not match location data length.');
            return;
          }

          const updatedLocations = locationsWithPercentage.map((location, index) => {
            const percentageValue = percentageData.prediction[index];
            const updatedLocation = {
              ...location,
              Percentage: percentageValue.toString(),
            };
            return updatedLocation;
          });
          setLeadPoisoningLocations(updatedLocations);
        } else {
          console.error('Error: Percentage data is not an array.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ height: '520px', width: '100%' }}>
        <MapContainer
          center={mapCenter}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          maxBounds={nairobiBounds}
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
          {leadPoisoningLocations.map((location, index) => (
            <LocationMarker key={index} location={location} />
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
