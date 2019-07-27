import React from "react";
import { connect } from "react-redux";
import Move from "./Move";
class List extends React.Component {
  render() {
    let list = [];

    for (let i = 0; i < this.props.moves.length; i = i + 2) {
      let moves = [<Move key={i} number={i} move={this.props.moves[i]} />];
      if (i + 1 < this.props.moves.length) {
        moves.push(
          <Move key={i + 1} number={i + 1} move={this.props.moves[i + 1]} />
        );
      }
      list.push(<li key={i}>{moves}</li>);
    }

    return (
      <ol start={0}>
        <li className="caption">
          white <span /> black
        </li>
        {list}
      </ol>
    );
  }
}

function mapStateToProps(state) {
  if (!state) {
    return {};
  }
  return state;
}

export default connect(mapStateToProps)(List);
