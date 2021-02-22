import React from "react";
import { Engine } from "./Engine";
import { PaginationButtonEngine } from "./PaginationButtonEngine";

export class PaginationEngine implements Engine {
  private props: object;
  private setPage: (pageId?: number) => void;
  private setPageSearcherValue: (newValue: number | "") => void;
  private pagination: JSX.Element;

  public constructor(props: object) {
    this.props = { ...props };
    this.pagination = <></>;
    this.setPage = props["setPage"];
    this.setPageSearcherValue = props["setPageSearcherValue"];
  }

  public getElement = (): JSX.Element => {
    return this.pagination;
  };

  public create = (): void => {
    let pageId: string = this.props["pageId"];
    let nextPage: boolean = this.props["nextPage"];
    let previous, next;

    // Some pages (for example: home page named as 1_Home, 2_Home, etc).
    let numberId: number = Number(pageId.split("_")[0]);

    if (typeof numberId === "number") {
      if (numberId >= 2) {
        previous = new PaginationButtonEngine("previous", pageId, this.setPage);
        previous.create();
        previous = previous.getElement();
      }

      if (nextPage) {
        next = new PaginationButtonEngine("next", pageId, this.setPage);
        next.create();
        next = next.getElement();
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
            onChange={(e): void => this.setPageSearcherValue(Number(e.target.value) || "")}
          />
          <div
            key={this.props["getUniqueKey"]()}
            className="tp-page-searcher_button"
            onClick={(): void => this.setPage(this.props["pageSearcherValue"])}
          >
            <a href="#" key={this.props["getUniqueKey"]()}>
              <span>Search</span>
            </a>
          </div>
        </div>
      </div>
    );
  };
}
