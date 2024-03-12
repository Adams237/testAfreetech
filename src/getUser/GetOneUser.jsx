import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './style.css'
function GetOneUser() {
    const allUsers = localStorage.getItem('INTIA') ? [...JSON.parse(localStorage.getItem('INTIA'))] : []
    const allAssurance = localStorage.getItem('INTIAASSURANCE') ? [...JSON.parse(localStorage.getItem('INTIAASSURANCE'))] : []
    const navigate= useNavigate()
    const { userId } = useParams()
    const [user, setUser] = useState({})
    const [assur, setAssur] = useState({})
    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        setUser(allUsers.filter(item => item.id == userId))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])
    useEffect(()=>{
        // eslint-disable-next-line eqeqeq
        setAssur(allAssurance.filter(item => item.name == user[0]?.assurance))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])
    const updateUser = (id)=>{
        navigate({pathname:`/updateUser/${id}`, id})
    }
    return (
        <div className='containerInfo'>
            <h2>Information sur l'utilisateur</h2>
            <div  className="info">
                <div className='infoItem'><strong>Nom:</strong> {user[0]?.username}</div>
                <div className='infoItem'><strong>date de Naissance:</strong> {user[0]?.dateNaise}</div>
                <div className='infoItem'><strong>email:</strong> {user[0]?.email}</div>
                <div className='infoItem'><strong>pays:</strong> {user[0]?.pays}</div>
                <div className='infoItem'><strong>ville:</strong> {user[0]?.ville}</div>
                <div className='infoItem'><strong>N°Téléphone:</strong> {user[0]?.phone}</div>
                <div className='infoItem'><strong>Assurance:</strong> {assur[0]?.name}</div>
                <div className='infoItem'><strong>Prix:</strong> {assur[0]?.prix}</div>
                <div className='infoItem'><strong>Validité:</strong> {assur[0]?.validite}</div>
            </div>
            <button style={{
                height:'40px',
                width:'200px',
                backgroundColor:'transparent',
                cursor:'pointer',
            }}
                onClick={()=>updateUser(user[0].id)}
            >modifier</button>
        </div>
    )
}

export default GetOneUser