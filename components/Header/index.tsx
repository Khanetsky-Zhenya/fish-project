import React from 'react'

import classes from './styles.module.scss'

import { getImgUrl } from 'services'

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <img className={classes.logo} src={getImgUrl('logo.png')} alt='логотип'/>
          <ul className={classes.nav}>
            <li className={classes.nav_item}>Поиск водоема</li>
            <li className={classes.nav_item_center}>Все водоемы</li>
            <li className={classes.nav_item}>Рыбаки</li>   
          </ul>
        <div className={classes.authorization}>
          <img className={classes.authorization_userIcon} src={getImgUrl('icons/userIcon.png')} alt='Иконка пользователя'/>
          <p className={classes.authorization_userFirstName}>Дима</p>
          <p className={classes.authorization_userSecondName}>Долидов</p>
        </div>
      </div>
    </div>
  )
}

export default Header