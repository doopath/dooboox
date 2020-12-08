import React, { Component } from "react";

export class Title extends Component {
  render() {
    return <h2 className="tp-title">{this.props.value}</h2>;
  }
}
