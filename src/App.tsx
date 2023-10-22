import React, {useState} from 'react';
import './App.css';

function App() {
  let[a, setA] =useState(1)
  const onClickHandler=() => {
    setA(a + 1);


  }
  const onClickReset =() => {
      setA(0);
  }
  return (
      <div className= "App">
        <h1>{a}</h1>
        <button onClick = {onClickHandler}>number</button>
        <button onClick = {onClickReset}>0</button>
    </div>
  );
}

export default App;
