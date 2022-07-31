import {CHOOSE_CELL, CREATE_FIELD, GENERATE_STEP, INIT_STEPS, SET_FIELD_ACTIVE} from "./types";
export const createField = (rowCount = 3, columnCount = 3) => {
  return {
    type: CREATE_FIELD,
    payload: {
      fieldParams: {rowCount, columnCount}
    }
  }
}
export const setFieldActive = (flag) => {
  return {type: SET_FIELD_ACTIVE, payload: {flag}}
}
export const generateStep = (field, xStart, yStart) => {
  return {type: GENERATE_STEP, payload: {field, xStart, yStart}}
}

export const initSteps = () => {
  return {type: INIT_STEPS}
}

export const chooseCell = (chosenCell, trueCell) => {
  return {type: CHOOSE_CELL, payload: {chosenCell, trueCell}}
}