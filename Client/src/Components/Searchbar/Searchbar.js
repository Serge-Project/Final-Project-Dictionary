import React from 'react'
import '../Searchbar/Searchbar.css'

function Searchbar(props) {
  function getVal() {
    
    const val = document.querySelector('input').value;
    props.setfeatures(prevState => ({
        ...prevState,
        Dictionary: true,
        Definition: false,
        Sentence: false,
        Similarity: false,
        Translation: false,
        Input: val
      }));
    props.setclicked(true)
  }

  return (
    <div className='searchBar' >
        <input type="text" placeholder='search...' name='search' onBlur={getVal}/>
    </div>
  )
}

export default Searchbar