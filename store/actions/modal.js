import * as actionTypes from './actionTypes';

export const setModalTable = (modalTable) => {
  return {
    type: actionTypes.SET_MODAL_TABLE,
    modalTable: modalTable
  }
};


export const setModalCreateFile = (modalCreateFile) => {
  return {
    type: actionTypes.SET_MODAL_CREATE_FILE,
    modalCreateFile: modalCreateFile
  }
};


export const setModalLoadFile = (modalLoadFile) => {
  return {
    type: actionTypes.SET_MODAL_LOAD_FILE,
    modalLoadFile: modalLoadFile
  }
};

export const setLoadFile = (File) => {
  return {
    type: actionTypes.SET_LOAD_FILE,
    File: File
  }
};

export const setEventModal = (event) => {
  return {
    type: actionTypes.SET_EVENT_MODAL,
    event: event
  }
};

export const setCount = (count) => {
  return {
    type: actionTypes.SET_COUNT,
    count: count
  }
};


export const setClearFile = (count) => {
  return {
    type: actionTypes.SET_CLEAR
  }
};

export const setGenerateTest = (generate) => {
  return {
    type: actionTypes.SET_GENERATE,
    generate: generate
  }
};

export const setModalGenerateTest = (GenerateTest) => {
  return {
    type: actionTypes.SET_GENERATE_TEST,
    GenerateTest: GenerateTest
  }
};


