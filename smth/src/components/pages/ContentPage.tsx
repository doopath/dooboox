import React, { Component } from "react";
import { Page } from "./Page";

export class ContentPage extends Page {
  public constructor(props: object) {
    super({ ...props, type: "contentPage" });
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

  public render = (): JSX.Element => {
    return (
      <React.StrictMode>
        <div className="main-container">
          <div className="main-item">
            <div></div>
            {this.create()}
            {this.getElement()}
          </div>
        </div>
      </React.StrictMode>
    );
  };
}
