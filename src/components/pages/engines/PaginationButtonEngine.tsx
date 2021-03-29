import { Engine } from "./Engine";
import React from "react";

export class PaginationButtonEngine implements Engine {
  private type: "previous" | "next";
  private switchingPageId: number;
  private button: JSX.Element;
  private buttonContent: string;
  private onClick: Function | false;

  public constructor(
    type: "previous" | "next",
    switchingPageId: number | string,
    onClick?: Function
  ) {
    this.type = type;
    this.button = <div></div>;
    this.onClick = onClick || false;

    if (type === "previous") {
      this.buttonContent = "Previous";
      this.switchingPageId = Number(switchingPageId) - 1;
    } else {
      this.buttonContent = "Next";
      this.switchingPageId = Number(switchingPageId) + 1;
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
