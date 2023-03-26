import React, { Component } from "react";

export default class CCompUseEffect extends Component {
  state = {
    message: "Class Component",
    time: new Date().toString(),
  };

  componentDidMount() {
    console.log("I am from Did Mount");
    this.interval = setInterval(this.showDate, 1000);
  }

  componentDidUpdate() {
    console.log("I am from Update");
  }

  componentWillUnmount() {
    console.log("I am from Unmount");
    clearInterval(this.interval);
  }

  // showDate = () => {
  //   this.setState({ time: new Date().toString() });
  // };

  render() {
    return (
      <div className="wrapper-app">
        {this.state.message}
        <div>{this.state.time}</div>
      </div>
    );
  }
}
