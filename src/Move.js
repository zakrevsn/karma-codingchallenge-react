import React from "react";
import { connect } from "react-redux";
import { returnToPosition } from "./actions";
class Move extends React.Component {
  render() {
    return (
      <span
        className="moveLink"
        onClick={() => this.props.dispatch(returnToPosition(this.props.number))}
      >
        {this.props.move}
      </span>
    );
  }
}
function mapStateToProps(state) {
  if (!state) {
    return {};
  }
  return state;
}
export default connect(mapStateToProps)(Move);
