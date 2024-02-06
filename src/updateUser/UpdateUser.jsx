import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import '../CreateUser/createrUser.css'

function UpdateUser() {
    const allAssurance = localStorage.getItem('INTIAASSURANCE') ? [...JSON.parse(localStorage.getItem('INTIAASSURANCE'))] : []
    const { userId } = useParams()
    const navigate = useNavigate()
    const allUsers = localStorage.getItem('INTIA') ? [...JSON.parse(localStorage.getItem('INTIA'))] : []
    console.log(allUsers);
    const [user, setUser] = useState({})
    console.log(userId);
    const getUsr = () => {
        const currentUser = allUsers.find((item) => item.id == userId)
        setUser(currentUser)
    }
    useEffect(() => {
        getUsr()

    }, [allUsers.length])
    const handleChange = (e)=>{
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        let newArr=allUsers.filter((item)=> item.id != userId ) 
        // console.log(newArr);
        newArr.push(user)
        const userSet = JSON.stringify(newArr)
        localStorage.setItem('INTIA', userSet)
        navigate({pathname:`/getUsers`})
        alert("modification réussit")
    }
    return (
        <div className='createUserContainer'>
        <h2>modifier Utilisateur</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className='item'>
                <label htmlFor="username">Nom d'utilisateur : </label>
                <input type="text" id="username" name='username' value={user.username} required  onChange={(e)=>handleChange(e)} />
            </div>
            <div className='item'>
                <label htmlFor="phone">Téléphone : </label>
                <input type="text" id="phone" name='phone' required value={user.phone}  onChange={(e)=>handleChange(e)} />
            </div>
            <div className='item'>
                <label htmlFor="datenais">Date  de naissance : </label>
                <input type="text" id="dateNais" name='dateNaise' required value={user.dateNaise}  onChange={(e)=>handleChange(e)} />
            </div>
            <div className='item'>
                <label htmlFor="pays">Pays : </label>
                <input type="text" id="pays" name='pays' required value={user.pays} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className='item'>
                <label htmlFor="ville">Ville : </label>
                <input type="text" id="ville" name='ville' required value={user.ville} onChange={(e)=>handleChange(e)} />
            </div>
            <div className='item'>
                <label htmlFor="email">adresse mail : </label>
                <input type="email" id="email" name='email' required value={user.email}  onChange={(e)=>handleChange(e)}/>
            </div>
            <div className='item'>
                <label htmlFor="username">Assurance : </label>
                <select onChange={(e)=>handleChange(e)} name='assurance'>
                        <option value={user.assurance}>{user.assurance}</option>
                        {
                            allAssurance.map((item, index)=>{
                                return <option key={index} value={item.name}>{item.name}</option>
                            })
                        }
                    </select>
            </div>
            <button onClick={(e)=>handleSubmit(e)} className='buttomUser'>
                Modifier 
            </button>
        </form>
    </div>
    )
}

export default UpdateUser