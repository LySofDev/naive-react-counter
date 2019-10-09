document.addEventListener("DOMContentLoaded", function(event) {
  let hasChange = true;

  const dispatch = nextEvent => {
    event = nextEvent;
    hasChange = true;
  };

  let state = reduce({ counter: 0 }, event);

  let view = render(state, dispatch);

  const app = document.querySelector(".app");

  app.appendChild(view);

  setInterval(() => {
    if (hasChange) {
      state = reduce(state, event);
      view = render(state, dispatch);
      app.replaceChild(view, app.firstChild);
      hasChange = false;
    }
  }, 100);
});
