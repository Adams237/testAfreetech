import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbarContainer'>
      <Link to="/" className='logo'>
        INTIA
      </Link>
      <div >
        <Link to="addUser" className='link'> Ajouter un tuilisateur </Link>
        <Link to="getUsers" className='link'> Aficher la liste des Utilisateurs </Link>
        <Link to="createAssurance" className='link'> Créer une assurance </Link>
        <Link to="getAssur" className='link'> Assurances  </Link>
      </div>

    </div>
  )
}

export default Navbar