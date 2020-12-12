import axios from "axios";
import { Component } from "react";

export class AbstractPage extends Component {
  public props: object;
  private type: string;

  public constructor(props: object) {
    super(props);
    this.props = props;
    this.type = props["type"];
  }

  protected setPage = (pageId?: number): void => {
    axios["get"](this.props["api"].getPageUrl(this.type, pageId || false)).then(
      (response: object) => {
        if (response["data"]) {
          this.props["actionCreator"]("SET_CURRENT_PAGE", response["data"][0]);
        }
      }
    );
  };

  protected setPageSearcherValue = (newValue: number | ""): void => {
    this.props["actionCreator"]("SET_PAGE_SEARCHER_VALUE", newValue);
  };
}
