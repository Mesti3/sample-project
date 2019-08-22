import * as actionTypes from './actionTypes';

export const setColorNormal = (color) => {
  return {
    type: actionTypes.SET_COLOR_NORMAL,
    normal: color
  }
};

export const setColorLight = (color) => {
  return {
    type: actionTypes.SET_COLOR_LIGHT,
    light: color
  }
};

export const setColorMedium = (color) => {
  return {
    type: actionTypes.SET_COLOR_MEDIUM,
    medium: color
  }
};

export const setColorHigh = (color) => {
  return {
    type: actionTypes.SET_COLOR_HIGH,
    high: color
  }
};

