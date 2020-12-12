import React, { Component } from "react";

import "./css/Minimap.css";

export class Minimap extends Component {
  render = (): JSX.Element => {
    const App = this.props["App"];
    return (
      <div className={this.props["root"].minimap.mode} id="minimap">
        <App {...this.props} />
        <div
          className="minimap-curtain"
          id="minimapCurtain"
          style={{
            height: this.props["root"].minimap.curtainHeight,
            top: this.props["root"].minimap.curtainTopOffset,
          }}
        ></div>
      </div>
    );
  };
}
