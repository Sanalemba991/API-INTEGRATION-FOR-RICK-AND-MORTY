import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className='h1home'><h1  > Welcome to Rick and Morty Web Application</h1></div>
        <div className='Sm'>
        <div className='homeCa'> <Link to="/character">Character</Link></div>
        <div className='homeCa'> <Link to="/episode">Episode</Link></div>
        <div className='homeCa'> <Link to="/location">Location</Link></div>
        
        </div>
    </div>
  )
}

export default Home
