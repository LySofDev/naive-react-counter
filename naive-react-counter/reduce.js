function reduce(state = initialState, event) {
  if (event.type === "click" && event.target.id === "increment") {
    return { ...state, counter: state.counter + 1 };
  }

  if (event.type === "click" && event.target.id === "decrement") {
    return { ...state, counter: state.counter - 1 };
  }

  if (event.type === "click" && event.target.id === "clear") {
    return { ...state, counter: 0 };
  }

  return state;
}
