import React, { Component } from "react";

import "./css/App.css";

import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

export class App extends Component {
  render = (): JSX.Element => {
    return (
      <React.StrictMode>
        <Header
          {...this.props["searcher"]}
          actionCreator={this.props["actionCreator"]}
          mobileScreenWidth={this.props["root"]["mobileScreenWidth"]}
          getUniqueKey={this.props["root"]["getUniqueKey"]}
          homeLink={this.props["root"]["location"]["home"]}
        />
        <Main {...this.props} />
        <Footer {...this.props["root"]["location"]} />
      </React.StrictMode>
    );
  };
}
