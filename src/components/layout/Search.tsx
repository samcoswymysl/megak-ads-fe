import React, {FormEvent, useContext, useState} from 'react';

import './Search.css'

import {Button} from "../UI/Button";
import {SearchContext} from "../../context/search-context";

export const Search = () => {
    const {setSearch} = useContext(SearchContext)
    const [inputVal, setInputVal] = useState('')

   const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        setSearch(inputVal)
       setInputVal('')
    }


  return (
      <form className="search" onSubmit={submitHandler}>
          <input type="text" value={inputVal} onChange={e=> setInputVal(e.target.value)}/>
          <Button>Szukaj</Button>
      </form>
  )
}
