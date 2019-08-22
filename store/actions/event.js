import * as actionTypes from './actionTypes';

export const setCalendar = (calendar) => {
  return {
    type: actionTypes.SET_CALENDAR,
    calendar: calendar
  }
};

export const setEvents = (events) => {
  return {
    type: actionTypes.SET_EVENT,
    events: events
  }
};
export const updateEvent = (event) => {
  return {
    type: actionTypes.UPDATE_EVENT,
    event: event
  }
};

export const addEvent = (event) => {
  return {
    type: actionTypes.ADD_EVENT,
    event: event
  }
};

export const removeEvent = (event) => {
  return {
    type: actionTypes.REMOVE_EVENT,
    event: event
  }
};

export const getEvents = () => {
  return {
    type: actionTypes.GET_EVENT
  }
};


