import React from 'react';
import {useState} from 'react';
import {createField, initSteps} from "../../redux/actionsCreators";
import {useDispatch} from "react-redux";
import s from './Params.module.css';
const ParamsForm = () => {
  const [fieldSize, setFieldSize] = useState({rowCount: 3, columnCount: 3});
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setFieldSize(prevState => ({...prevState, [e.target.name + 'Count']: e.target.value}))
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createField(fieldSize.rowCount, fieldSize.columnCount));
    dispatch(initSteps());
  }
  return (
    <form onSubmit={submitHandler}>
      <input className={s.input} value={fieldSize.rowCount} name='row' onChange={changeHandler}/>x
      <input className={s.input} value={fieldSize.columnCount} name='column' onChange={changeHandler}/>
      <button className={s.btn}>Начать</button>
    </form>
  );
};

export default ParamsForm;