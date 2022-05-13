import React from 'react'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import '../../utils/fix-map-icons'

import './Map.css'


export const Map = () => {

    return (
        <div className="map">
            <MapContainer center={[50.2657152, 18.9945088]} zoom={500}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[50.2657152, 18.9945088]}>
                    <Popup>
                        <h2>It-focus</h2>
                        <p>Firma Kuby</p>
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
    )
}

