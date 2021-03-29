import React, { Component } from "react";

export class Text extends Component {
  createText = (props) => {
    if (!props.id) props.id = "";

    return (
      <p className="tp-text" id={props.id}>
        {props.value}
        <br />
      </p>
    );
  };

  render = () => {
    return this.createText({ id: this.props.id, value: this.props.value });
  };
}
