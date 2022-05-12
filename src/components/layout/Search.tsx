import React from 'react';

import './Search.css'

import {Button} from "../UI/Button";

export const Search = () => {
  return (
      <div className="search">
          <input type="text"/>
          <Button>Szukaj</Button>
      </div>
  )
}
