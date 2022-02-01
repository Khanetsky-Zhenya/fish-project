import React from 'react'

import classes from './styles.module.scss'


const StandartBtn = (props) => {
  const { name, rootClass } = props;
  return (
    <div className={rootClass}>
      <button className={classes.standartBtn}>{name}</button>
    </div> 
  )
}

export default StandartBtn