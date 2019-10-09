function Counter(state) {
  const counter = document.createElement("div");
  counter.innerText = state.counter;
  return counter;
}

function HorizontalPadding(width) {
  const buffer = document.createElement("div");
  buffer.style.width = width + "rem";
  buffer.style.height = "1rem";
  return buffer;
}

function VerticalPadding(height) {
  const buffer = document.createElement("div");
  buffer.style.height = height + "rem";
  buffer.style.width = "1rem";
  return buffer;
}

function Margin({ height = "1rem", width = "1rem" } = {}) {
  const margin = document.createElement("div");
  margin.style.height = height;
  margin.style.width = width;
  return margin;
}

function Button({ id, label, dispatch }) {
  const button = document.createElement("button");
  button.id = id;
  button.innerText = label;
  button.addEventListener("click", dispatch);
  return button;
}

function Row(...children) {
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.flexDirection = "row";
  row.style.alignItems = "center";
  children.forEach(child => row.appendChild(child));
  return row;
}

function Column(...children) {
  const column = document.createElement("div");
  column.style.display = "flex";
  column.style.flexDirection = "column";
  column.style.alignItems = "center";
  children.forEach(child => column.appendChild(child));
  return column;
}

function Container(...children) {
  const main = document.createElement("main");
  main.style.display = "flex";
  main.style.justifyContent = "center";
  main.style.alignItems = "center";
  main.style.height = "100vh";
  main.style.width = "100vw";
  children.forEach(child => main.appendChild(child));
  return main;
}

function render(state, dispatch) {
  return Container(
    Column(
      Counter(state),
      Margin({ height: "2rem" }),
      Row(
        Button({ id: "increment", label: "+", dispatch }),
        Margin(),
        Button({ id: "decrement", label: "-", dispatch }),
        Margin(),
        Button({ id: "clear", label: "clear", dispatch })
      )
    )
  );
}
