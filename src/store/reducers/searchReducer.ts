import { searchInitialState, Reducer, action } from "../initialState";

class SearchReducer implements Reducer {
  private initialState: object;

  public constructor(initialState: object) {
    this.initialState = initialState;
  }

  public reduce = (state: object = this.initialState, action: action): object => {
    if (action.type === "SWITCH_SEARCHER_MODE") {
      return { ...state, searcherMode: action.payload };
    } else if (action.type === "SET_SEARCHER_VALUE") {
      return { ...state, searcherValue: action.payload };
    } else if (action.type === "SEARCH_EXPRESSION") {
      action.payload.search(action.payload.expression, action.payload.items, action.payload.fast);
      return { ...state };
    } else {
      return state;
    }
  };
}

export const searchReducer = new SearchReducer(searchInitialState).reduce;
