import React from 'react'

import classes from './styles.module.scss'
import classNames from 'classnames'
import {getImgUrl} from 'services'
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        <ul className={classes.nav}>
          <li className={classes.navItem}>Поиск водоема</li>
          <Link href={'/reservoirs'}>
            <li className={classNames(classes.navItem, classes.navItemCenter)}>Все водоемы</li>
          </Link>
          <li className={classes.navItem}>Рыбаки</li>
        </ul>
        <div className={classes.socialNetwork}>
          <img className={classes.networkIcon} src={getImgUrl('icons/socialIconViber.png')} alt='Иконка Viber'/>
          <img className={classNames(classes.networkIcon, classes.networkIconCenter)}
               src={getImgUrl('icons/socialIconInstagram.png')} alt='Иконка Instagram'/>
          <img className={classes.networkIcon} src={getImgUrl('icons/socialIconTelegram.png')} alt='Иконка Telegram'/>
        </div>
      </div>
      <div className={classes.copyright}>© Fishing Club, 2022</div>
    </div>
  )
}

export default Footer