import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Homepage from './Pages/Homepage/Homepage';
// import ResultPage from './Pages/ResultPage/ResultPage';

function App() {

  const [clicked, setclicked] = useState(false)
  const [features, setfeatures] = useState({
      Definition: true,
      Sentence: false,
      Similarity: false, 
      Translation: false
  })

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
   
  }, [features])

  return (
    <div className="App">
      <Homepage features={features} 
                setfeatures={setfeatures} 
                clicked={clicked} 
                setclicked={setclicked}
          />
      {/* <ResultPage/> */}
    </div>
  );
}

export default App;
