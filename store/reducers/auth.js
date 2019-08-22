import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
  admin: false,
  code: '',
  assigment: false
};


const setAdmin = (state, action) => {
  return updateObject(state, {
    admin: action.admin
  })
};

const setCaptcha = (state, action) => {
  return updateObject(state, {
    code: action.code
  })
};

const setAssigment = (state, action) => {
  return updateObject(state, {
    assigment: action.assigment
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_ADMIN:
    return setAdmin(state, action);
  case actionTypes.SET_CAPTCHA:
    return setCaptcha(state, action);
  case actionTypes.SET_ASSIGMENT:
    return setAssigment(state, action);
  default:
    return state;
  }
};

export default reducer;