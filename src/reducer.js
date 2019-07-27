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
      moves: [...state.moves, action.move],
      positions: [...state.positions, action.newPosition],
      currentMove: state.currentMove + 1
    });
  }

  return state;
}
