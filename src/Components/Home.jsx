import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className='h1home'><h1  > Welcome to Rick and Mory Application</h1></div>
        
        <div className='homeCa'> <Link to="/character">Character</Link></div>
     
    </div>
  )
}

export default Home
