import React, { Component } from "react";

// Components
import { CompactMenu } from "./CompactMenu";
import { FullsizeMenu } from "./FullsizeMenu";

// CSS Styles
import "../css/Menu.css";

type menuMode = "FULLSIZE" | "COMPACT";

export class Menu extends Component {
  toggleMenu = (menuMode: menuMode): JSX.Element => {
    if (menuMode === "FULLSIZE") {
      return <FullsizeMenu {...{ location: this.props["root"].location }} />;
    } else {
      return <CompactMenu {...this.props} />;
    }
  };

  render() {
    return this.toggleMenu(this.props["menu"].getMenuMode());
  }
}
