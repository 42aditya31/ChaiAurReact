import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 1;

  const valueAdd = () => {
    if(counter <= 19){
    counter = counter + 1;
    setCounter(counter);
  }
  else{
    console.log("button cliked max time")
  }
  };

  const valueRemove = () => {
    if(counter >= 1){
    counter = counter - 1;
    setCounter(counter);
  }
  else{
    console.log("button cliked max time, the counter can't go in negative number ")
  }
  };

  return (
    <>
      <h1> Hello jiii</h1>
      <h2>This is the counter :{counter} </h2>

      <button onClick={valueAdd}>Increse </button>
      <br />
      <button onClick={valueRemove}>Decrese</button>
    </>
  );
}

export default App;
