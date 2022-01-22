const INITIAL_STATE = {
  cart: [],
  cartTotal: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: payload.newCart,
        cartTotal: payload.newTotal,
      };
    case "REMOVE_FROM_CART":
      return { cart: payload.hardCopy, cartTotal: payload.newTotal };
    default:
      return state;
  }
};
export default cartReducer;
