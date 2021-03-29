import React from "react";
import * as axios from "axios";

import { Engine } from "./Engine";
import { Author } from "../template/Author";

import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const userIcons: object = {
  faUserNinja,
  faUserEdit,
  faUserGraduate,
};

export class AuthorBlockEngine implements Engine {
  private author: object;
  private actionCreator: Function;
  private location: object;
  private nameHighlighter: object;

  public constructor(props: object) {
    this.author = props["author"];
    this.actionCreator = props["actionCreator"];
    this.location = props["location"];
    this.nameHighlighter = props["nameHighlighter"];
  }

  private createAuthorItems = (sourceBlock: object): object => {
    let authorItems: object = {};

    sourceBlock["items"].forEach((item: object): void => {
      if (item["name"] !== "authorRole") {
        authorItems[item["name"]] = item["value"];
      } else {
        authorItems["authorRole"] = {
          role: item["value"],
          icon: item["icon"],
        };
      }
    });

    return authorItems;
  };

  private createAuthor = (sourceBlock: object): JSX.Element => {
    let authorItems = this.createAuthorItems(sourceBlock);

    return (
      <Author
        {...{
          name: this.getHighlightedName(authorItems["authorName"]),
          id: sourceBlock["id"],
          link: `/${this.location["authors"]}`,
          role: authorItems["authorRole"]["role"],
          icon: userIcons[authorItems["authorRole"]["icon"]],
          text: authorItems["authorWork"],
        }}
      />
    );
  };

  private setAuthor = (): void => {
    axios["get"](this.author["source"]).then((response: object): void => {
      if (response["data"]) {
        let author: object = this.createAuthor(response["data"][0]);
        this.actionCreator("ADD_NEW_AUTHOR", {
          ...author,
          id: response["data"][0]["id"],
        });
      }
    });
  };

  private getHighlightedName = (newName: string): string => {
    let name: object = this.nameHighlighter;

    name["setAuthorName"](newName);
    name["highlight"]();

    return name["getHighlightedAuthorName"]();
  };

  public create = (): void => {
    this.setAuthor();
  };
}
