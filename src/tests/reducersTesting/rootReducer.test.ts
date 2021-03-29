import { store } from "../../store/store";
import { rootReducer } from "../../store/reducers/rootReducer";
import { action } from "../../store/initialState";

describe("Testing of rootReducer", (): void => {
  store.getState();

  const state: object = {
    bodyScrollState: "UNLOCKED",
    mobileScreenWidth: 590,
    themes: [],
    currentPage: [],
    currentPageId: 1,
    nextPage: false,
    texts: {},
    pageSearcherValue: "",
  };

  it("RootReducer should return LOCKED with payload LOCK and type of an action SWITCH_BODY_SCROLL", (): void => {
    let switchBodyScrollAction: action = {
      type: "SWITCH_BODY_SCROLL",
      payload: "LOCK",
    };

    let newState: object = rootReducer(state, switchBodyScrollAction);
    expect(newState["bodyScrollState"]).toBe("LOCKED");

    switchBodyScrollAction.payload = "UNLOCK";

    newState = rootReducer(newState, switchBodyScrollAction);
    expect(newState["bodyScrollState"]).toBe("UNLOCKED");
  });

  it("RootReducer should set a themes with type of an action SET_THEMES", (): void => {
    let setThemesAction: action = {
      type: "SET_THEMES",
      payload: {
        name: "themes",
        items: [
          {
            title: {
              link: "#text1",
              value: "Very long name of some theme as example",
            },
            items: [
              {
                link: "#",
                value: "Another one sublink",
              },
              {
                link: "#",
                value: "Another one sublink",
              },
              {
                link: "#",
                value: "Another one sublink",
              },
              {
                link: "#",
                value: "Another one sublink",
              },
            ],
          },
        ],
      },
    };

    const newState: object = rootReducer(state, setThemesAction);
    expect(newState["themes"].length).toBe(1);
    expect(newState["themes"][0][0].title.link).toBe("#text1");
  });

  it('RootReducer should set a new page with type of an action "SET_CURRENT_PAGE"', (): void => {
    const setCurrentPageAction: action = {
      type: "SET_CURRENT_PAGE",
      payload: {
        name: "testPage",
        id: 1,
        next: true,
        components: [{}, {}, {}],
      },
    };

    const newState = rootReducer(state, setCurrentPageAction);
    expect(newState["currentPageId"]).toBe(1);
    expect(newState["nextPage"]).toBe(true);
    expect(newState["currentPage"].length).toBe(3);
  });

  it('RootReducer should add a new text with type of an action "ADD_NEW_TEXT"', (): void => {
    let addNewTextAction: action = {
      type: "ADD_NEW_TEXT",
      payload: {
        name: "text1",
        text: "Ilorem ipsum dolor, sit amet...",
      },
    };

    let newState: object = rootReducer(state, addNewTextAction);
    expect(newState["texts"]["text1"]).toBe("Ilorem ipsum dolor, sit amet...");

    addNewTextAction.payload["name"] = "text2";
    addNewTextAction.payload["text"] = "Another one text...";

    newState = rootReducer(newState, addNewTextAction);
    expect(newState["texts"]["text1"]).toBe("Ilorem ipsum dolor, sit amet...");
    expect(newState["texts"]["text2"]).toBe("Another one text...");
  });

  it(`RootReducer should set a new page searcher value with type of 
  \tan action "SET_PAGE_SEARCHER_VALUE", also it should be a number`, (): void => {
    let setPageSearcherValueAction: action = {
      type: "SET_PAGE_SEARCHER_VALUE",
      payload: 1,
    };

    let newState: object = rootReducer(state, setPageSearcherValueAction);
    expect(newState["pageSearcherValue"]).toBe(1);

    setPageSearcherValueAction.payload = 2;

    newState = rootReducer(newState, setPageSearcherValueAction);
    expect(newState["pageSearcherValue"]).toBe(2);
  });

  it("RootReducer should return the given state without any action type", (): void => {
    const emptyAction: action = {
      type: "EMPTY_ACTION",
      payload: "",
    };

    const newState: object = rootReducer(state, emptyAction);
    expect(newState).toBe(state);
  });
});
