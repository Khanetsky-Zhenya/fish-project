import React from 'react'

import classes from './styles.module.scss'
import classNames from 'classnames'
import { getImgUrl } from 'services'

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        <img className={classes.logo} src={getImgUrl('logo.png')} alt='логотип'/>
          <ul className={classes.nav}>
            <li className={classes.navItem}>Поиск водоема</li>
            <li className={classNames(classes.navItem, classes.navItemCenter)}>Все водоемы</li>
            <li className={classes.navItem}>Рыбаки</li>   
          </ul>
        <div className={classes.authorization}>
          <img className={classes.userIcon} src={getImgUrl('icons/userIcon.png')} alt='Иконка пользователя'/>
          <p className={classes.userFirstName}>Дима</p>
          <p className={classes.userSecondName}>Долидов</p>
        </div>
      </div>
    </div>
  )
}

export default Header