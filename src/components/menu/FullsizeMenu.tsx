import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class FullsizeMenu extends Component {
  render = (): JSX.Element => {
    return (
      <div className="menu">
        <menu className="menu-list">
          <li className="menu-item">
            <NavLink to={`/${this.props["location"].home}`} className="menu-link">
              MAIN
            </NavLink>
          </li>

          <li className="menu-item">
            <NavLink to={`/${this.props["location"].content}`} className="menu-link">
              SUMMARY
            </NavLink>
          </li>

          <li className="menu-item">
            <NavLink to={`/${this.props["location"].authors}`} className="menu-link">
              AUTHORS
            </NavLink>
          </li>

          <li className="menu-item">
            <NavLink to={`/${this.props["location"].about}`} className="menu-link">
              ABOUT
            </NavLink>
          </li>
        </menu>
      </div>
    );
  };
}
