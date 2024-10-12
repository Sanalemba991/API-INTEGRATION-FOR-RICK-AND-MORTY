import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function ReadForLocation() {

const {id}=useParams;
const[location,setLocation]=(null);
useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((response) => setLocation(response.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div>
      
    </div>
  )
}

export default ReadForLocation
