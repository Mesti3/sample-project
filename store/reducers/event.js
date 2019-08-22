import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
  calendar: false,
  events: []
};


const setCalendar = (state, action) => {
  return updateObject(state, {
    calendar: action.calendar
  })
};

const setEvents = (state, action) => {
  return updateObject(state, {
    events: action.events
  })
};

const addEvent = (state, action) => {
  return updateObject(state, {
    events: action.events
  })
};

const updateEvent = (state, action) => {
  return updateObject(state, {
    events: action.events
  })
};

const removeEvent = (state, action) => {
  return updateObject(state, {
    events: action.events
  })
};

const getEvents = (state, action) => {
  return updateObject(state, {
    events: action.events
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_CALENDAR:
    return setCalendar(state, action);
  case actionTypes.SET_EVENT:
    return setEvents(state, action);
  case actionTypes.ADD_EVENT:
    return addEvent(state, action);
  case actionTypes.GET_EVENT:
    return getEvents(state, action);
  case actionTypes.UPDATE_EVENT:
    return updateEvent(state, action);
  case actionTypes.REMOVE_EVENT:
    return removeEvent(state, action);
  default:
    return state;
  }
};

export default reducer;