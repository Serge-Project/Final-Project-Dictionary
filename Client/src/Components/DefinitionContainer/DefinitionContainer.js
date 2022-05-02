import React from 'react'
import SpellcheckTwoToneIcon from '@mui/icons-material/SpellcheckTwoTone';
import '../DefinitionContainer/DefinitionContainer.css'

function DefinitionContainer() {
  return (
    <div className='definitionContainer'>
            
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
            
        </div>
  )
}

export default DefinitionContainer