import { put, takeEvery, call } from "redux-saga/effects";
import { GET_PRODUCT, GET_PRODUCT_SAGA } from "../redux/actions/actionTypes";


const getProductSaga = function* (action) {
  try {
    const url = `https://fakestoreapi.com/products/`;
    const setHeader = { headers: { "Content-Type": "application/json" } };
    let res = yield call(fetch, url, { setHeader });
    let products = yield res.json();

    yield put({ type: GET_PRODUCT, payload: products});
  } catch (error) {
    console.log(error + 'api reqest faild');
  }
};

export function* watchGetProductSaga() {
  yield takeEvery(GET_PRODUCT_SAGA, getProductSaga);
}