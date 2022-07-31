import {CHOOSE_CELL, CREATE_FIELD, SET_FIELD_ACTIVE} from "../types";

const initialState = {field: [], xStart: null, yStart: null, isCanClick: false}
export const fieldReducer = (state = initialState, action) => {
  if (action.type === CREATE_FIELD) {
    const {fieldParams} = action.payload;
    const newField = [];
    for (let i = 0; i < fieldParams.rowCount; i++) {
      newField.push([]);
      for (let j = 0; j < fieldParams.columnCount; j++) {
        newField[i].push({
          isEmpty: 0,
          x: i,
          y: j,
          background: null
        })
      }
    }
    const min = 0;
    const rowInd = Math.floor(Math.random() * (fieldParams.rowCount - min)) + min;
    const columnInd = Math.floor(Math.random() * (fieldParams.columnCount - min)) + min;
    newField[rowInd][columnInd].isEmpty = 1;
    return {...state, field: newField, xStart: rowInd, yStart: columnInd}
  }
  if (action.type === SET_FIELD_ACTIVE) {
    const {flag} = action.payload
    return {...state, isCanClick: flag}
  }
  if (action.type === CHOOSE_CELL) {
    const newField = [...state.field];
    const {chosenCell, trueCell} = action.payload;
    if (chosenCell.x === trueCell.x && chosenCell.y === trueCell.y) {
      newField[trueCell.x][trueCell.y].background = true;
    }
    else {
      newField[chosenCell.x][chosenCell.y].background = false;
      newField[trueCell.x][trueCell.y].background = true;
    }
    return {...state, field: newField}
  }
  return state
}