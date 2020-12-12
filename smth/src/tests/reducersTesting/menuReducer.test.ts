import { store } from "../../store/store";
import { menuReducer } from "../../store/reducers/menuReducer";
import { action } from "../../store/initialState";

describe("Testing of menuReducer", (): void => {
  store.getState();

  const state: object = {
    compactMenuCurtain: "compact-menu_curtain",
  };

  it('MenuReducer should set a menu mode with type of action "SWTICH_MENU_MODE"', (): void => {
    let switchMenuModeAction: action = {
      type: "SWITCH_MENU_MODE",
      payload: "compact-menu_curtain curtain_active",
    };

    let newState: object = menuReducer(state, switchMenuModeAction);
    expect(newState["compactMenuCurtain"]).toBe(
      "compact-menu_curtain curtain_active"
    );

    switchMenuModeAction.payload = "compact-menu_curtain";

    newState = menuReducer(state, switchMenuModeAction);
    expect(newState["compactMenuCurtain"]).toBe("compact-menu_curtain");
  });

  it("MenuReducer should return the given state without any action type", (): void => {
    const emptyAction: action = {
      type: "EMPTY_ACTION",
      payload: "",
    };

    const newState: object = menuReducer(state, emptyAction);
    expect(newState).toBe(state);
  });
});
