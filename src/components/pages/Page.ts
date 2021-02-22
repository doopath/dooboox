import { PageEngine } from "./engines/PageEngine";

export class Page extends PageEngine {
  public constructor(props: object) {
    super({ ...props });
  }

  protected turnOnPreloader = () => {
    this.props["actionCreator"]("SET_PRELOADER_MODE", "LOADING");
  };

  protected turnOffPreloader = () => {
    this.props["actionCreator"]("SET_PRELOADER_MODE", "DISABLED");
  };

  protected getInitialPage = (id?: number) => {
    this.setPage(id);
  };
}
