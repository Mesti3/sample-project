import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";


const initialState = {
  users: []
};

const registerUser = (state, action) => {
  return updateObject(state, {
    users: state.users
  })
};

const updateUser = (state, action) => {
  return updateObject(state, {
    users: action.user
  })
};

const setUsers = (state, action) => {
  return updateObject(state, {
    users: action.users
  })
};

const removeUser = (state, action) => {
  return updateObject(state, {
    users: action.users
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.REGISTER_USER:
    return registerUser(state, action);
  case actionTypes.UPDATE_USER:
    return updateUser(state, action);
  case actionTypes.REMOVE_USER:
    return removeUser(state, action);
  case actionTypes.SET_USER:
    return setUsers(state, action);
  default:
    return state;
  }
};

export default reducer;