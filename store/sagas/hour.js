import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import HourService from '../../services/HourService';


export function* createHourSaga(action) {
  try {
    let hour = yield new HourService();
    yield hour.createHour(action.hour);
  } catch (err) {
    yield put(err);
  }
}

export function* updateHourSaga(action) {
  try {
    let hour = yield new HourService();
    yield hour.updateHour(action.hour);
  } catch (err) {
    yield put(err);
  }
}

export function* removeHourSaga(action) {
  try {
    let hour = yield new HourService();
    yield hour.removeHour(action.hour);
  } catch (err) {
    yield put(err);
  }
}

export function* getHoursSaga(action) {
  try {
    let hour = yield new HourService();
    const res = yield hour.getHours();
    yield put(actions.setHours(res));
  } catch (err) {
    yield put(err);
  }
}

