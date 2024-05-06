import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './navbar.css'

function Navbar() {
  const student = useSelector(state=>state.student.value)
  return (
    <div className='navbarContainer'>
      <Link to="/" className='logo'>
        NFCBANK
      </Link>
      <div className='link' >

        <Link to="/pension" style={{
          marginRight:'50px',
          textDecoration:'none',
          fontSize:'20px'
        }} >Payser la pension</Link>
        <div className='link'> Matricule:</div>
        <div className='link'> {student[0]?.matricule}  </div>
      </div>

    </div>
  )
}

export default Navbar