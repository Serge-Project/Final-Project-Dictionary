import './App.css';
import React, { useState, useEffect } from 'react';
import Homepage from './Pages/Homepage/Homepage';
// import ResultPage from './Pages/ResultPage/ResultPage';

function App() {

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
    // console.log("This is local:  ", local)
    if( local === null) {
      // console.log("Not yet")
      window.localStorage.setItem("features", JSON.stringify(features));
    }else{
      // console.log('yes you have')
    }
  }, [features]);

  
  const handleLocal = () => {
    console.log(features)
    localStorage.setItem("features", JSON.stringify(features));
  }


  return (
    <div className="App">
      <Homepage features={features} setfeatures={setfeatures} handleLocal={handleLocal} />
      {/* <ResultPage/> */}
    </div>
  );
}

export default App;
