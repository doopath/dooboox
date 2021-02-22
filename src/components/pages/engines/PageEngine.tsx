import React from "react";
import axios from "axios";
import { AbstractPage } from "../AbstractPage";

import { LinksBlock } from "../template/LinksBlock";
import { Text } from "../template/Text";
import { ImageBlock } from "../template/ImageBlock";
import { CodeBlock } from "../template/CodeBlock";
import { Title } from "../template/Title";

import { Engine } from "./Engine";
import { ThemesBlockEngine } from "./ThemesBlockEngine";
import { AuthorBlockEngine } from "./AuthorBlockEngine";
import { PaginationEngine } from "./PaginationEngine";

export class PageEngine extends AbstractPage implements Engine {
  private page: Array<object>;
  private pagination: JSX.Element;

  public constructor(props: object) {
    super(props);
    this.page = [];
    this.pagination = <></>;
  }

  public getElement = (): JSX.Element => {
    return <>{this.page || ""}</>;
  };

  public create = (): void => {
    try {
      this.page = this.props["currentPage"].map((item: object): object => {
        return this.createElement(item);
      });
    } catch (e) {
      this.props["logger"].log(e);
    }
  };

  private addNewText = (source: string, id: number): void | never => {
    axios["get"](source).then((response: object) => {
      this.props["actionCreator"]("ADD_NEW_TEXT", {
        name: id,
        text: response["data"],
      });
    });
  };

  private createElement = (pageElement: object): JSX.Element => {
    if (pageElement["name"] === "title") {
      return <Title value={pageElement["value"]} />;
    } else if (pageElement["name"] === "imageBlock") {
      return (
        <ImageBlock
          image={pageElement["items"].image}
          id={pageElement["items"].id}
          sublinks={[...(pageElement["items"].sublinks || [])]}
        />
      );
    } else if (pageElement["name"] === "codeBox") {
      return (
        <CodeBlock
          lines={[...pageElement["items"].codeLines]}
          result={[...pageElement["items"].resultLines]}
          highlight={this.props["syntaxHighlight"].highlight}
        />
      );
    } else if (pageElement["name"] === "themes") {
      const themesBlock: ThemesBlockEngine = new ThemesBlockEngine(pageElement["items"]);
      themesBlock.create();
      return themesBlock.getElement();
    } else if (pageElement["name"] === "links") {
      return <LinksBlock links={[...pageElement["items"]]} />;
    } else if (pageElement["name"] === "text") {
      if (Object.keys(this.props["texts"]).length === 0) {
        this.addNewText(pageElement["source"], pageElement["id"]);
      }

      return <Text value={[this.props["texts"][pageElement["id"]]]} id={pageElement["id"]} />;
    } else if (pageElement["name"] === "authorBlock") {
      let element: object | undefined = this.props["authors"][pageElement["id"]];
      if (!element && Object.keys(this.props["authors"]).length === 0) {
        let authorBlock = new AuthorBlockEngine({
          author: pageElement,
          actionCreator: this.props["actionCreator"],
          location: this.props["location"],
          nameHighlighter: this.props["nameHighlighter"],
        });
        authorBlock.create();
        return <></>;
      } else {
        return <>{element}</>;
      }
    } else {
      throw new Error("Page engine got a unknown page element from server!");
    }
  };

  protected createPagination = (pageId: number, nextPage: boolean): void => {
    const pagination = new PaginationEngine({
      ...this.props,
      pageId,
      nextPage,
      setPage: this.setPage,
      setPageSearcherValue: this.setPageSearcherValue,
    });
    pagination.create();
    this.pagination = pagination.getElement();
  };

  protected getPagination = (): JSX.Element => {
    return this.pagination;
  };
}
