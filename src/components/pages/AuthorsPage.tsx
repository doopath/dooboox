import React, { Component } from "react";
import { Route } from "react-router-dom";

// Components
import { Developer } from "./authors/Developer";
import { Redactor } from "./authors/Redactor";
import { Writer } from "./authors/Writer";
import { Default } from "./authors/Default";

class Marker {
  public mark = (symbol: any, mark: boolean = false): JSX.Element => {
    if (mark) {
      return (
        <span className="tp-upper-case" key={1 + Math.floor(Math.random() * 10000)}>
          {symbol}
        </span>
      );
    } else {
      return <span></span>;
    }
  };
}

class NameHighlighter {
  protected authorName: string;
  protected marker: Marker;
  protected highlightedAuthorName: Array<string | JSX.Element>;

  public constructor(marker: Marker, authorName?: string) {
    this.authorName = authorName || "";
    this.marker = marker;

    this.highlightedAuthorName = [];
  }

  public highlight = (): void => {
    if (this.authorName === "") {
      throw new Error("Name wasn't setted or equals empty string!");
    }

    let listOfLetters: Array<string | JSX.Element> = this.authorName.split("");

    for (let i: number = 0; i < listOfLetters.length - 1; i++) {
      if (String(listOfLetters[i]).match(/[A-ZА-Я]/g) !== null) {
        listOfLetters[i] = this.marker.mark(listOfLetters[i], true);
      }
    }

    this.highlightedAuthorName = listOfLetters;
  };

  public setAuthorName = (newName: string): void => {
    this.authorName = newName;
  };

  public getHighlightedAuthorName = (): Array<string | JSX.Element> => {
    return this.highlightedAuthorName;
  };
}

export class AuthorsPage extends Component {
  public render = (): JSX.Element => {
    return (
      <React.StrictMode>
        <Route
          exact
          path={`/${this.props["location"].authors}/id=1`}
          render={() => (
            <Developer
              {...{
                ...this.props,
                NameHighlighter: NameHighlighter,
                nameHighlighter: new NameHighlighter(new Marker()),
              }}
            />
          )}
        />
        <Route
          exact
          path={`/${this.props["location"].authors}/id=2`}
          render={() => (
            <Redactor
              {...{
                ...this.props,
                NameHighlighter: NameHighlighter,
                nameHighlighter: new NameHighlighter(new Marker()),
              }}
            />
          )}
        />
        <Route
          exact
          path={`/${this.props["location"].authors}/id=3`}
          render={() => (
            <Writer
              {...{
                ...this.props,
                NameHighlighter: NameHighlighter,
                nameHighlighter: new NameHighlighter(new Marker()),
              }}
            />
          )}
        />
        <Route
          exact
          path={`/${this.props["location"].authors}`}
          render={(props: any) => (
            <Default
              {...{
                ...this.props,
                NameHighlighter: NameHighlighter,
                nameHighlighter: new NameHighlighter(new Marker()),
              }}
            />
          )}
        />
      </React.StrictMode>
    );
  };
}
