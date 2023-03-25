import React, { Component } from "react";

export default class CComponent extends Component {
  render() {
    return (
      <div className="wrapper-app">
        <h1>Class Component</h1>
        <hr className="line"></hr>
        <h3>{this.props.counter}</h3>
      </div>
    );
  }
}
