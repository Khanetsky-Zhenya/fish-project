import React, { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import classNames from 'classnames'
import { getImgUrl } from 'services'

import classes from './styles.module.scss'

const Header: FC<HeaderProps> = ({ isMainPage }) => {
  return (
    <div className={cn(classes.wrapper, isMainPage && classes.mainPageHeaderWrapper)}>
      <div className={classes.info}>
        <Link href={'/'}><div className={classes.logo}><img src={getImgUrl('logo.png')} alt='Fishing Club'/></div></Link>
        <ul className={classes.nav}>
          <Link href={'/'}><li className={classes.navItem}>Поиск водоема</li></Link>
          <Link href={'/reservoirs'}><li className={classNames(classes.navItem, classes.navItemCenter)}>Все водоемы</li></Link>
          <Link href={'/'}><li className={classes.navItem}>Рыбаки</li></Link>
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

interface HeaderProps {
  isMainPage: boolean
}

export default Header