import React from "react";
import { Page } from "../Page";

export class Redactor extends Page {
  private nonePage: string;

  public constructor(props: object) {
    super({ ...props, type: "authorsPage/author-2", exclude: true });
    this.nonePage = props["nonePage"];
  }

  public componentDidMount = (): void => {
    this.turnOnPreloader();
    this.getInitialPage();
    this.turnOffPreloader();
  };

  public render = (): JSX.Element => {
    return (
      <React.StrictMode>
        <div className="main-container">
          <div className="main-item">
            {this.create()}
            <h2 className="tp-title">Author Page</h2>
            {this.getElement()}
          </div>
        </div>
      </React.StrictMode>
    );
  };
}
