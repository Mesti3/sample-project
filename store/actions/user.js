import * as actionTypes from './actionTypes';

export const registerUser = (user) => {
  return {
    type: actionTypes.REGISTER_USER,
    user: user
  }
};

export const updateUser = (user) => {
  return {
    type: actionTypes.UPDATE_USER,
    user: user
  }
};

export const removeUser = () => {
  return {
    type: actionTypes.REMOVE_USER,
  }
};

export const getUsers = (role) => {
  return {
    type: actionTypes.GET_USER,
    role: role
  }
};

export const setUsers = (users) => {
  return {
    type: actionTypes.SET_USER,
    users: users
  }
};