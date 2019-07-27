import React from "react";
import { connect } from "react-redux";
import { move } from "./actions";
const Chess = require("react-chess");
class Board extends React.Component {
  render() {
    let chess = (
      <Chess
        onMovePiece={(piece, fromSquare, toSquare) => {
          console.log(chess.props.pieces, piece, fromSquare, toSquare);
          this.props.dispatch(
            move(
              piece.name + " " + fromSquare + "-" + toSquare,
              chess.props.pieces
            )
          );
        }}
      />
    );
    return <div className="Board">{chess}</div>;
  }
}
function mapStateToProps(state) {
  if (!state) {
    return {};
  }
  return state;
}

export default connect(mapStateToProps)(Board);
