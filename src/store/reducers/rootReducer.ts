import { rootInitialState, Reducer, action } from "../initialState";

class RootReducer implements Reducer {
  private initialState: object;

  public constructor(initialState: object) {
    this.initialState = initialState;
  }

  private addNewText = (currentTexts: object, newText: object): object => {
    let newTexts: object = { ...currentTexts };
    newTexts[newText["name"]] = newText["text"];
    return newTexts;
  };

  private switchBodyScroll = (payload: "LOCK" | "UNLOCK"): "LOCKED" | "UNLOCKED" => {
    if (payload === "LOCK") {
      document.getElementsByTagName("body")[0].classList.add("scroll-lock");
      return "LOCKED";
    } else {
      document.getElementsByTagName("body")[0].classList.remove("scroll-lock");
      return "UNLOCKED";
    }
  };

  public reduce = (state: object = this.initialState, action: action): object => {
    if (action.type === "SWITCH_BODY_SCROLL") {
      return {
        ...state,
        bodyScrollState: this.switchBodyScroll(action.payload),
      };
    } else if (action.type === "SET_THEMES") {
      return { ...state, themes: [action.payload.items] };
    } else if (action.type === "SET_CURRENT_PAGE") {
      return {
        ...state,
        currentPageId: action.payload.id,
        nextPage: action.payload.next,
        currentPage: [...action.payload.components],
      };
    } else if (action.type === "ADD_NEW_TEXT") {
      return {
        ...state,
        texts: { ...this.addNewText(state["texts"], action.payload) },
      };
    } else if (action.type === "SET_PAGE_SEARCHER_VALUE") {
      return { ...state, pageSearcherValue: action.payload };
    } else if (action.type === "SET_PRELOADER_MODE") {
      return { ...state, preloaderMode: action.payload };
    } else if (action.type === "ADD_NEW_AUTHOR") {
      let newAuthors = { ...state["authors"] };
      newAuthors[action.payload["id"]] = action.payload;
      return { ...state, authors: { ...newAuthors } };
    } else {
      return state;
    }
  };
}

export const rootReducer = new RootReducer(rootInitialState).reduce;
