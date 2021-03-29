import { menuInitialState, Reducer, action } from "../initialState";

class MenuReducer implements Reducer {
  private initialState: object;

  public constructor(initialState: object) {
    this.initialState = initialState;
  }

  public reduce = (
    state: object = this.initialState,
    action: action
  ): object => {
    if (action.type === "SWITCH_MENU_MODE") {
      return { ...state, compactMenuCurtain: action.payload };
    } else {
      return state;
    }
  };
}

export const menuReducer = new MenuReducer(menuInitialState).reduce;
