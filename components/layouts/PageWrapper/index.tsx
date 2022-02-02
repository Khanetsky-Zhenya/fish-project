import React, { FC } from 'react'
import cn from 'classnames'

import Footer from '../../Footer'
import Header from '../../Header'

import classes from './styles.module.scss'
import {useRouter} from "next/router";

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  const { pathname } = useRouter()
  const isMainPage = pathname === '/'

  return (
    <div className={cn(classes.wrapper, !isMainPage && classes.noMainPage)}>
      <Header isMainPage={isMainPage} />
        <div className={classes.body}>
          {children}
        </div>
      <Footer />
    </div>
  )
}

interface PageWrapperProps {
  children: any
}

export default PageWrapper