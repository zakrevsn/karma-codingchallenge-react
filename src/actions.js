export function setupGame(position) {
  return {
    type: "SETUP_GAME",
    position
  };
}
export function move(move, newPosition) {
  return {
    type: "MOVE",
    move,
    newPosition
  };
}

export function returnToPosition(moveNumber) {
  return {
    type: "RETURN_TO_POSITION",
    moveNumber
  };
}
