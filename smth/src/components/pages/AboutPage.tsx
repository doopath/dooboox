import React from "react";
import { Page } from "./Page";

export class AboutPage extends Page {
  public constructor(props: object) {
    super({ ...props, type: "aboutPage" });
  }

  public componentDidMount = (): void => {
    this.turnOnPreloader();
    this.getInitialPage();
    this.turnOffPreloader();
  };

  render = (): JSX.Element => {
    return (
      <React.StrictMode>
        <div className="main-container">
          <div className="main-item">
            {this.create()}
            {this.getElement()}
          </div>
        </div>
      </React.StrictMode>
    );
  };
}
