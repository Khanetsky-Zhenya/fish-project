import React, { FC } from 'react'

import AdminHeader from '../../AdminHeader'

import classes from './styles.module.scss'

const AdminPageWrapper: FC = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <AdminHeader />
      <div className={classes.body}>
        {children}
      </div>
    </div>
  )
}

export default AdminPageWrapper