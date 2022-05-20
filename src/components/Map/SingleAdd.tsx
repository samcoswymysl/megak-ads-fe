import React, {useEffect, useState} from 'react';
import {AdEntity} from 'types'

interface Props {
    id: string
}


export const  SingleAdd = (props: Props) => {

    const [ad, setAd]= useState<AdEntity | null>(null)

    useEffect(()=> {
        (async ()=>{
            console.log('xxxx')
            const res = await fetch(`http://localhost:5000/ad/id/${props.id}`)
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
            <a href={ad.url} target="_blank">Otwórz ogłoszenie</a>
        </>
    )
}
