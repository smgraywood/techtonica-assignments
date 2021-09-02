import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/question";

function App() {
  const [data, setData] = React.useState(null);
  const [counter, setCounter] = React.useState(0)

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => 
      {
        setData(data)
      console.log(data)
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">

       <h1>Cactus Quiz</h1>
      
        <p>{!data ? "Loading..." :  
        <Questions 
        allQuestions={ data }
        currentQuestion1 = { 0 }
        currentQuestion2 = { 1 }
        currentQuestion3 = { 2 }
        currentQuestion4 = { 3 }
        currentQuestion5 = { 4 }
        currentQuestion6 = { 5 }
        currentQuestion7 = { 6 }
        currentQuestion8 = { 7 }
        currentQuestion9 = { 8 }
        currentQuestion10 = { 9 }
        />}
        
        </p>
        
      </header>
    </div>
    
  );
}

export default App;
