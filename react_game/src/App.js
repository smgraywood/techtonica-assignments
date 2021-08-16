import React, { useState } from "react";
import "./App.css";

export default function App(prop) {
  const [counter, setCounter] = useState(0);
  function decrement() {
    setCounter((counter) => counter - 1);
  }

  function increment() {
    setCounter((counter) => counter + 1);
  }

  // function clear() {
  //   setCounter(prop.number);
  // }

  function half() {
    setCounter((prevCount) => prevCount / 2);
  }

  function double() {
    setCounter((prevCount) => prevCount * 2);
  }

  return (
    <div className="App">
     <img src="https://media4.giphy.com/media/l41YtZOb9EUABnuqA/giphy.gif?cid=790b76115d13f2a23cfc915912f45636132232528a5109bb&rid=giphy.gif&ct=g"></img>
     <br/>

      <button onClick={decrement}> - </button>

      <span>{counter}</span>

      <button onClick={increment}>+</button>
      <button className="double" onClick={double}>
        double
      </button>
      <button className="half" onClick={half}>
        half
      </button>
      {/* <br/>
      <button className="clear" onClick={clear}>
        clear
      </button> */}
    </div>
  );
}

