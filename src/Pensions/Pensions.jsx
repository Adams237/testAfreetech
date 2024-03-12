import React, { useEffect, useState } from 'react'
import './pension.css'
import { getPesions, payerPension } from '../utils/api'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Pensions() {

    const student = useSelector(state => state.student.value)
    const navigate = useNavigate()
    const [pensions, setPension] = useState([])
    const [montant, setMontant] = useState(0)
    const [tranche, setTranche] = useState(0)
    const [isPaie, setIsPaie] = useState(false)
    const [users, setUsers] = useState({})

    const showPension = async () => {
        const { data } = await axios.post(getPesions, {
            id: student[0].id
        })
        if (data.length) {
            setPension(data)
        }
        console.log(data);
    }
    useEffect(() => {
        showPension()
    }, [])
    const montantPayer = () => {
        console.log(pensions);
        if (pensions.length === 0) {
            setTranche(1)
            setMontant(50000)
            return
        }
        if (pensions.length === 1) {
            setTranche(2)
            setMontant(80000)
            return
        }
        if (pensions.length === 2) {
            setTranche(3)
            setMontant(20000)
            return
        }
        else {
            setIsPaie(true)
        }
    }
    useEffect(() => {
        montantPayer()
    }, [pensions.length])
    const handleSubmit = async (e) => {
        e.preventDefault()
         try {
            const {data} = await axios.post(payerPension,{
                montant: montant,
                tranche: tranche,
                matricule: users.matricule,
                firstname: users.firstname,
                lastname: users.lastname
            })
            console.log(data);
            navigate('/')
         } catch (error) {
            console.log(error);
         }
    }
    const handlechange = (e) => {
        setUsers({
            ...users, [e.target.name]:e.target.value
        })
    }
    return (
        <div className="login-box">

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="user-box">
                    <input type="number" name="montant" value={montant} required />
                    <label>montant</label>
                </div>
                <div className="user-box">
                    <input type="number" name="tranche" value={tranche} required />
                    <label>Tranche</label>
                </div>
                <div className="user-box">
                    <input type="text" name="firstname" required onChange={(e) => handlechange(e)} />
                    <label>Nom</label>
                </div>
                <div className="user-box">
                    <input type="text" name="lastname" required onChange={(e) => handlechange(e)} />
                    <label>prenom</label>
                </div>
                <div className="user-box">
                    <input type="text" name="matricule" required onChange={(e) => handlechange(e)} />
                    <label>matricule</label>
                </div>
                <center>
                    {
                        isPaie ? ('Vous avez déjà tout payé') : <div>
                            <button style={{margin:'3px'}} onSubmit={(e) => handleSubmit(e)}>
                            Payer Par OM
                            <span></span>
                        </button>
                            <button style={{margin:'3px'}} onSubmit={(e) => handleSubmit(e)}>
                            Payer Par MOMO
                            <span></span>
                        </button>
                            <button style={{margin:'3px'}} onSubmit={(e) => handleSubmit(e)}>
                            Payer Par Card Bancaire
                            <span></span>
                        </button>
                        </div>
                    }

                </center>
            </form>
        </div>
    )
}

export default Pensions