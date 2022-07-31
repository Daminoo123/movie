import React from 'react'
import Form from 'react-bootstrap/Form';

export const Filter= (inputsearch,setinputsearch) => {
  return (
    <div>
        <Form.control type='text' placeholder='search for movies'
        value={inputsearch}
        onChange={(e)=>setinputsearch(e.target.value)}/>


    </div>
  )
}
