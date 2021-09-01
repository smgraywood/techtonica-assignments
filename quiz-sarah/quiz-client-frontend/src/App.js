import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/question";

function App() {
  const [data, setData] = React.useState(null);

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
        <img src={logo} className="App-logo" alt="logo" />
        <Questions/>
        {/* <p>{!data ? "Loading..." : data.map(taco=>taco.title)}</p> */}
      </header>
    </div>
  );
}

export default App;
