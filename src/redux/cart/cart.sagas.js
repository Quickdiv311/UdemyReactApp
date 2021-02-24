import {takeLatest, put, call, all} from 'redux-saga/effects';
import userTypes from '../user/user.types';
import {clearCart} from './cart.actions';

export function* clearCartAsync()
{
  yield put(clearCart());
}

export function* clearCartOnSignOut()
{
    yield takeLatest(userTypes.SignOutSuccess,clearCartAsync);
}

export function* cartSaga()
{
    yield all([call(clearCartOnSignOut)]);
}