import { Button } from '@mui/material'
import React from 'react'
import '../ResultPage/ResultPage.css'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import DefinitionContainer from '../../Components/DefinitionContainer/DefinitionContainer';

function ResultPage() {
    const handleclick =() => {
        console.log("oomkmkmkmk")
    }
  return (
    <div className='resultPageContainer'>

        {/* Banner */}
        <div className='bannerContainer'>
                <span className='dictionnary'> Your Dictionnary </span>
                <a href="#definition" className="active">Definition</a>
                <a href="#quotes">Quotes</a>
                <a href="#sentence">Sentences</a>
                <a href="#synonym">Synonym</a>
                <a href="#language">English/Chinese</a>
        </div>

        {/* Stick SearBar */}
        <div className='stickSearchBar'>
            <form onSubmit={handleclick}>
                <input type='text' placeholder='Baton...'  />
            </form>
            <Button>
                <SearchTwoToneIcon onClick={handleclick} />
            </Button>
        </div>

        {/* Lookep Up word container */}
        <div className='lookUpWord'>
            <span className='word'> Baton </span>
            <span className='itemCategory'> meaning </span>
        </div>

        {/* Definition container */}
        <DefinitionContainer />
        <DefinitionContainer/>
        <DefinitionContainer/>

        {/* <div className='definitionContainer'>
            
            <div className='title'>
                <span className='wordDef'> baton </span>
                <span className='description'> noun </span>
                <span className='wordDef'> MUSIC </span>
            </div>

            <div className='definition'>
                <p> a stick used by a conductor (= person who controls the performance of a groupe musicians) to show the speed of the music. </p>
                <div className='exampleContainer'>
                    <div className='exampleBlock'>
                        <SpellcheckTwoToneIcon fontSize='small'/>
                        <span className='example1'> Example 1 </span>
                    </div>
                    <div className='exampleBlock'>
                        <SpellcheckTwoToneIcon fontSize='small'/>
                        <span className='example2'> Example 2 </span>
                    </div>
                </div>
            </div>

            <div className='moreExamples'>
                <span> See more Examples </span>
            </div>

        </div> */}

    </div>
  )
}

export default ResultPage