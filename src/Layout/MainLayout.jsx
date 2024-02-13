import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../App.css'
const MainLayout = () => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <footer>Footer</footer>
    </>
  )
}

export default MainLayout