import React, { Component } from "react";

export class Preloader extends Component {
  private image: string

  public constructor(props: object) {
    super(props)
    this.image = props["preloader"]
  }

  private getPreloaderDisplay = (): "none" | "grid" => {
    if (this.props["mode"] === "LOADING") {
      return "grid"
    } else {
      return "none"
    }
  };

  public render = (): JSX.Element => {
    return (
      <div
        className="preloader"
        style={{ display: this.getPreloaderDisplay() }}
      >
        <img
          src={this.image}
          alt="no animation"
          className="preloader-gif"
          id="preloaderGif"
        />
        <p className="preloader-title">Loading</p>
      </div>
    );
  };
}
