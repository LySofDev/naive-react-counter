import React from "react";
import styled from "styled-components";
import { withCounterState } from "./store";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button``;

export const Margin = styled.div`
  height: ${({ height = "1rem" }) => height};
  width: ${({ width = "1rem" }) => width};
`;

export const Counter = withCounterState(({ counter }) => <div>{counter}</div>);

export const IncrementButton = withCounterState(({ increment }) => (
  <Button onClick={increment}>+</Button>
));

export const DecrementButton = withCounterState(({ decrement }) => (
  <Button onClick={decrement}>-</Button>
));

export const ClearButton = withCounterState(({ clear }) => (
  <Button onClick={clear}>Clear</Button>
));
