const INITIAL_STATE = {
  alert: "",
};

const alertReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALERT_FROM_CART":
      return {
        ...state,
        alert: payload,
      };

    default:
      return state;
  }
};

export default alertReducer;
