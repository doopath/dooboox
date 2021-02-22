import React, { Component } from "react";

import "../../css/AuthorsPage.css";
import { Page } from "../Page";

export class Default extends Page {
  private nameHighlighter;

  public constructor(props: object) {
    super({ ...props, type: "authors" });

    this.nameHighlighter = props["nameHighlighter"];
  }

  public componentDidMount = (): void => {
    try {
      this.turnOnPreloader();
      this.getInitialPage();
      this.turnOffPreloader();
    } catch (e) {
      this.props["logger"].log(e);
    }
  };

  private getNewName = (newName: string) => {
    let name: object = this.nameHighlighter;

    name["setAuthorName"](newName);
    name["highlight"]();

    return name["getHighlightedAuthorName"]();
  };

  public render = (): JSX.Element => {
    return (
      <div className="main-container">
        <div className="main-item">
          {this.create()}
          {this.getElement()}
        </div>
      </div>
    );
  };
}
