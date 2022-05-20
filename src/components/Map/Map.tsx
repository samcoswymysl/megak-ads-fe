import React, {useContext, useEffect, useState} from 'react'
import {MapContainer, TileLayer} from "react-leaflet";
import {SearchContext} from "../../context/search-context";
import {MarkerComponent} from './Marker'
import {AdListElement} from 'types'

import 'leaflet/dist/leaflet.css'
import '../../utils/fix-map-icons'
import './Map.css'



export const Map = () => {
   const {search} = useContext(SearchContext)
    const [ads, setAds] = useState<AdListElement[]>([])

    useEffect(()=> {
        
        (async()=> {
            console.log('map')
            const res = await fetch(`http://localhost:5000/ad/search/${search}`)
            const data = await res.json()
            setAds(data)

        })()

    },[search])


    return (
        <div className="map">
            <MapContainer center={[50.2657152, 18.9945088]} zoom={500}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                {
                    ads.map(ad => <MarkerComponent {...ad} key={ad.id}/>)

                }



            </MapContainer>
        </div>
    )
}

