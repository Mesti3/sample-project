import UserService from '../../services/UserService';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* getUsersSaga(action) {

  try {
    let user = yield new UserService();
    const res = yield user.getUsers(action.role);
    yield put(actions.setUsers(res));
  } catch (error) {
    yield put(error);
  }
}

export function* registerUserSaga(action) {
  try {
    let user = yield new UserService();
    yield user.createUser(action.user);
  } catch (error) {
    yield put(error);
  }
}

export function* removeUserSaga(action) {
  try {
    let user = yield new UserService();
    yield user.remove(action.user);
  } catch (error) {
    yield put(error);
  }
}

export function* updateUserSaga(action) {
  try {
    let user = yield new UserService();
    yield user.updateUser(action.user);
  } catch (error) {
    yield put(error);
  }
}

