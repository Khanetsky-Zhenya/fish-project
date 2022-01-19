import React from 'react'

import classes from './styles.module.scss'

const TextTemplate = (props) => {
    const { pretitle, title, subtitle } = props;
  return (
    <>
      <div className={classes.preText}>
        <div className={classes.tire}></div>
        <p className={classes.preTitle}>{pretitle}</p>
      </div>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.subtitle}>{subtitle}</p>
    </>
  )
}

export default TextTemplate