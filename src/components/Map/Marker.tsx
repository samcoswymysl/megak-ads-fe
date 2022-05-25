import React from 'react';
import {Marker, Popup} from "react-leaflet";
import { AdListElement } from "types";
import {SingleAdd} from "./SingleAdd";



export const MarkerComponent = (props: AdListElement) => {


    return (
        <Marker position={[props.lat, props.lon]} >
            <Popup>
                <SingleAdd id={props.id}/>
            </Popup>

        </Marker>
    )
}
