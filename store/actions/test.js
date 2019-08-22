import * as actionTypes from './actionTypes';

export const createTest = (tests) => {
  return {
    type: actionTypes.ADD_TEST,
    tests: tests
  }
};

export const updateTest = (test) => {
  return {
    type: actionTypes.UPDATE_TEST,
    test: test
  }
};

export const removeTest = (name) => {
  return {
    type: actionTypes.REMOVE_TEST,
    name: name
  }
};

export const getTests = () => {
  return {
    type: actionTypes.GET_TEST
  }
};

export const setTests = (tests) => {
  return {
    type: actionTypes.SET_TEST,
    tests: tests
  }
};

export const addQuestrion = (question) => {
  return {
    type: actionTypes.ADD_QUESTION,
    question: question
  }
};