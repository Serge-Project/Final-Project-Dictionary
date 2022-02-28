
import React from 'react'
import './Home.css'
import bgImage from './assets/Final background.mp4'

const home = () => {
  return (
    <div>
        <video autoPlay loop muted >
              <source src={bgImage} type="video/mp4"/>
          </video>
    </div>
  )
}
export default home()