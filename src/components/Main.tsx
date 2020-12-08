import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./css/Main.css";

import { HomePage } from "./pages/HomePage";
import { ContentPage } from "./pages/ContentPage";
import { AuthorsPage } from "./pages/AuthorsPage";
import { AboutPage } from "./pages/AboutPage";
import { Menu } from "./menu/Menu";

export class Main extends Component {
  render = (): JSX.Element => {
    return (
      <main>
        <Menu {...this.props} />
        <Route
          exact
          path={`/${this.props["root"].location.home}`}
          render={(props) => (
            <HomePage
              {...{
                ...this.props["root"],
                actionCreator: this.props["actionCreator"],
                logger: this.props["logger"],
              }}
            />
          )}
        />
        <Route
          exact
          path={`/${this.props["root"].location.content}`}
          render={(props) => (
            <ContentPage
              {...{
                ...this.props["root"],
                actionCreator: this.props["actionCreator"],
                logger: this.props["logger"],
              }}
            />
          )}
        />
        <Route
          exact
          path={`/${this.props["root"].location.authors}*`}
          render={(props) => (
            <AuthorsPage
              {...{
                ...this.props["root"],
                actionCreator: this.props["actionCreator"],
                logger: this.props["logger"],
              }}
            />
          )}
        />
        <Route
          exact
          path={`/${this.props["root"].location.about}`}
          render={(props) => (
            <AboutPage
              {...{
                ...this.props["root"],
                actionCreator: this.props["actionCreator"],
                logger: this.props["logger"],
              }}
            />
          )}
        />
      </main>
    );
  };
}
