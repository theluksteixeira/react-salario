import React, { Component } from "react";

export default class InputReadOnly extends Component {
  render() {
    return (
      <input
        value={this.props.value}
        placeholder={this.props.placeHolder}
        type="text"
        readOnly
      />
    );
  }
}
