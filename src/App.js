import React from "react";
import requests from "./requests.js";
import Row from "./Components/Row.js";
import Main from "./Components/Main.js";
import Header from "./Components/Header.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main fetchUrl={requests[3].url} />
      {requests.map((item, index) => {
        return (
          <div key={index}>
            <Row title={item.name} fetchUrl={item.url} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
