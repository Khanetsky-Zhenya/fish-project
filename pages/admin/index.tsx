import React from 'react'

import AdminPageWrapper from 'components/layouts/AdminPageWrapper'

import classes from './styles.module.scss'

export const AdminPage = () => {
  return (
    <AdminPageWrapper>
      <h2 className={classes.header}>Добро пожаловать, уважаемый Админ!</h2>
    </AdminPageWrapper>
  )
}

export default AdminPage