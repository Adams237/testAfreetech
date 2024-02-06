import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../CreateUser/createrUser.css'

function CreateAssurance() {
    const assurance = localStorage.getItem('INTIAASSURANCE') ? [ ...JSON.parse(localStorage.getItem('INTIAASSURANCE'))] : []
    const navigate = useNavigate()
    const date = new Date()
    const [assur, setAssur] = useState({})
    const handleChange = (e)=>{
        setAssur({
            ...assur, [e.target.name]: e.target.value, id: date.getTime()
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const existAssur = assurance.find((item)=> item.name === assur.name)
        // console.log(existmail);
        if(existAssur) {
            alert('assuraance déjà utiliser')
            return
        }
        assurance.push(assur)
        const assurSet = JSON.stringify(assurance)
        localStorage.setItem('INTIAASSURANCE', assurSet)
        navigate({pathname:`/getAssur`})
        alert('Assurance ajouter')
        setAssur({})
        // console.log(user);
    }
  return (
    <div className='createUserContainer'>
    <h2>Créer une Assurance</h2>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='item'>
            <label htmlFor="username">Titre Assurance: </label>
            <input type="text" id="username" name='name' required  onChange={(e)=>handleChange(e)} />
        </div>
        <div className='item'>
            <label htmlFor="phone">Prix FCFA: </label>
            <input type="text" id="phone" name='prix' required  onChange={(e)=>handleChange(e)} />
        </div>
        <div className='item'>
            <label htmlFor="datenais">Validité : </label>
            <input type="text" id="dateNais" name='validite' required  onChange={(e)=>handleChange(e)} />
        </div>
        <button onSubmit={(e)=>handleSubmit(e)} className='buttomUser'>
            Ajouter 
        </button>
    </form>
</div>
  )
}

export default CreateAssurance