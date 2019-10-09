import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import {
  Container,
  Column,
  Row,
  Counter,
  IncrementButton,
  DecrementButton,
  ClearButton,
  Margin
} from "./components";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Column>
          <Counter />
          <Margin />
          <Row>
            <IncrementButton />
            <Margin />
            <DecrementButton />
            <Margin />
            <ClearButton />
          </Row>
        </Column>
      </Container>
    </Provider>
  );
}

export default App;
