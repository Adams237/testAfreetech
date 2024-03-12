import React, { useEffect, useState } from 'react'
import './inscription.css'
import axios from 'axios'
import { ceateStudent } from '../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { createStude } from '../redurcers/studentSlice'
import { useNavigate } from 'react-router-dom'

function Inscription() {
    const date = new Date()
    const navigate = useNavigate()
    const student = useSelector(state => state.student.value)
    const dispacth = useDispatch()
    const [user, setUser] = useState({})
    const handlechange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value, matricule: date.getTime().toString()
        })
    }
    useEffect(() => {
        if (student.length >0) {
            console.log('ici');
            navigate('/')
        }
    }, [student])

    const handleSubmit = async (e) => {
        console.log('ici');
        e.preventDefault()
        console.log(user);
        try {
            const { data } = await axios.post(ceateStudent, {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                phone: user.phone,
                matricule: user.matricule
            })
            dispacth(createStude(data))
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        // const data = await axios.post('/api/inscription',user)
        // console.log(data);
    }
    return (
        <div className="login-box">

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="user-box">
                    <input type="text" name="firstname" required onChange={(e) => handlechange(e)} />
                    <label>firstname</label>
                </div>
                <div className="user-box">
                    <input type="text" name="lastname" required onChange={(e) => handlechange(e)} />
                    <label>lastname</label>
                </div>
                <div className="user-box">
                    <input type="text" name="email" required onChange={(e) => handlechange(e)} />
                    <label>email</label>
                </div>
                <div className="user-box">
                    <input type="text" name="phone" required onChange={(e) => handlechange(e)} />
                    <label>Phone</label>
                </div>
                <center>
                    <button onSubmit={(e) => handleSubmit(e)}>
                        Inscription
                        <span></span>
                    </button>
                </center>
            </form>
        </div>
    )
}

export default Inscription