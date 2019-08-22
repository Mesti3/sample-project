import { all, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { getUsersSaga, registerUserSaga, removeUserSaga, updateUserSaga } from "./user";

import { createTestSaga, getTestsSaga, removeTestSaga, updateTestSaga } from "./test";

import { createHourSaga, getHoursSaga, removeHourSaga, updateHourSaga } from './hour';

import { createEventSaga, getEventsSaga, removeEventSaga, updateEventSaga } from './event';

import { createPaySaga } from './pay'

export function* watchUsers() {
  yield all([
    takeEvery(actionTypes.GET_USER, getUsersSaga),
    takeEvery(actionTypes.REGISTER_USER, registerUserSaga),
    takeEvery(actionTypes.UPDATE_USER, updateUserSaga),
    takeEvery(actionTypes.REMOVE_USER, removeUserSaga)
  ])
}

export function* watchTests() {
  yield all([
    takeEvery(actionTypes.GET_TEST, getTestsSaga),
    takeEvery(actionTypes.ADD_TEST, createTestSaga),
    takeEvery(actionTypes.UPDATE_TEST, updateTestSaga),
    takeEvery(actionTypes.REMOVE_TEST, removeTestSaga)
  ])
}

export function* watchHours() {
  yield all([
    takeEvery(actionTypes.GET_HOUR, getHoursSaga),
    takeEvery(actionTypes.ADD_HOUR, createHourSaga),
    takeEvery(actionTypes.UPDATE_HOUR, updateHourSaga),
    takeEvery(actionTypes.REMOVE_HOUR, removeHourSaga)
  ])
}

export function* watchEvents() {
  yield all([
    takeEvery(actionTypes.GET_EVENT, getEventsSaga),
    takeEvery(actionTypes.ADD_EVENT, createEventSaga),
    takeEvery(actionTypes.UPDATE_EVENT, updateEventSaga),
    takeEvery(actionTypes.REMOVE_EVENT, removeEventSaga)
  ])
}

export function* watchPayments() {
  yield takeEvery(actionTypes.MAKE_PAY, createPaySaga)
}

