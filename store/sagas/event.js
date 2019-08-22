import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import EventService from '../../services/EventService';


export function* createEventSaga(action) {
  try {
    let event = yield new EventService();
    yield event.createEventt(action.event);
  } catch (err) {
    yield put(err);
  }
}

export function* updateEventSaga(action) {
  try {
    let event = yield new EventService();
    yield event.updateEvent(action.event);
  } catch (err) {
    yield put(err);
  }
}

export function* removeEventSaga(action) {
  try {
    let event = yield new EventService();
    yield event.removeEvent(action.event);
  } catch (err) {
    yield put(err);
  }
}

export function* getEventsSaga(action) {
  try {
    let event = yield new EventService();
    const res = yield event.getEvents();
    yield put(actions.setEvents(res));
  } catch (err) {
    yield put(err);
  }
}

