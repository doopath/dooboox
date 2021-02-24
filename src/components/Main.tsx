import React, { Component } from "react"
import { Route } from "react-router-dom"

import "./css/Main.css"

import { HomePage } from "./pages/HomePage"
import { ThemesPage } from "./pages/ThemesPage"
import { AuthorsPage } from "./pages/AuthorsPage"
import { AboutPage } from "./pages/AboutPage"
import { Menu } from "./menu/Menu"

import { NotificationsBlock } from "./pages/template/NotificationsBlock"

export class Main extends Component {
  render = (): JSX.Element => {
    return (
      <main>
        <NotificationsBlock
          {...{ notifications: this.props["root"]["notifications"] }}
        />
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
            <ThemesPage
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
    )
  }
}
