import React from 'react'

import classes from './styles.module.scss'

import { getImgUrl } from 'services'

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <img className={classes.header_logo} src="" alt='логотип'/>
          <ul className={classes.header_nav}>
            <li className={classes.header_nav_item}>Поиск водоема</li>
            <li className={classes.header_nav_item}>Все водоемы</li>
            <li className={classes.header_nav_item}>Рыбаки</li>   
          </ul>
        <div className={classes.header_authorization}>
          <img className={classes.header_authorization_userIcon} src={getImgUrl('icons/userIcon.png')} alt='Иконка пользователя'/>
          <p className={classes.header_authorization_userFirstName}>Дима</p>
          <p className={classes.header_authorization_userSecondName}>Долидов</p>
        </div>
      </div>
    </div>
  )
}

export default Header