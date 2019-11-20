import reducers from "../../reducers";

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({ counter: 0, isLogged: false });
});
