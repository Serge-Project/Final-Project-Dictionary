import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import '../Home/Home.css'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Button } from '@mui/material';

function Home(props) {

  function getVal() {
    props.setfeatures(prevState => ({
      ...prevState,
      Dictionary: false,
      Definition: true,
      Sentence: false,
      Similarity: false,
      Translation: false,
    }));
  props.setclicked(true)
  props.setfetching(true)
  }

  return (
    <div className='home'>
        <div className='searchTitle'>
            {/* Icon here */}
            <span className='firstLetter'> Your </span>
            <span className='secondLetter'> Dictionary </span>
        </div>

        <div className='searchContainer'>
          
          <form id='input'>
             <Searchbar features={props.features} 
                        setfeatures={props.setfeatures} 
                        clicked={props.clicked}
                        setclicked={props.setclicked}
             />

          </form>
            <Button type="submit" > 
                <SearchTwoToneIcon onClick={getVal}/>
            </Button>
            {/* Searchbar Icon */}
        </div>

    </div>
  )
}

export default Home