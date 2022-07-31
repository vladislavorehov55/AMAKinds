import {combineReducers} from "redux";
import {stepsReducer} from "./stepsReducer";
import {fieldReducer} from "./fieldReducer";

export const rootReducer = combineReducers({
  field: fieldReducer,
  steps: stepsReducer
})