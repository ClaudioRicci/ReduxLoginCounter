import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, loginStatus } from "./actions";

export default function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(loginStatus())}>
        SIGN {isLogged ? "OUT" : "IN"}
      </button>

      {isLogged ? <h2>Your're logged In</h2> : ""}
    </div>
  );
}
