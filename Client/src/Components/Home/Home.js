import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import '../Home/Home.css'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Button } from '@mui/material';

function Home() {
  return (
    <div className='home'>

        <div className='searchTitle'>
            {/* Icon here */}
            <span className='firstLetter'> Your </span>
            <span className='secondLetter'> Dictionnary </span>
        </div>

        <div className='searchContainer'>
            <Searchbar/>
            <Button type="submit"> 
                <SearchTwoToneIcon/>
            </Button>
            
            {/* Searchbar Icon */}
        </div>

    </div>
  )
}

export default Home