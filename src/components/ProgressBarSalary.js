import React, { Component } from "react";

export default class ProgressBarSalary extends Component {
  render() {
    return (
      <div
        style={{
          height: "50px",
          width: this.props.percentagem,
          backgroundColor: this.props.color,
          float: "left",
        }}
      ></div>
    );
  }
}
