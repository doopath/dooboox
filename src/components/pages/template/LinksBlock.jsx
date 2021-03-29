import React, { Component } from "react";

// Utils
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export class LinksBlock extends Component {
  constructor(props) {
    super();
    this.links = props.links;
  }

  createLink = (props) => {
    if (props.refresh) {
      return (
        <a href={props.link} key={props.key} className="tp-link">
          <FontAwesomeIcon icon={faLink} />
          {props.value}
        </a>
      );
    } else {
      return (
        <Link to={props.link} key={props.key} className="tp-link">
          <FontAwesomeIcon icon={faLink} />
          {props.value}
        </Link>
      );
    }
  };

  createLinksBlock = (props) => {
    let links = props.links.map((item) => {
      return this.createLink({
        key: item.id,
        value: item.value,
        link: item.link,
        refresh: item.refresh,
      });
    });

    return <div className="tp-links_block">{links}</div>;
  };

  render = () => {
    return this.createLinksBlock(this.props);
  };
}
