import {
  put,
  takeEvery,
} from "redux-saga/effects";
import {
  ADD_TO_CART,
  ADD_TO_CART_SAGA,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_SAGA,
} from "../redux/actions/actionTypes";

const total = (cart) => {
  let nTotel = 0;
  cart.forEach((e) => {
    nTotel += e.price;
  });
  return nTotel;
};


export function* addTocartSaga(action) {
  const { cart, item } = action.payload;
  const newCart = [...cart, item];
  const newTotal = total(newCart);
  yield put({ type: ADD_TO_CART, payload: { newCart, newTotal } });
}

export function* removeFromCartSaga(action) {
  let { cart, item } = action.payload;
  let hardCopy = [...cart];
  hardCopy = hardCopy.filter((i) => i.id !== item.id);
  const newTotal = total(hardCopy);
  yield put({ type: REMOVE_FROM_CART, payload: { hardCopy, newTotal } });
}

export function* watchAddtoCartSaga() {
  yield takeEvery(ADD_TO_CART_SAGA, addTocartSaga);
}
export function* watchRemoveCartSaga() {
  yield takeEvery(REMOVE_FROM_CART_SAGA, removeFromCartSaga);
}
