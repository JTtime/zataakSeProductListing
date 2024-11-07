'use client'

import { FilterProvider } from '@/context/FilterContext'
import React from 'react'
import ProductListPage from './components/ProductListing'

const page = () => {
  return (
    <div>
      <FilterProvider>
        <ProductListPage/>
      </FilterProvider>
    </div>
  )
}

export default page