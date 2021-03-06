import React from "react"
import { Page } from "./Page"
import { Preloader } from "../Preloader"

export class HomePage extends Page {
  public constructor(props: object) {
    super(props)
    this.type = "homePage"
  }

  public componentDidMount = (): void => {
    this.getInitialPage("1_HomePage")
    this.turnOffPreloader()
  }

  public render = (): JSX.Element => {
    return (
      <div>
        <div className="main-container">
          <span className="tp-page-id">
            Page id: {this.props["currentPageId"].split("_")[0]}
          </span>
          <div className="main-item">
            <Preloader
              {...{
                preloader: this.props["images"].preloader,
                mode: this.props["preloaderMode"],
              }}
            />
            {this.create()}
            {this.getElement()}
            {this.createPagination(
              this.props["currentPageId"],
              this.props["nextPage"]
            )}
            {this.getPagination()}
          </div>
        </div>
      </div>
    )
  }
}
