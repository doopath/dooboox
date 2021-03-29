import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export class Author extends Component {
  render = () => {
    return (
      <div className="tp-author-block">
        <p className="tp-author-name">
          <Link to={`${this.props.link}/id=${this.props.id}`}>{this.props.name}</Link>
        </p>
        <p className="tp-author-role">
          <span>Role: </span>
          <span>{this.props.role}</span>
          <FontAwesomeIcon icon={this.props.icon} title={this.props.role} />
        </p>
        <p className="tp-author-work">
          <span className="tp-author-work_until">Done: </span>
          <span className="tp-author-work_text">{this.props.text}</span>
        </p>
      </div>
    );
  };
}
