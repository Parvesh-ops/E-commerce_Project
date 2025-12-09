import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return <Outlet />;   //only the page (NO header, NO footer)
}

export default DashboardLayout
