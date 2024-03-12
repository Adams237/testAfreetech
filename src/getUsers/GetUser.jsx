import React, { useState } from 'react'
import './getusers.css'
import { useNavigate } from 'react-router-dom'
function GetUser() {
    const allUsers = localStorage.getItem('INTIA') ? [...JSON.parse(localStorage.getItem('INTIA'))] : []
    const navigate= useNavigate()
    const [ users, setUsers ] = useState(allUsers)
    const deleteUser = (id)=>{
        let newArr=users.filter((item)=> item.id !== id ) 
        setUsers(newArr);
        const userSet = JSON.stringify(newArr)
        localStorage.setItem('INTIA', userSet)
        alert("Deleted Successfully")
    }
    const updateUser = (id)=>{
        navigate({pathname:`/updateUser/${id}`, id})
    }
    const showUser = (id)=>{
        navigate({pathname:`/getUser/${id}`, id})
    }
    return (
        <div className='getUsersContainer'>
            <h2>Liste des Utilisateur</h2>
            {
                allUsers.length &&
                <table>
                    <thead>
                        <tr>
                            <th>nom</th>
                            <th>Téléphone</th>
                            <th>email</th>
                            <th>Pays</th>
                            <th>Ville</th>
                            <th>Assurance</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        users.map((item, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td style={{
                                            cursor:'pointer'
                                        }}
                                        onClick={()=>showUser(item.id)}
                                        >{item.username}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.pays}</td>
                                        <td>{item.ville}</td>
                                        <td style={{
                                            backgroundColor : item.assurance ? '' : 'red'
                                        }} >{item.assurance}</td>
                                        <td>
                                            <button onClick={()=> deleteUser(item.id)}>supprimer</button>
                                            <button onClick={()=>updateUser(item.id)}>modifier</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            }

        </div>
    )
}

export default GetUser