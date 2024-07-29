'use client'
import React, { useState } from 'react'
import SearchDashboard from './_components/search-dashboard'
import TemplateListing from './_components/template-listing'


const Dashboard = () => {
  const [input,setInput]=useState<string>("")

  return (
    <div>
      <SearchDashboard onSearchInput={setInput} />
      <TemplateListing input={input as string}/>
    </div>
  )
}

export default Dashboard