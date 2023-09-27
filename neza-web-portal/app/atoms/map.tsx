
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RxColorWheel } from 'react-icons/rx';


export default function NairobiMap() {
  const [popupOpen, setPopupOpen] = useState(false);
  const mapCenter = [-1.286389, 36.817223];
  const nairobiBounds = [
    [-1.4642, 36.6544],
    [-1.1595, 37.0811],
  ];
  const leadPoisoningLocations = [
    { lat: -1.2801, lng: 36.8219, name: 'Location 1', percentage: 80},
    { lat: -1.2921, lng: 36.8212, name: 'Location 2', percentage: 60 },
    { lat: -1.2701, lng: 36.8719, name: 'Location 3', percentage: 20 },
    { lat: -1.3021, lng: 36.8214, name: 'Location 4', percentage: 50 },
    { lat: -1.2801, lng: 36.7219, name: 'Location 5', percentage: 70 },
    { lat: -1.2921, lng: 36.8112, name: 'Location 6', percentage: 10 },
  ];
  const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  return (
    <div style={{ height: '500px', width: '100%', marginTop: '3%' }}>
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
          <Marker key={index} position={[location.lat, location.lng]} icon={greenIcon}>
            <Popup>
              <div>
                <h3>{location.name}</h3>
                <p>Percentage: {location.percentage}%</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
