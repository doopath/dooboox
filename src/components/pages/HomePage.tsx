import React from "react";
import { Page } from "./Page";
import { Preloader } from "../Preloader";

export class HomePage extends Page {
  public constructor(props: object) {
    super({ ...props, type: "homePage" });
  }

  public componentDidMount = (): void => {
    try {
      this.turnOnPreloader();
      this.getInitialPage(1);
      this.turnOffPreloader();
    } catch (e) {
      this.props["logger"].log(e);
    }
  };

  public render = (): JSX.Element => {
    return (
      <div>
        <div className="main-container">
          <span className="tp-page-id">Page id: {this.props["currentPageId"]}</span>
          <div className="main-item">
            <Preloader
              {...{
                preloader: this.props["images"].preloader,
                mode: this.props["preloaderMode"],
              }}
            />
            {this.create()}
            {this.getElement()}
            {this.createPagination(this.props["currentPageId"], this.props["nextPage"])}
          </div>
        </div>
      </div>
    );
  };
}
