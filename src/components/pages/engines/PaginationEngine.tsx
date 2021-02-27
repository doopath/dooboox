import React from "react"
import * as axios from "axios"

import { Engine } from "./Engine"
import { PaginationButtonEngine } from "./PaginationButtonEngine"
import { cacher } from "../../modules/Cacher"
import { Notification } from "../template/Notification"

export class PaginationEngine implements Engine {
  private props: object
  private setPage: (pageId?: string) => void
  private setPageSearcherValue: (newValue: number | "") => void
  private pagination: JSX.Element
  private type: string

  public constructor(props: object) {
    this.props = props
    this.pagination = <></>
    this.type = props["type"]
    this.setPage = props["setPage"]
    this.setPageSearcherValue = props["setPageSearcherValue"]
  }

  public getElement = (): JSX.Element => {
    return this.pagination
  }

  private checkPage = async (
    modify: Function,
    pageId?: string
  ): Promise<void> => {
    await axios["get"](this.props["api"].getPageUrl(this.type, pageId || false))
      .then((response: object) => {
        if (response["data"]) {
          modify(true)
          cacher.save(response["data"][0]["id"], response["data"][0])
        }
      })
      .catch(() => {})
    return
  }

  private searchPage = async (targetId: string): Promise<boolean> => {
    let pageExists: boolean | undefined = undefined

    await this.checkPage((state: boolean) => (pageExists = state), targetId)

    return pageExists || false
  }

  private setSearchingPage = async (): Promise<void> => {
    let target: string =
      this.props["pageSearcherValue"] +
      "_" +
      this.props["currentPageId"].split("_")[1]
    let message: string
    let result = await this.searchPage(target)

    if (result) {
      this.setPage(target)
      message = `Switched to the page with id=${this.props["pageSearcherValue"]}`
    } else {
      message = `Page with id=${this.props["pageSearcherValue"]} does not exists!`
    }

    let notification = new Notification({message})
    this.props["actionCreator"]("ADD_NEW_NOTIFICATION", notification)
  }

  public create = (): void => {
    let pageId: string = this.props["pageId"]
    let nextPage: boolean = this.props["nextPage"]
    let previous, next

    // Some pages (for example: home page named as 1_Home, 2_Home, etc).
    let numberId: number = Number(pageId.split("_")[0])

    if (typeof numberId === "number") {
      if (numberId >= 2) {
        previous = new PaginationButtonEngine("previous", pageId, this.setPage)
        previous.create()
        previous = previous.getElement()
      }

      if (nextPage) {
        next = new PaginationButtonEngine("next", pageId, this.setPage)
        next.create()
        next = next.getElement()
      }
    }

    this.pagination = (
      <div className="tp-pagination_block">
        {previous}
        {next}
        <div className="tp-page-searcher">
          <input
            type="text"
            id="pageSearcher"
            placeholder="Page number"
            value={this.props["pageSearcherValue"]}
            onChange={(e): void =>
              this.setPageSearcherValue(Number(e.target.value) || "")
            }
          />
          <div
            key={this.props["getUniqueKey"]()}
            className="tp-page-searcher_button"
            onClick={(): void => {
              this.setSearchingPage()
            }}
          >
            <a href="#" key={this.props["getUniqueKey"]()}>
              <span>Search</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
