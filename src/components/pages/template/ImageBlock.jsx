import React, { Component } from "react";
import { SublinksBlock } from "./SublinksBlock";

export class ImageBlock extends Component {
  constructor(props) {
    super();

    this.image = props.image;
    this.id = String(props.id);
    this.sublinks = props.sublinks;
  }

  render = () => {
    return (
      <div className="tp-image_block">
        <img src={this.image} id={this.id} alt="no image" className="tp-image" />
        {this.sublinks.length === 0 ? <SublinksBlock sublinks={this.sublinks} /> : <></>}
      </div>
    );
  };
}
