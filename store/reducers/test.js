import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
  tests: [],
  loading: true,
  generatedTest: []
};

const createTest = (state, action) => {
  return updateObject(state, {
    tests: state.tests
  })
};

const updateTest = (state, action) => {
  return updateObject(state, {
    tests: state.tests
  })
};

const removeTest = (state, action) => {
  return updateObject(state, {
    tests: state.tests
  })
};

const setTests = (state, action) => {
  return updateObject(state, {
    tests: action.tests,
    loading: false
  })
};

const addQuestion = (state, action) => {
  return updateObject(state, {
    generatedTest: state.generatedTest.concat(action.question),
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.ADD_TEST:
    return createTest(state, action);
  case actionTypes.UPDATE_TEST:
    return updateTest(state, action);
  case actionTypes.REMOVE_TEST:
    return removeTest(state, action);
  case actionTypes.SET_TEST:
    return setTests(state, action);
  case actionTypes.ADD_QUESTION:
    return addQuestion(state, action);
  default:
    return state;
  }
};

export default reducer;