import React, { useState } from 'react'
import './createrUser.css'
import { useNavigate } from 'react-router-dom';
function CreateUser() {
    const users = localStorage.getItem('INTIA') ? [ ...JSON.parse(localStorage.getItem('INTIA'))] : []
    const allAssurance = localStorage.getItem('INTIAASSURANCE') ? [...JSON.parse(localStorage.getItem('INTIAASSURANCE'))] : []
    const navigate = useNavigate()
    // console.log(users);
    const date = new Date()
    const [user, setUser] = useState({})
    const handleChange = (e)=>{
        setUser({
            ...user, [e.target.name]: e.target.value, id: date.getTime()
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const existmail = users.find((item)=> item.email === user.email)
        // console.log(existmail);
        if(existmail) {
            alert('email déjà utiliser')
            return
        }
        users.push(user)
        const userSet = JSON.stringify(users)
        localStorage.setItem('INTIA', userSet)
        navigate({pathname:`/getUsers`})
        alert('utilisateur ajouter')
        setUser({})
        // console.log(user);
    }
    return (
        <div className='createUserContainer'>
            <h2>Créer un Utilisateur</h2>
            {
                allAssurance.length ? <form onSubmit={(e)=>handleSubmit(e)}>
                <div className='item'>
                    <label htmlFor="username">Nom d'utilisateur : </label>
                    <input type="text" id="username" name='username' required  onChange={(e)=>handleChange(e)} />
                </div>
                <div className='item'>
                    <label htmlFor="phone">Téléphone : </label>
                    <input type="text" id="phone" name='phone' required  onChange={(e)=>handleChange(e)} />
                </div>
                <div className='item'>
                    <label htmlFor="datenais">Date  de naissance : </label>
                    <input type="text" id="dateNais" name='dateNaise' required  onChange={(e)=>handleChange(e)} />
                </div>
                <div className='item'>
                    <label htmlFor="pays">Pays : </label>
                    <input type="text" id="pays" name='pays' required  onChange={(e)=>handleChange(e)}/>
                </div>
                <div className='item'>
                    <label htmlFor="ville">Ville : </label>
                    <input type="text" id="ville" name='ville' required  onChange={(e)=>handleChange(e)} />
                </div>
                <div className='item'>
                    <label htmlFor="email">adresse mail : </label>
                    <input type="email" id="email" name='email' required  onChange={(e)=>handleChange(e)}/>
                </div>
                <div className='item'>
                    <label htmlFor="username">Assurance : </label>
                    <select onChange={(e)=>handleChange(e)} name='assurance'>
                        <option value="">Choisir une assurance</option>
                        {
                            allAssurance.map((item, index)=>{
                                return <option key={index} value={item.name}>{item.name}</option>
                            })
                        }
                    </select>
                    {/* <input type="text" id="assurance" name='assurance' required onChange={(e)=>handleChange(e)} /> */}
                </div>
                <button onSubmit={(e)=>handleSubmit(e)} className='buttomUser'>
                    Ajouter 
                </button>
            </form>:
            <div style={{
                fontSize: 'larger',
                fontWeight:'bold',
                color: 'red',
                textAlign: 'center'
            }}>Aucune Assurance disponible pour le moment!<br/> Pour ajouter un utilisateur il faut au moins créer une assurance </div>
            }
            
        </div>
    )
}

export default CreateUser