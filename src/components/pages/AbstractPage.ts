import axios from "axios";
import { Component } from "react";

import { cacher } from "../modules/Cacher";

export class AbstractPage extends Component {
  public props: object;
  private type: string;
  private excludeName: boolean;

  public constructor(props: object) {
    super(props);
    this.props = props;
    this.excludeName = props["exclude"] || false;
    this.type = props["type"] + (this.excludeName ? "" : "Page");
  }

  private setCachedPage = (pageId?: string): boolean => {
    let id: string = String(pageId || this.type);

    if (cacher.checkElement(id)) {
      this.props["actionCreator"]("SET_CURRENT_PAGE", cacher.getValue(id));
      return true;
    } else {
      return false;
    }
  }

  private setFetchedPage = (pageId?: string): void => {
    axios["get"](this.props["api"].getPageUrl(this.type, pageId || false)).then(
      (response: object) => {
        if (response["data"]) {
          cacher.save(response["data"][0]["id"], response["data"][0]);
          this.props["actionCreator"]("SET_CURRENT_PAGE", response["data"][0]);
        }
      }
    );
  }

  protected setPage = (pageId?: string): void => {
    /**
     * Set the cached page if it exists else get a new page from the server and set it.
     */

    if (!this.setCachedPage(pageId)) {
      this.setFetchedPage(pageId);
    }
  };

  protected setPageSearcherValue = (newValue: number | ""): void => {
    this.props["actionCreator"]("SET_PAGE_SEARCHER_VALUE", newValue);
  };
}
