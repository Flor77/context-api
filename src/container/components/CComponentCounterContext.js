import React, { Component } from "react";
import { CounterContext } from "./CounterContext";

export default class CComponentCounterContext extends Component {
  render() {
    return (
      <div className="wrapper-app">
        <h1>Class Component</h1>
        <hr className="line"></hr>
        <h3>{this.props.counter}</h3>
        <CounterContext.Consumer>
          {(value) => {
            return <h2>{value}</h2>;
          }}
        </CounterContext.Consumer>
      </div>
    );
  }
}
