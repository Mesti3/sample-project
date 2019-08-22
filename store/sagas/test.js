import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import TestService from "../../services/TestService";


export function* createTestSaga(action) {
  try {
    let test = yield new TestService();
    yield test.createTest(action.tests);
  } catch (err) {
    yield put(err);
  }
}

export function* updateTestSaga(action) {
  try {
    let test = yield new TestService();
    yield test.updateTest(action.test);
  } catch (err) {
    yield put(err);
  }
}

export function* removeTestSaga(action) {
  try {
    let test = yield new TestService();
    yield test.removeTest(action.name);
  } catch (err) {
    yield put(err);
  }
}

export function* getTestsSaga(action) {
  try {
    let test = yield new TestService();
    const res = yield test.getTests();
    yield put(actions.setTests(res));
  } catch (err) {
    yield put(err);
  }
}

