import React from 'react'
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <nav>NavBar</nav>
    <Outlet></Outlet>
    <footer>Footer</footer>
    </>
  )
}

export default MainLayout