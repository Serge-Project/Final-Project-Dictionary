import React from 'react'
import Header from '../../Components/Header/Header'
import Home from '../../Components/Home/Home'
import '../Homepage/Homepage.css'

function Homepage(props) {
  return (
        <div className='homepage'>
            <Header features={props.features} 
                    setfeatures={props.setfeatures} 
                    clicked={props.clicked}
                    setclicked={props.setclicked}
                    
                    />
            <Home   features={props.features} 
                    setfeatures={props.setfeatures} 
                    clicked={props.clicked}
                    setclicked={props.setclicked}
                    fetching={props.fetching}
                    setfetching={props.setfetching} 
            />
        </div>
  )
}

export default Homepage