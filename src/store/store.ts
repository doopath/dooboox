import { combineReducers, createStore } from "redux";

import { menuReducer } from "./reducers/menuReducer";
import { searchReducer } from "./reducers/searchReducer";
import { rootReducer } from "./reducers/rootReducer";

const reducers = combineReducers({
  root: rootReducer,
  menu: menuReducer,
  searcher: searchReducer,
});

const store = createStore(reducers);
store["actionCreator"] = (type: string, payload: any): void => {
  store.dispatch({ type, payload });
};

export { store };
