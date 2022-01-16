import React from 'react'

import classes from './styles.module.scss'


const BtnGreen = (props) => {
    const { name } = props;
  return (
<button className={classes.btnGreen}>{name}</button>
  )
}

export default BtnGreen