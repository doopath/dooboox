import { Engine } from "./Engine";
import React from "react";

export class PaginationButtonEngine implements Engine {
  private type: "previous" | "next";
  private switchingPageId: string;
  private button: JSX.Element;
  private buttonContent: string;
  private onClick: Function | false;

  public constructor(type: "previous" | "next", switchingPageId: string, onClick?: Function) {
    this.type = type;
    this.button = <div></div>;
    this.onClick = onClick || false;

    let prefix = switchingPageId.split("_")[0];
    let suffix = switchingPageId.split("_")[1];

    if (type === "previous") {
      this.buttonContent = "Previous";
      this.switchingPageId = String(Number(prefix)-1) + "_" + suffix;
    } else {
      this.buttonContent = "Next";
      this.switchingPageId = String(Number(prefix)+1) + "_" + suffix;
    }
  }

  public create = (): void => {
    this.button = (
      <div
        className={`tp-pagination_button ${this.type}-button`}
        onClick={(): void => {
          if (this.onClick) {
            this.onClick(this.switchingPageId);
          }
        }}
      >
        <a href="#">
          <span>{this.buttonContent}</span>
        </a>
      </div>
    );
  };

  public getElement = (): JSX.Element => {
    return this.button;
  };
}
