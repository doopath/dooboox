import React, { Component } from "react";

export class SublinksBlock extends Component {
  constructor(props) {
    super();
    this.sublinks = props.sublinks;
  }

  createSublink = (props) => {
    return (
      <a href={props.link} key={props.key} className="tp-sublink">
        {props.value}
      </a>
    );
  };

  createSublinksBlock = (props) => {
    let sublinks = props.sublinks.map((item) =>
      this.createSublink({
        key: item.id,
        value: item.value,
        link: item.link,
      })
    );

    return <div className="tp-sublinks_block">{sublinks}</div>;
  };

  render = () => {
    return this.createSublinksBlock(this.props);
  };
}
