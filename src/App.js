import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { setupGame } from "./actions";
import Board from "./Board.js";
import List from "./List.js";
const Chess = require("react-chess");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(setupGame(Chess.getDefaultLineup()));
  }
  render() {
    return (
      <div className="App">
        <div className="Boards">
          <Board />
          <Board rotated={true} />
          <div className="turn">{this.props.turn} to move</div>
        </div>
        <div className="List">
          <List />
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
