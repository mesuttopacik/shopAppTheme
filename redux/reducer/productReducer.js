import { GET_PRODUCT } from "../actions/actionTypes";

const INITIAL_STATE = {
  product: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return { ...state, product: payload };

    default:
      return state;
  }
};
export default productReducer;
