import React, { Component } from "react";

export class Preloader extends Component {
  private getPreloaderDisplay = (): "none" | "grid" => {
    if (this.props["mode"] === "LOADING") {
      return "grid";
    } else {
      return "none";
    }
  };

  public render = (): JSX.Element => {
    return (
      <div
        className="preloader"
        style={{
          display: this.getPreloaderDisplay(),
        }}
      >
        <img
          src={this.props["preloader"]}
          alt="no animation"
          className="preloader-gif"
          id="preloaderGif"
        />
        <p className="preloader-title">Loading</p>
      </div>
    );
  };
}
