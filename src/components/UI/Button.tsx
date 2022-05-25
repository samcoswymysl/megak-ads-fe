import React from 'react';
import './Button.css'
import {Link} from "react-router-dom";

interface Props {
    children? : React.ReactNode;
    to?: string;
}

export const Button = (props: Props) => {

    return (
        props.to ?
            <Link className="button" to={props.to}>{props.children}</Link>
            :  <button>{props.children}</button>

    )
}
