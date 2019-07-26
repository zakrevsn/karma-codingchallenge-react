import React from "react";
import "./App.css";
import Board from "./Board.js";
const ReactDOM = require("react-dom");
function App() {
  return (
    <div className="App">
      <div className="Boards">
        <Board />
        <Board />
      </div>
    </div>
  );
}

export default App;
