export const increment = multiplier => {
  return {
    type: "INCREMENT",
    payload: multiplier
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export const loginStatus = () => {
  return {
    type: "SIGN_IN"
  };
};
