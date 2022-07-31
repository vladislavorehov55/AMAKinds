import React from 'react';
import s from './Cell.module.css'
const Cell = ({cell, clickCellHandler}) => {

  const getClasses = () => {
    if (cell.background === null) return s.cell
    if (cell.background) {
      return `${s.cell} ${s.correctCell}`
    }
    else return `${s.cell} ${s.incorrectCell}`
  }
  return (
    <div className={getClasses()} onClick={() => clickCellHandler(cell)}>{cell.isEmpty}</div>
  );
};

export default Cell;