import React from 'react'

import classes from './styles.module.scss'


const TextTemplate = (props) => {
    const { pretitle, title, subtitle } = props;
  return (
<div>
  <div className={classes.pre_text}>
    <div className={classes.tire}></div>
    <p className={classes.pre_title2}>{pretitle}</p>
  </div>
<h2 className={classes.title}>{title}</h2>
<p className={classes.subtitle}>{subtitle}</p>
</div>
  )
}

export default TextTemplate