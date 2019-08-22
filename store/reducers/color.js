import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
  normal: true,
  light: false,
  medium: false,
  high: false
};


const setNormal = (state, action) => {
  return updateObject(state, {
    normal: action.normal,
    light: false,
    medium: false,
    high: false
  })
};

const setLight = (state, action) => {
  return updateObject(state, {
    normal: false,
    light: action.light,
    medium: false,
    high: false
  })
};

const setMedium = (state, action) => {
  return updateObject(state, {
    normal: false,
    light: false,
    medium: action.medium,
    high: false
  })
};

const setHigh = (state, action) => {
  return updateObject(state, {
    normal: false,
    light: false,
    medium: false,
    high: action.high
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_COLOR_NORMAL:
    return setNormal(state, action);
  case actionTypes.SET_COLOR_LIGHT:
    return setLight(state, action);
  case actionTypes.SET_COLOR_MEDIUM:
    return setMedium(state, action);
  case actionTypes.SET_COLOR_HIGH:
    return setHigh(state, action);
  default:
    return state;
  }
};

export default reducer;