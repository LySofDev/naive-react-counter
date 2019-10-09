import { createStore, combineReducers } from "redux";
import { connect } from "react-redux";

export const initialState = 0;

export const INCREMENT = "INCREMENT";

export const DECREMENT = "DECREMENT";

export const CLEAR = "CLEAR";

export function reduce(state = initialState, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  }

  if (action.type === DECREMENT) {
    return state - 1;
  }

  if (action.type === CLEAR) {
    return 0;
  }

  return state;
}

export const withCounterState = connect(
  state => ({ counter: state.counter }),
  dispatch => ({
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
    clear: () => dispatch({ type: CLEAR })
  })
);

export const store = createStore(combineReducers({ counter: reduce }));
