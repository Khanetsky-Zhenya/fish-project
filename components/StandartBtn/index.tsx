import React from 'react'

import classes from './styles.module.scss'


const StandartBtn = (props) => {
  const { name } = props;
  return (
    <button className={classes.StandartBtn}>{name}</button>
  )
}

export default StandartBtn