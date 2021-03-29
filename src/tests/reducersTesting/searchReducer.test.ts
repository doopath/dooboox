import { store } from "../../store/store";
import { searchReducer } from "../../store/reducers/searchReducer";
import { action } from "../../store/initialState";

describe("Testing of searchReducer", (): void => {
  store.getState();

  const state: object = {
    searcherMode: "COMPACT",
    searcherValue: "",
  };

  it("SearchReducer should switch searcher mode with type of action 'SWITCH_SEARCHER_MODE'", (): void => {
    let switchSearcherModeAction: action = {
      type: "SWITCH_SEARCHER_MODE",
      payload: "FULLSIZE",
    };

    let newState = searchReducer(state, switchSearcherModeAction);
    expect(newState["searcherMode"]).toBe("FULLSIZE");

    switchSearcherModeAction.payload = "COMPACT";

    newState = searchReducer(newState, switchSearcherModeAction);
    expect(newState["searcherMode"]).toBe("COMPACT");
  });

  it('SearchReducer should change value of searcher with type of action "SET_SEARCHER_VALUE"', (): void => {
    let setSearcherValueAction: action = {
      type: "SET_SEARCHER_VALUE",
      payload: "Yah",
    };

    let newState = searchReducer(state, setSearcherValueAction);
    expect(newState["searcherValue"]).toBe("Yah");

    setSearcherValueAction.payload = "Yahallo";

    newState = searchReducer(newState, setSearcherValueAction);
    expect(newState["searcherValue"]).toBe("Yahallo");
  });

  it("SearchReducer should return the given state without any action type", (): void => {
    const emptyAction: action = {
      type: "EMPTY_ACTION",
      payload: "",
    };

    const newState: object = searchReducer(state, emptyAction);
    expect(newState).toBe(state);
  });
});
