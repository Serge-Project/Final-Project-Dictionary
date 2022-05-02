import React from 'react'
import '../Header/Header.css'

function Header(props) {

  // console.log(props)

  const Def_styles = props.features.Definition === true ? 'active': 'inactive'
  const Sent_styles = props.features.Sentence === true ? 'active': 'inactive'
  const Sim_styles = props.features.Similarity === true ? 'active': 'inactive'
  const Trans_styles = props.features.Translation === true ? 'active': 'inactive'

  const HandleDef = () => {

    const timer = setTimeout(() => {
      props.setfeatures(prevState => ({
        ...prevState,
        Definition: true,
        Sentence: false,
        Similarity: false,
        Translation: false
      }));
    }, );
    props.setclicked(true)
  }

  const HandleSent = () => {
    props.setfeatures(prevState => ({
      ...prevState,
      Definition: false,
      Sentence: true,
      Similarity: false,
      Translation: false
   }));
   props.setclicked(true)
  }

  const HandleSim = () => {
    props.setfeatures(prevState => ({
      ...prevState,
      Definition: false,
      Sentence: false,
      Similarity: true,
      Translation: false
   }));
   props.setclicked(true)
  }

  const HandleTrans = () => {
    props.setfeatures(prevState => ({
      ...prevState,
      Definition: false,
      Sentence: false,
      Similarity: false,
      Translation: true
   }));
   props.setclicked(true)
}

  return (
    <div className='header_container'>
      <a href="#definition" className={Def_styles} onClick={HandleDef}>Definition</a>
      <a href="#sentence" className={Sent_styles} onClick={HandleSent}>Sentences</a>
      <a href="#similarity" className={Sim_styles} onClick={HandleSim}>Similarity</a>
      <a href="#translate" className={Trans_styles} onClick={HandleTrans}>English--Chinese</a>
    </div>
  )
}

export default Header
