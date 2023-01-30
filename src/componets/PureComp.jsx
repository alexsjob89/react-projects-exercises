import React, { Component } from "react";

class PureComp extends Component {
  render() {
    return (
      <div>
        <h1>Pure Component {this.props.name}</h1>
      </div>
    );
  }
}

export default PureComp;
