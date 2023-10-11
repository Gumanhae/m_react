
import React from "react";
import { useState, useEffect } from "react";

import Button from "./Button";
import styles from "./App.module.css"

import { hot } from 'react-hot-loader/root';

function Hello() {
  useEffect(() => {
    console.log("Im here!");
  }, [])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {setShowing((prev) => !prev)};
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "Hide" : "Show"} </button>
    </div>
  )
}

export default hot(App);
