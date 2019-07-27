import React from "react";
import { connect } from "react-redux";
class List extends React.Component {
  render() {
    let list = [];

    for (let i = 0; i < this.props.moves.length; i = i + 2) {
      let moves = [<span key={i}>{this.props.moves[i]}</span>];
      if (i + 1 < this.props.moves.length) {
        moves.push(<span key={i + 1}>{this.props.moves[i + 1]}</span>);
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
