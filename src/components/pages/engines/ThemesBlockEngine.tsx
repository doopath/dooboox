import { Engine } from "./Engine";
import { ThemesItem } from "../template/ThemesItem";
import React from "react";

export class ThemesBlockEngine implements Engine {
  private themes: JSX.Element;
  private items: object;

  public constructor(items: object) {
    this.themes = <div></div>;
    this.items = items;
  }

  private createThemesItem = (themes: Object): JSX.Element[] => {
    if (themes === undefined) {
      return [];
    }

    let iterableThemes = themes[0] || [];
    return iterableThemes.map(
      (theme: object, index: number): JSX.Element => {
        return (
          <ThemesItem
            {...{
              link: {
                link: theme["items"].title.link,
                value: theme["items"].title.value,
                key: index,
              },
              subitems: theme["items"].items,
            }}
          />
        );
      }
    );
  };

  public create = (): void => {
    this.themes = (
      <React.StrictMode>
        <div className="main-container">
          <div className="main-item">
            <div className="tp-themes-block">
              <ul className="tp-themes-list" key={new Date().getTime()}>
                {this.createThemesItem([this.items])}
              </ul>
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  };

  public getElement = (): JSX.Element => {
    return this.themes;
  };
}
