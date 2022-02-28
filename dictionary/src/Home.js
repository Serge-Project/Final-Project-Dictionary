
import React from 'react'
import './Home.css'
import bgImage from './assets/Final background.mp4'
// import Homebox from './Components/Homebox/Homebox'
// import Navbar from './Components/Navbar/Navbar'

const home = () => {
  return (
    <div className='Parent'>
        
      

        <div className='video'>
            
          <video autoPlay loop muted >
                <source src={bgImage} type="video/mp4"/>
            </video>
        </div>

        <div className='homebox'>

        </div>

        {/* <div className='Firstbox'>1111111</div>
        <div className='Second-box'>2222222</div>
        <div className='third-box'>3333333</div> */}
        
          
    </div>
      
  )
}
export default home()