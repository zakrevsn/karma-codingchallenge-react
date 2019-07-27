import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { setupGame } from "./actions";
import Board from "./Board.js";
const Chess = require("react-chess");
const ReactDOM = require("react-dom");
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(setupGame(Chess.getDefaultLineup()));
  }
  render() {
    return (
      <div className="App">
        <div className="Boards">
          <Board />
          <Board />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  if (!state) {
    return {};
  }
  return state;
}

export default connect(mapStateToProps)(App);
