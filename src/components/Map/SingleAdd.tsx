import React, {useEffect, useState} from 'react';
import {AdEntity} from 'types'
import {apiUrl} from "../../config/api";

interface Props {
    id: string
}


export const  SingleAdd = (props: Props) => {

    const [ad, setAd]= useState<AdEntity | null>(null)

    useEffect(()=> {
        (async ()=>{
            const res = await fetch(`${apiUrl}/ad/id/${props.id}`)
            const data = await res.json()
            setAd(data)
        })()
    }, [props.id])


    if (ad === null) {
        return <h2>Wczytywanie...</h2>
    }

    return (
        <>
            <h2>{ ad.name }</h2>
            <p>{ad.description}</p>
            {ad.price !== 0 && <p>{ad.price}</p>}
            <a href={ad.url} target="_blank" rel="noreferrer">Otwórz ogłoszenie</a>
        </>
    )
}
