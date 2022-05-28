import React from 'react'
import '../Header/Header.css'

function Header(props) {

  // console.log(props)

  const Dictio_styles = props.features.Dictionary === true ? 'active': 'inactive'
  const Def_styles = props.features.Definition === true ? 'active': 'inactive'
  const Sent_styles = props.features.Sentence === true ? 'active': 'inactive'
  const Sim_styles = props.features.Similarity === true ? 'active': 'inactive'
  const Trans_styles = props.features.Translation === true ? 'active': 'inactive'

  
  const HandleDictio = () => {
    props.setfeatures(prevState => ({
      ...prevState,
      Dictionary: true,
      Definition: false,
      Sentence: false,
      Similarity: false,
      Translation: false,
      Input: ""
    }));
  props.setclicked(true)
}


  const HandleDef = () => {
      props.setfeatures(prevState => ({
        ...prevState,
        Dictionary: false,
        Definition: true,
        Sentence: false,
        Similarity: false,
        Translation: false,
        Input: ""
      }));
    props.setclicked(true)
  }

  const HandleSent = () => {
    props.setfeatures(prevState => ({
      ...prevState,
      Dictionary: false,
      Definition: false,
      Sentence: true,
      Similarity: false,
      Translation: false,
      Input: ""
   }));
   props.setclicked(true)
  }

  const HandleSim = () => {
    props.setfeatures(prevState => ({
      ...prevState,
      Dictionary: false,
      Definition: false,
      Sentence: false,
      Similarity: true,
      Translation: false,
      Input: ""
   }));
   props.setclicked(true)
  }

  const HandleTrans = () => {
    props.setfeatures(prevState => ({
      ...prevState,
      Dictionary: false,
      Definition: false,
      Sentence: false,
      Similarity: false,
      Translation: true,
      Input: ""
   }));
   props.setclicked(true)
}

  return (
    <div className='header_container'>
      <a href="#dictionary" className={Dictio_styles} onClick={HandleDictio}>Your Dictionary</a>
      <a href="#definition" className={Def_styles} onClick={HandleDef}>Definition</a>
      <a href="#sentence" className={Sent_styles} onClick={HandleSent}>Sentences</a>
      <a href="#similarity" className={Sim_styles} onClick={HandleSim}>Similarity</a>
      <a href="#translate" className={Trans_styles} onClick={HandleTrans}>English--Chinese</a>
    </div>
  )
}

export default Header
