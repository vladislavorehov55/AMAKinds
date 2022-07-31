import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {generateStep, setFieldActive} from "../../redux/actionsCreators";
import SVGGenerator from "../SVGGenerator/SVGGenerator";
import s from './StepsBlock.module.css';
const StepsBlock = () => {
  const {steps, currentStepX, currentStepY} = useSelector(state => state.steps);
  const {field, xStart, yStart} = useSelector(state => state.field);
  const dispatch = useDispatch();

  useEffect(() => {
    if (field.length && steps.filter(item => item === '_').length) {
      setTimeout(() => {
        dispatch(generateStep(field, xStart, yStart))
      },1000)
    }
  },[field, currentStepX, currentStepY])
  useEffect(() => {
    if (!steps.filter(item => item === '_').length) {
      dispatch(setFieldActive(true))
    }
  }, [currentStepX, currentStepY])
  return (
    <div className={s.container}>
      {
        steps.map((item, ind) => <div className={s.cell} key={ind}>
          {
            item === '_' ? '' : <SVGGenerator type={item}/>
          }
        </div>)
      }
    </div>
  )
};

export default StepsBlock;