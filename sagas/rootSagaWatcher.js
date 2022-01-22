import { all } from "redux-saga/effects";
import { watchRemoveCartSaga, watchAddtoCartSaga } from "./cartSaga";
import { watchGetProductSaga } from "./productSaga";

export default function* rootWatcher() {
  yield all([
    watchAddtoCartSaga(),
    watchRemoveCartSaga(),
    watchGetProductSaga(),
  ]);
}
