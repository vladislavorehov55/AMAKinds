import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {chooseCell, createField, setFieldActive} from "../../redux/actionsCreators";
import Cell from "./Cell/Cell";
import s from './Field.module.css';

const Field = () => {
  const {field, isCanClick} = useSelector(state => state.field);
  const {currentStepX, currentStepY} = useSelector(state => state.steps)
  const rowCount = field.length ? field.length : 3;
  const columnCount = field.length ? field[0].length : 3;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createField());
  },[])

  const clickCellHandler = (chosenCell) => {
    if (isCanClick) {
      dispatch(chooseCell(chosenCell, field[currentStepX][currentStepY]));
      dispatch(setFieldActive(false))
    }
  }
  return (
    <div className={s.field} style={{gridTemplateRows: `repeat(${rowCount}, auto)`, gridTemplateColumns: `repeat(${columnCount}, auto)`}}>
      {
        field.map(row => row.map((cell, ind) => <Cell cell={cell} key={ind} clickCellHandler={clickCellHandler}/>))
      }
    </div>
  );
};

export default Field;