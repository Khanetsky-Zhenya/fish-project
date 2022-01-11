import React from 'react'

import Header from "../../Header"

const PageWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default PageWrapper