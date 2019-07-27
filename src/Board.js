import React from "react";
import { connect } from "react-redux";
import { move } from "./actions";
const Chess = require("react-chess");
class Board extends React.Component {
  render() {
    console.log(this.props);
    let chess = (
      <Chess
        pieces={this.props.positions[this.props.currentMove]}
        onMovePiece={(piece, fromSquare, toSquare) => {
          console.log(chess.props.pieces, piece, fromSquare, toSquare);
          chess.props.pieces[piece.index] = piece.name + "@" + toSquare;
          let pieces = chess.props.pieces.filter(
            (p, index) => piece.index === index || toSquare !== p.substring(2)
          );

          this.props.dispatch(
            move(piece.name + " " + fromSquare + "-" + toSquare, pieces)
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
