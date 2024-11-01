// Main page of importing pages of figma template

import Cards from './component/Cards/Cards'
import Home from './component/home/page'
import React from 'react'

const page = () => {
  return (
    <div>
      <Home />
      <Cards />
    </div>
  )
}

export default page