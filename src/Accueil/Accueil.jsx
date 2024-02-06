import React from 'react'
import './accueil.css'
import { useNavigate } from 'react-router-dom'
function Accueil() {
  const navigate= useNavigate()
  const changeScreen = (text)=>{
    navigate(text)
  }
  return (
    <div className='containerAccueil'>
        <h1>
            BIENVENU SUR INTIA VOTRE SERVICE D'ASSURANCE 
        </h1>
        <div>
            <button className='btnAdd' onClick={()=>changeScreen('addUser')}>Ajouter un utilisateur</button>
            <button className='btnAdd' onClick={()=>changeScreen('createAssurance')}>Ajouter une assurance</button>
        </div>
    </div>
  )
}

export default Accueil