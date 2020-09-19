import {takeLatest, put, call, all} from 'redux-saga/effects';
import {clearCart} from './cart.actions';
import UserActionTypes from '../user/user.types';

function* emptyCart() {
    yield put(clearCart());
}
function* onSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, emptyCart);
}

export function* cartSagas() {
    yield all([call(onSignOut)])
}