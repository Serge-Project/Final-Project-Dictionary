import { Button } from '@mui/material'
import React from 'react'
import '../ResultPage/ResultPage.css'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
// import DefinitionContainer from '../../Components/DefinitionContainer/DefinitionContainer';
import ResultHeader from '../../Components/Header/ResultHeader'


function ResultPage(props) {
    const handleclick =() => {
        console.log("oomkmkmkmk")
    }

    var Upper_Text = ""
    if(props.features.Definition) {
        Upper_Text = "Definition"
    } else if(props.features.Sentence) {
        Upper_Text = "Example"
    } else if(props.features.Similarity) {
        Upper_Text = "Similarity"
    } else if(props.features.Translation) {
        Upper_Text = "Translation"
    }
    
    
  return (
    <div className='resultPageContainer'>

        {/* ResultBanner */}
        < ResultHeader  features={props.features} 
                        setfeatures={props.setfeatures} 
                        clicked={props.clicked}
                        setclicked={props.setclicked}
            />

        {/* Stick SearBar */}
        <div className='stickSearchBar'>
           <div>
                <div className='TextAbove'>
                    {Upper_Text}
                </div>
            <form onSubmit={handleclick}>
                    <input type='text' placeholder='Search...'  />
                </form>
           </div>
            <div>
                <Button>
                    <SearchTwoToneIcon onClick={handleclick} />
                </Button>
            </div>
        </div>

    </div>
  )
}

export default ResultPage