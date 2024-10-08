import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <h1 > Welcome to Rick and Mory Pages</h1>
     <Link to="/character">Character</Link>
    </div>
  )
}

export default Home
