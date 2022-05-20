import React from 'react';
import './Header.css'
import {Button} from "../UI/Button";
import {Search} from "./Search";

export const Header = () => {
    return (
        <header>
            <h1><strong>Mega</strong> ogłoszenia</h1>
            <Button to="/add">Dodaj ogłoszenie</Button>
            <Search/>
        </header>
    )
}
