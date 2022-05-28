import "./App.css";
import React, { useState, useEffect } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import ResultPage from "./Pages/ResultPage/ResultPage";

import axios from "axios";

// const express = require('express');
// const fs = require("fs");
// const path = require("path");
// const express = require('express');

// import { definition } from '../src/server/definition'
function App() {
  const [clicked, setclicked] = useState(false);
  const [fetching, setfetching] = useState(false);
  const [features, setfeatures] = useState({
    Dictionary: true,
    Definition: false,
    Sentence: false,
    Similarity: false,
    Translation: false,
    Input: "",
  });
  useEffect(() => {
    if (fetching) {

      // console.log("searching");
      // console.log( typeof( features.Input));
      
      let defword = {
        word: features.Input
      };

      axios
        .post("http://127.0.0.1:5000/dictionary", defword)
        .then((response) => {
          console.log(response.data);
        });

      setfetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    const features = JSON.parse(window.localStorage.getItem("features"));
    if (features) {
      setfeatures(features);
    }
  }, []);


  useEffect(() => {
    const local = window.localStorage.getItem("features");
    if (local === null) {
      window.localStorage.setItem("features", JSON.stringify(features));
    }
  }, [features]);

  useEffect(() => {
    if (clicked) {
      try {
        localStorage.setItem("features", JSON.stringify(features));
      } catch (error) {}
      setclicked(false);
    }
  }, [clicked, features]);
  if (features.Dictionary) {
    return (
      <div className="App">
        <Homepage
          features={features}
          setfeatures={setfeatures}
          clicked={clicked}
          setclicked={setclicked}
          fetching={fetching}
          setfetching={setfetching}
        />
      </div>
    );
  } else {
    return (
      <ResultPage
        features={features}
        setfeatures={setfeatures}
        clicked={clicked}
        setclicked={setclicked}
      />
    );
  }
}

export default App;
