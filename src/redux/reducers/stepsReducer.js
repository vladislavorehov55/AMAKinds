import {GENERATE_STEP, INIT_STEPS} from "../types";

const initialState = {
  steps: Array(10).fill('_'),
  currentStepX: null,
  currentStepY: null,
}
export const stepsReducer = (state = initialState, action) => {
  if (action.type === GENERATE_STEP) {
    const newData = [...state.steps];
    const {field, xStart, yStart} = action.payload;

    const x = state.currentStepX === null ? xStart : state.currentStepX;
    const y = state.currentStepY === null ? yStart : state.currentStepY;
    const steps = {up: [-1, 0], down: [1, 0], right: [0, 1], left: [0, -1]};
    let indArr = [0, 1, 2, 3];
    let ind = Math.floor(Math.random() * indArr.length);
    let step = Object.values(steps)[indArr[ind]];
    while (field[x + step[0]] === undefined || field[x + step[0]][y + step[1]] === undefined) {
      const firstPath = indArr.slice(0, ind)
      const secondPath = indArr.slice(ind + 1);
      indArr = [...firstPath, ...secondPath];
      ind = Math.floor(Math.random() * indArr.length);
      step = Object.values(steps)[indArr[ind]];
    }
    newData[newData.indexOf('_')] = Object.keys(steps)[indArr[ind]]
    return {...state, steps: newData, currentStepX: x + step[0], currentStepY: y + step[1]}
  }
  if (action.type === INIT_STEPS) {
    return {steps: Array(10).fill('_'), currentStepX: null, currentStepY: null, isLastStep: false}
  }
  return state
}