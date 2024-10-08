import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className='h1home'><h1  > Welcome to Rick and Mory Pages</h1></div>
        
     <Link to="/character">Character</Link>
    </div>
  )
}

export default Home
