import './App.css';
import React, { useState, useEffect } from 'react';
import Homepage from './Pages/Homepage/Homepage';
import ResultPage from './Pages/ResultPage/ResultPage';




// const express = require('express');
const fs = require('fs');
const path = require('path');
// const express = require('express');

// import { definition } from '../src/server/definition'
function App() {

  const [clicked, setclicked] = useState(false)
  const [fetching, setfetching] = useState(false)
  const [features, setfeatures] = useState({
      Dictionary: true,
      Definition: false,
      Sentence: false,
      Similarity: false, 
      Translation: false, 
      Input: ""
  })
  useEffect(() => {
    if(fetching) {
      const PORT = process.env.PORT || 3000;  // always listen for preset environement port otherwise listen to port 3000
      const NODE_ENV = process.env.NODE_ENV || 'development'; 

     
  
      setfetching(false)

    }

  }, [fetching])

 

  useEffect(() => {
    const features = JSON.parse(window.localStorage.getItem('features'));
    if (features) {
      setfeatures(features);
    }
  }, []);

  useEffect(() => {
    const local = window.localStorage.getItem('features');
    if( local === null) {
      window.localStorage.setItem("features", JSON.stringify(features));
    }
  }, [features]);

  useEffect(() => {
    if(clicked) {
        try {
          localStorage.setItem("features", JSON.stringify(features))
        } catch (error) {}
        setclicked(false)
    }
   
    
  }, [clicked, features])
  if(features.Dictionary){
    return (
      <div className="App">
        <Homepage features={features} 
                  setfeatures={setfeatures} 
                  clicked={clicked} 
                  setclicked={setclicked}
                  fetching={fetching}
                  setfetching={setfetching}
            />
      </div>
    );
  } else {
    return (
       <ResultPage  features={features} 
                    setfeatures={setfeatures} 
                    clicked={clicked} 
                    setclicked={setclicked}
            /> 
    )
  }

}

export default App;
