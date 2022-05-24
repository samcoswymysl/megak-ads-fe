import React, {SyntheticEvent, useState} from 'react';

import './AddForm.css'
import {Button} from "../UI/Button";
import {geocode} from "../../utils/geoCoding";

export const AddForm = () => {
    const [addressEr, setAddressEr] = useState(false)
    const [id, setId] = useState('')
    const [loading,setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        url: '',
        address: '',
    })

    const updateForm = (key:string, value: any) => {
        setForm((prev)=> {
            return {
                ...prev,
                [key]: value,
            }})
    };

    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();
        setAddressEr(false);
        setLoading(true)

     try {
            const geoData  = await geocode(form.address)
         if(geoData === null){
             setAddressEr(true)
             return
         }
         const res = await fetch('http://localhost:5000/ad', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 ...form, ...geoData
             })
         })

         const data = await res.json()
         setId(data)

     } finally {
         setLoading(false)
     }
    }

    const addNextAddHandler = () =>{
        setId('');
        setForm({
            name: '',
            description: '',
            price: 0,
            url: '',
            address: '',
        });
    }


    if(loading) {
        return <h2>Trwa dodawanie ogłoszenia...</h2>
    }

    if(id.length > 0) {
        return <>
            <h2>Twoje ogłoszenie {form.name} zostało dodane</h2>
            <button onClick={addNextAddHandler}>Dodaj następne</button>
        </>
    }


    return (
        <form className="add-form" onSubmit={saveAd}>
            <h1>Dadawanie ogłoszenia</h1>
            <p>
                <label>
                    Tytuł ogłoszenia:
                    <input
                        type="text"
                        name="name"
                        required
                        maxLength={99}
                        value={form.name}
                        onChange={(e)=> updateForm('name' ,e.target.value)}
                    />
                </label>
            </p>

            <p>
                <label>
                    Opis:<br/>
                    <textarea
                        name="description"
                        maxLength={999}
                        value={form.description}
                        onChange={(e)=> updateForm('description' ,e.target.value)}
                    />
                </label>
            </p>

            <p>
                <label>
                    Cena:
                    <input
                        type="number"
                        name="price"
                        step={0.01}
                        maxLength={99}
                        value={form.price}
                        onChange={(e)=> updateForm('price' ,Number(e.target.value))}
                    />
                    <br/>
                    <small>Pozostaw 0 w polu jeśli nie chcesz wyświetlać ceny</small>
                </label>
            </p>

            <p>
                <label>
                    Link do portalu aukcyjnego:
                    <input
                        type="url"
                        name="url"
                        maxLength={299}
                        value={form.url}
                        onChange={(e)=> updateForm('url' ,e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Twój adres:
                    <input
                        type="text"
                        name="address"
                        maxLength={299}
                        value={form.address}
                        onChange={(e)=> updateForm('address', e.target.value)}
                    />
                    <br/>
                    {
                        addressEr &&  <small>Nie znaleziono adresu upewnij się że wpisano poprawnie. Nie używaj ul i nr dla ulic i numerów</small>
                    }
                </label>
            </p>

            <Button>Dodaj</Button>
        </form>
    )
}
