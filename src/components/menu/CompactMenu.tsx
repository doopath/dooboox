import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// CSS Styles
import "../css/CompactMenu.css";

type compactMenuMode =
  | "compact-menu_curtain"
  | "compact-menu_curtain curtain_active";

export class CompactMenu extends Component {
  toggleMenuMode = (statement: compactMenuMode): void => {
    if (statement === "compact-menu_curtain") {
      this.props["actionCreator"]("SWITCH_BODY_SCROLL", "LOCK");
      this.props["actionCreator"](
        "SWITCH_MENU_MODE",
        "compact-menu_curtain curtain_active"
      );
    } else {
      this.props["actionCreator"]("SWITCH_BODY_SCROLL", "UNLOCK");
      this.props["actionCreator"]("SWITCH_MENU_MODE", "compact-menu_curtain");
    }
  };

  render = (): JSX.Element => {
    return (
      <React.StrictMode>
        <menu>
          <div className="compact-menu">
            <p
              className="compact-menu_title"
              onClick={(): void =>
                this.toggleMenuMode(this.props["menu"].compactMenuCurtain)
              }
            >
              МЕНЮ
            </p>
            <div
              className={this.props["menu"].compactMenuCurtain}
              onClick={(): void =>
                this.toggleMenuMode(this.props["menu"].compactMenuCurtain)
              }
              style={{ height: window.screen.height + "px" }}
            >
              <div className="compact-menu_cross" title="Закрыть"></div>
              <ul className="compact-menu_list">
                <li className="compact-menu_item">
                  <NavLink
                    to={`/${this.props["root"].location.home}`}
                    className="fas fa-home compact-menu_link"
                  >
                    ГЛАВНАЯ
                  </NavLink>
                </li>
                <li className="compact-menu_item">
                  <NavLink
                    to={`/${this.props["root"].location.content}`}
                    className="fas fa-align-left compact-menu_link"
                  >
                    СОДЕРЖАНИЕ
                  </NavLink>
                </li>
                <li className="compact-menu_item">
                  <NavLink
                    to={`/${this.props["root"].location.authors}`}
                    className="fas fa-user-astronaut compact-menu_link"
                  >
                    АВТОРЫ
                  </NavLink>
                </li>
                <li className="compact-menu_item">
                  <NavLink
                    to={`/${this.props["root"].location.about}`}
                    className="fas fa-project-diagram compact-menu_link"
                  >
                    О ПРОЕКТЕ
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </menu>
      </React.StrictMode>
    );
  };
}
