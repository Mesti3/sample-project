import * as actionTypes from './actionTypes';

export const addHour = (hour) => {
  return {
    type: actionTypes.ADD_HOUR,
    hour: hour
  }
};

export const updateHour = (hour) => {
  return {
    type: actionTypes.UPDATE_HOUR,
    hour: hour
  }
};

export const removeHour = (hour) => {
  return {
    type: actionTypes.REMOVE_HOUR,
    hour: hour
  }
};

export const getHours = () => {
  return {
    type: actionTypes.GET_HOUR
  }
};

export const setHours = (hours) => {
  return {
    type: actionTypes.SET_HOUR,
    hours: hours
  }
};