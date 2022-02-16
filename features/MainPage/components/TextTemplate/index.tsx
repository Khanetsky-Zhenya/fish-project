import React from 'react'

import StandartBtn from 'components/StandartBtn'

import classes from './styles.module.scss'

const TextTemplate = (props) => {
  const { pretitle, title, subtitle, leftBtnText, rightBtnText, skin = 'small' } = props;
  return (
    <div className={skin === 'large' ? classes.largeSkin : classes.smallSkin}>
      <div className={classes.preText}>
        <div className={classes.tire}></div>
        <p className={classes.preTitle}>{pretitle}</p>
      </div>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.subtitle}>{subtitle}</p>
      <div className={classes.buttonGroup}>
        {leftBtnText && <StandartBtn rootClass={classes.leftBtn} name={leftBtnText} />}
        {rightBtnText && <StandartBtn  rootClass={classes.rightBtn} name={rightBtnText} />}
      </div>
    </div>
  )
}

export default TextTemplate