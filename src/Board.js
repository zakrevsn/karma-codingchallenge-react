import React from "react";
const Chess = require("react-chess");
export default class Board extends React.Component {
  render() {
    let chess = (
      <Chess
        onMovePiece={(piece, fromSquare, toSquare) =>
          console.log(chess.props.pieces, piece, fromSquare, toSquare)
        }
      />
    );
    return <div className="Board">{chess}</div>;
  }
}
