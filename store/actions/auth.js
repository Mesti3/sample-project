import * as actionTypes from './actionTypes';

export const setAuth = (admin) => {
  return {
    type: actionTypes.SET_ADMIN,
    admin: admin
  }
};

export const setCaptcha = (code) => {
  return {
    type: actionTypes.SET_CAPTCHA,
    code: code
  }
};


export const setAssigment = (assigment) => {
  return {
    type: actionTypes.SET_ASSIGMENT,
    assigment: assigment
  }
};



