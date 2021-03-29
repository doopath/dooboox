import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

export class ThemesItem extends Component {
  createLink = (link) => {
    return (
      <NavLink to={`${link.link} `} className="tp-themes-link">
        {link.value}
      </NavLink>
    );
  };

  createSubitem = (subitem) => {
    return (
      <li className="tp-themes-subitem" key={subitem.id}>
        <NavLink to={`${subitem.link} `} className="tp-themes-sublink">
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            className="tp-themes-arrow"
          />
          {subitem.value}
        </NavLink>
      </li>
    );
  };

  createSubitems = (subitems) => {
    return subitems.map((s) => this.createSubitem(s));
  };

  createSublist = (subitems) => {
    return (
      <ul className="tp-themes-sublist" key={new Date().getTime()}>
        {subitems}
      </ul>
    );
  };

  createItem = (props) => {
    return (
      <li className="tp-themes-item" key={props.link.key}>
        {this.createLink(props.link)}
        {this.createSublist(this.createSubitems(props.subitems))}
      </li>
    );
  };

  render = () => {
    return this.createItem(this.props);
  };
}
