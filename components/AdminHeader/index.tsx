import React, { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { getImgUrl } from 'services'

import classes from './styles.module.scss'

const AdminHeader: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        <Link href={'/admin'}><div className={classes.logo}><img src={getImgUrl('logo.png')} alt='Fishing Club'/></div></Link>
        <ul className={classes.nav}>
          <Link href={'/'}><li className={classes.navItem}>Вернуться на сайт</li></Link>
          <Link href={'/admin/add-reservoir'}><li className={classNames(classes.navItem, classes.navItemCenter)}>Добавить водоем</li></Link>
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

export default AdminHeader