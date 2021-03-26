import React from "react"
import axios from "axios"
import { AbstractPage } from "../AbstractPage"

import { LinksBlock } from "../template/LinksBlock"
import { Text } from "../template/Text"
import { ImageBlock } from "../template/ImageBlock"
import { CodeBlock } from "../template/CodeBlock"
import { Title } from "../template/Title"

import { Engine } from "./Engine"
import { ThemesBlockEngine } from "./ThemesBlockEngine"
import { AuthorBlockEngine } from "./AuthorBlockEngine"
import { PaginationEngine } from "./PaginationEngine"
import { syntaxHighlight } from "../../modules/SyntaxHighlight"

class ElementCreator {
  public createTitle = (value: string): JSX.Element => {
    return <Title value={value} />
  }

  public createImageBlock = (items: [any]): JSX.Element => {
    return (
      <ImageBlock
        image={items["image"]}
        id={items["id"]}
        sublinks={[...(items["sublinks"] || [])]}
      />
    )
  }

  public createCodeBlock = (items: [[string]], highlighter: syntaxHighlight): JSX.Element => {
    return (
      <CodeBlock
        lines={[...items["codeLines"]]}
        result={[...items["resultLines"]]}
        highlight={highlighter.highlight}
      />
    )
  }

  public createThemesBlock = (items: [string]): JSX.Element => {
    const themesBlock: ThemesBlockEngine = new ThemesBlockEngine(items)
    themesBlock.create()
    return themesBlock.getElement()
  }

  public createLinksBlock = (items: [string]): JSX.Element => {
    return <LinksBlock links={items} />
  }

  public createText = (texts: [string], id: string): JSX.Element => {
    return <Text value={texts[id]} id={id} />
  }

  public createEmptyBlock = (element: any = undefined): JSX.Element => {
    return <>{element}</>
  }
}

export class PageEngine extends AbstractPage implements Engine {
  private page: Array<object>
  private pagination: JSX.Element
  private elementCreator: ElementCreator

  public constructor(props: object) {
    super(props)
    this.page = []
    this.pagination = <></>
    this.elementCreator = new ElementCreator()
  }

  public getElement = (): JSX.Element => {
    return <>{this.page || ""}</>
  }

  public create = (): void => {
    try {
      this.page = this.props["currentPage"].map((item: object): object => {
        return this.createElement(item)
      })
    } catch (e) {
      this.props["logger"].log(e)
    }
  }

  private addNewText = (source: string, id: number): void | never => {
    axios["get"](source).then((response: object) => {
      this.props["actionCreator"]("ADD_NEW_TEXT", {
        name: id,
        text: response["data"],
      })
    })
  }

  private createElement = (pageElement: object): JSX.Element => {
    if (pageElement["name"] === "title") {
      return this.elementCreator.createTitle(pageElement["value"])
    } else if (pageElement["name"] === "imageBlock") {
      return this.elementCreator.createImageBlock(pageElement["items"])
    } else if (pageElement["name"] === "codeBox") {
      return this.elementCreator.createCodeBlock(
        pageElement["items"],
        this.props["syntaxHighlight"]
      )
    } else if (pageElement["name"] === "themes") {
      return this.elementCreator.createThemesBlock(pageElement["items"])
    } else if (pageElement["name"] === "links") {
      return this.elementCreator.createLinksBlock(pageElement["items"])
    } else if (pageElement["name"] === "text") {
      if (Object.keys(this.props["texts"]).length === 0 || !Object.keys(this.props["texts"]).includes(pageElement["id"])) {
        this.addNewText(pageElement["source"], pageElement["id"])
      }

      return this.elementCreator.createText(
        this.props["texts"],
        pageElement["id"]
      )
    } else if (pageElement["name"] === "authorBlock") {
      let element: object | undefined = this.props["authors"][pageElement["id"]]
      if (!element && Object.keys(this.props["authors"]).length === 0) {
        let authorBlock = new AuthorBlockEngine({
          author: pageElement,
          actionCreator: this.props["actionCreator"],
          location: this.props["location"],
          nameHighlighter: this.props["nameHighlighter"],
        })
        authorBlock.create()
        return this.elementCreator.createEmptyBlock()
      } else {
        return this.elementCreator.createEmptyBlock(element)
      }
    } else {
      throw new Error(
        "Page engine got an unknown page element from the server!"
      )
    }
  }

  protected createPagination = (pageId: string, nextPage: boolean): void => {
    const pagination = new PaginationEngine({
      ...this.props,
      pageId,
      nextPage,
      type: this.type,
      setPage: this.setPage,
      setPageSearcherValue: this.setPageSearcherValue,
    })
    pagination.create()
    this.pagination = pagination.getElement()
  }

  protected getPagination = (): JSX.Element => {
    return this.pagination
  }
}
