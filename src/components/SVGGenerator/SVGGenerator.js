import s from './SVGGenerator.module.css'
const SVGGenerator = ({type}) => {
  switch (type) {
    case 'up':
      return (
        <svg className={s.arrowUp} viewBox="0 0 100 85">
          <polygon
            points="58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056"/>
        </svg>
      )
    case 'down':
      return (
        <svg className={s.arrowDown} viewBox="0 0 100 85">
          <polygon
            points="58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056"/>
        </svg>
      )
    case 'right':
      return (
        <svg className={s.arrowRight} viewBox="0 0 100 85">
          <polygon
            points="58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056"/>
        </svg>
      )
    case 'left':
      return (
        <svg className={s.arrowLeft} viewBox="0 0 100 85">
          <polygon
            points="58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056"/>
        </svg>
      )
    default:
      return
  }
}
export default SVGGenerator