import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import Modale from '../components/Modal/Modal'

import "./pension.css"
import { useState } from 'react';
function Pension() {
    const [user, setUser] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const handleChange = (e)=>{
       setUser({
         ...user, [e.target.name]: e.target.value
       })
    }
    const isValidate = ()=>{
        if(!user.name || !user.school || !user.niveau ||  !user.phone || !user.cni || !user.montant || !user.tranche ){
            return "remplir tous les champs avec  une etoile rouge"
        }
        if(user.nom){

        }
        return true
    }
    const handleSubmit = ()=>{
        const valide = isValidate()
        if(valide === true){
            setIsOpen(true)
        }
        else{
            toast.error(valide)
        }
    }
  return (
    <div>
            <div className="containerInscription">
                <h2>Payer la pension</h2>
                <div className='containerInput'>
                    <div className='inputItem' style={{ marginTop: "30px" }}>
                        <label htmlFor="nom">Nom Complet <span>*</span> </label>
                        <input placeholder="Entrer votre texte..." className="input" name="name" onChange={(e)=>handleChange(e)} type="text" />
                    </div>
                    <div className='inputItem' style={{ marginTop: "30px" }}>
                        <label htmlFor="ecole">Ecole <span>*</span>  </label>
                        <input placeholder="Entrer votre texte..." className="input" name="school" onChange={(e)=>handleChange(e)} type="text" />
                    </div>

                </div>
                <div className='containerInput'>
                    <div className='inputItem'>
                        <label htmlFor="classw">classe/Niveau <span>*</span></label>
                        <input placeholder="Entrer votre texte..." className="input" name="niveau" onChange={(e)=>handleChange(e)} type="text" />
                    </div>
                    <div className='inputItem'>
                        <label htmlFor="ecole">Nom du parent/tuteur  </label>
                        <input placeholder="Entrer votre texte..." className="input" name="parent" onChange={(e)=>handleChange(e)} type="text" />
                    </div>
                </div>
                <div className='containerInput'>
                    <div className='inputItem'>
                        <label htmlFor="classw">N° de téléphone portable <span>*</span> </label>
                        <input placeholder="Entrer votre texte..." className="input" name="phone" onChange={(e)=>handleChange(e)} type="text" />
                    </div>
                    <div className='inputItem'>
                        <label htmlFor="ecole">N° de cni <span>*</span> </label>
                        <input placeholder="Entrer votre texte..." className="input" name="cni" onChange={(e)=>handleChange(e)} type="text" />
                    </div>
                </div>
                <div className='containerInput'>
                    <div className='inputItem'>
                        <label htmlFor="classw">Montant a payer  <span>*</span></label>
                        <input placeholder="Entrer votre texte..." className="input" name="montant" onChange={(e)=>handleChange(e)} type="text" />
                    </div>
                    <div className='inputItem'>
                        <label htmlFor="ecole">N° de matricule  </label>
                        <input placeholder="Entrer votre texte..." className="input" name="matricule" onChange={(e)=>handleChange(e)} type="text" />
                    </div>
                </div>
                <div className='containerInput'>
                    <div className='inputItem'>
                        <label htmlFor="classw">Tranche  <span>*</span></label>
                        <input placeholder="Entrer votre texte..." className="input" name="tranche" onChange={(e)=>handleChange(e)} type="text" />
                    </div>
                </div>
                <button className="animated-button" onClick={handleSubmit}>
                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                    <span className="text" >Inscription</span>
                    <span className="circle"></span>
                    <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                </button>

            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}/>
            {isOpen && <Modale isOpen={isOpen} setIsOpen={setIsOpen} user={user} setUser={setUser}/>}
        </div>
  )
}

export default Pension
