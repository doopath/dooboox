import { store } from "./store";

export const actionCreator = (type: string, payload: any): void => {
  store.dispatch({
    type,
    payload,
  });
};
