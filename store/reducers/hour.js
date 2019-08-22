import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
  hours: [],
  loading: true
};

const addHour = (state, action) => {
  return updateObject(state, {
    hour: state.hours
  })
};

const updateHour = (state, action) => {
  return updateObject(state, {
    hour: state.hours
  })
};

const removeHour = (state, action) => {
  return updateObject(state, {
    hour: state.hours
  })
};

const getHours = (state, action) => {
  return updateObject(state, {
    hours: action.hours
  })
};

const setHours = (state, action) => {
  return updateObject(state, {
    hours: action.hours,
    loading: false
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.ADD_HOUR:
    return addHour(state, action);
  case actionTypes.UPDATE_HOUR:
    return updateHour(state, action);
  case actionTypes.REMOVE_HOUR:
    return removeHour(state, action);
  case actionTypes.GET_HOUR:
    return getHours(state, action);
  case actionTypes.SET_HOUR:
    return setHours(state, action);
  default:
    return state;
  }
};

export default reducer;