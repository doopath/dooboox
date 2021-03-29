import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./css/Header.css";

type searcherModeType = "COMPACT" | "FULLSIZE";

export class Header extends Component {
  protected getNewSearcherMode = (currentMode: searcherModeType): searcherModeType => {
    if (currentMode === "COMPACT") {
      return "FULLSIZE";
    } else {
      return "COMPACT";
    }
  };

  setSearcherMode = (mode: searcherModeType): void => {
    this.props["actionCreator"]("SWITCH_SEARCHER_MODE", mode);
  };

  private async searchExpressionInPageItems(
    newValue: string,
    fastSearching: boolean = false
  ): Promise<void> {
    await this.props["actionCreator"]("SET_SEARCHER_VALUE", newValue);

    this.props["actionCreator"]("SEARCH_EXPRESSION", {
      search: this.props["search"],
      expression: this.props["searcherValue"],
      items: this.props["searchItems"],
      fast: fastSearching,
    });
  }

  // Clear expression and delete marks from any marked items
  private setSearcherEmptyValue = (): void => {
    this.searchExpressionInPageItems("", true);
  };

  private getSearcherClassList = (searcherMode: searcherModeType) => {
    if (searcherMode === "FULLSIZE") {
      return "header-searcher searcher_active";
    } else {
      return "header-searcher";
    }
  };

  private switchToggleMode = (searcherMode: searcherModeType): void => {
    if (this.props["mobileScreenWidth"] >= document.body.clientWidth) {
      this.props["actionCreator"]("SET_SEARCHER_VALUE", "");
      this.setSearcherMode(this.getNewSearcherMode(searcherMode));
      this.setSearcherEmptyValue();
    }
  };

  public render = (): JSX.Element => {
    return (
      <header className={"header"}>
        <div className={"header-container"}>
          <p className={"header-title"}>
            <a href={"/" + this.props["homeLink"]}>Dooboox</a>
          </p>
          <div className={this.getSearcherClassList(this.props["searcherMode"])}>
            <input
              type="text"
              name="searcher"
              id={"search"}
              value={this.props["searcherValue"]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                this.searchExpressionInPageItems(String(e.target.value));
              }}
            />
            <div
              className={"search-icon_box"}
              onClick={(): void => this.switchToggleMode(this.props["searcherMode"])}
            >
              <FontAwesomeIcon icon={faSearch} className={"search-icon"} />
            </div>
          </div>
        </div>
      </header>
    );
  };
}
