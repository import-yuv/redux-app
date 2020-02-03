import { createStore } from "redux";

const initialstate = {
  counter: 0
};

const reducer = (state = initialstate, action) => {
  if (action.type === "INCREASE") {
    let newState = { ...state, counter: state.counter + 1 };

    return newState;
  }

  return state;
};

export default reducer;

export const store = createStore(reducer);
