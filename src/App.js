import React from "react";
import "./App.css";
const ReactDOM = require("react-dom");
const Chess = require("react-chess");
function App() {
  return (
    <div className="App">
      <div className="Boards">
        <Chess />
        <Chess />
      </div>
    </div>
  );
}

export default App;
