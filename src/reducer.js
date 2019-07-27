export default function reducer(state, action) {
  if (action.type === "SETUP_GAME") {
    return Object.assign({}, state, {
      turn: "white",
      moves: [],
      positions: [action.position],
      currentMove: 0
    });
  }
  if (action.type === "MOVE") {
    return Object.assign({}, state, {
      turn: state.turn === "white" ? "black" : "white",
      moves: [...state.moves.slice(0, state.currentMove + 1), action.move],
      positions: [
        ...state.positions.slice(0, state.currentMove + 1),
        action.newPosition
      ],
      currentMove: state.currentMove + 1
    });
  }
  if (action.type === "RETURN_TO_POSITION") {
    return Object.assign({}, state, {
      currentMove: action.moveNumber,
      turn: action.moveNumber % 2 === 0 ? "black" : "white"
    });
  }

  return state;
}
