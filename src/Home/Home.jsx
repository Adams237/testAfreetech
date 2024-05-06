import React, { useEffect, useRef } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import {  useSelector } from "react-redux"

import Sidebar from '../components/Sidebar/Sidebar'
import "./home.css"

function Home() {
  const navigate = useNavigate()
  const student = useSelector(state => state.student.value)
  useEffect(() => {
    if (student.length === 0) {
      console.log('ici');
      navigate('/auth')
    }
  }, [student])
  const wrapperRef = useRef()
  return (
    <div className='wrapper' ref={wrapperRef}>
      <Sidebar wrapperRef={wrapperRef} />
      <div className='main_container'>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
