import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
  modalTable: false,
  modalCreateFile: false,
  modalLoadFile: false,
  modalEvent: false,
  modalGenerate: false,
  modalGenerateTest: false,
  File: [],
  count: 1
};

const setModalTable = (state, action) => {
  return updateObject(state, {
    modalTable: action.modalTable
  })
};

const setModalCreateFile = (state, action) => {
  return updateObject(state, {
    modalCreateFile: action.modalCreateFile
  })
};

const setModalLoadFile = (state, action) => {
  return updateObject(state, {
    modalLoadFile: action.modalLoadFile
  })
};

const setLoadFile = (state, action) => {
  return updateObject(state, {
    File: state.File.concat(action.File)
  })
};

const setEventModal = (state, action) => {
  return updateObject(state, {
    modalEvent: action.event
  })
};

const setCount = (state, action) => {
  return updateObject(state, {
    count: action.count
  })
};

const setClearFile = (state, action) => {
  return updateObject(state, {
    File: []
  })
};

const setGenerateTest = (state, action) => {
  return updateObject(state, {
    modalGenerate: action.generate
  })
};

const setModalGenerateTest = (state, action) => {
  return updateObject(state, {
    modalGenerateTest: action.GenerateTest
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_MODAL_TABLE:
    return setModalTable(state, action);
  case actionTypes.SET_MODAL_CREATE_FILE:
    return setModalCreateFile(state, action);
  case actionTypes.SET_MODAL_LOAD_FILE:
    return setModalLoadFile(state, action);
  case actionTypes.SET_LOAD_FILE:
    return setLoadFile(state, action);
  case actionTypes.SET_EVENT_MODAL:
    return setEventModal(state, action);
  case actionTypes.SET_CLEAR:
    return setClearFile(state, action);
  case actionTypes.SET_COUNT:
    return setCount(state, action);
  case actionTypes.SET_GENERATE:
    return setGenerateTest(state, action);
  case actionTypes.SET_GENERATE_TEST:
    return setModalGenerateTest(state, action);
  default:
    return state;
  }
};

export default reducer;