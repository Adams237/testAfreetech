import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import './inscription.css'
import Modale from '../components/Modal/Modal'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import axios from 'axios';
import { getSchools } from '../utils/api';
import Loader from '../Loader/Loader';
function Inscription() {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const language = useSelector(state => state.student.language)
    const { i18n, t } = useTranslation()
    const [school, setSchool] = useState([])

    const updateSchool = async () => {
        try {
            const { data } = await axios.get(getSchools)
            setSchool(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        updateSchool()
    }, [])

    useEffect(() => {
        i18n.changeLanguage(language)
        // eslint-disable-next-line
    }, [])
    const handleChange = (e) => {
        if(e.target.name === "school"){
            const montant = school.find(item=>item.schoolName === e.target.value)
            setUser({
                ...user,
                [e.target.name]:e.target.value,
                montant:montant.inscription
            })
            return
        }
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    const isValidate = () => {
        if (!user.name || !user.school || !user.niveau || !user.phone || !user.cni || !user.montant) {
            return t("errorInscription")
        }
        return true
    }
    const handleSubmit = () => {
        const valide = isValidate()
        if (valide === true) {
            setIsOpen(true)
        }
        else {
            toast.error(valide)
        }
    }
    return (
        <div>
            <div className="containerInscription">
                <h2>{t("inscription")}</h2>
                {
                    loading ? <Loader /> :
                        <>
                            <div className='containerInput'>
                                <div className='inputItem' style={{ marginTop: "30px" }}>
                                    <label htmlFor="nom">{t("nom")} <span>*</span> </label>
                                    <input placeholder="Enter your text..." className="input" name="name" onChange={(e) => handleChange(e)} type="text" />
                                </div>
                                <div className='inputItem' style={{ marginTop: "30px" }}>
                                    <label htmlFor="ecole">{t("ecole")} <span>*</span>  </label>
                                    
                                    <select className="input" name="school" onChange={(e) => handleChange(e)} type="text">
                                        {
                                            
                                            school.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.schoolName}>{item.schoolName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                            </div>
                            <div className='containerInput'>
                                <div className='inputItem'>
                                    <label htmlFor="classw">{t("niveau")} <span>*</span></label>
                                    <input placeholder="Enter your text..." className="input" name="niveau" onChange={(e) => handleChange(e)} type="text" />
                                </div>
                                <div className='inputItem'>
                                    <label htmlFor="ecole">{t("parent")}  </label>
                                    <input placeholder="Enter your text..." className="input" name="parent" onChange={(e) => handleChange(e)} type="text" />
                                </div>
                            </div>
                            <div className='containerInput'>
                                <div className='inputItem'>
                                    <label htmlFor="classw">{t("phone")} <span>*</span> </label>
                                    <input placeholder="Enter your text..." className="input" name="phone" onChange={(e) => handleChange(e)} type="text" />
                                </div>
                                <div className='inputItem'>
                                    <label htmlFor="ecole">{t("cni")}<span>*</span> </label>
                                    <input placeholder="Enter your text..." className="input" name="cni" onChange={(e) => handleChange(e)} type="text" />
                                </div>
                            </div>
                            <div className='containerInput'>
                                <div className='inputItem'>
                                    <label htmlFor="classw">{t("paye")}  <span>*</span></label>
                                    <input placeholder="Enter your text..." className="input" value={user.montant} name="montant"  type="number" />
                                </div>
                                <div className='inputItem'>
                                    <label htmlFor="ecole">{t("matricule")}  </label>
                                    <input placeholder="Enter your text..." className="input" name="matricule" onChange={(e) => handleChange(e)} type="text" />
                                </div>
                            </div>
                            <button className="animated-button" onClick={handleSubmit}>
                                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                                <span className="text" >{t("inscription")}</span>
                                <span className="circle"></span>
                                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                            </button>
                        </>
                }


            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false} />
            {isOpen && <Modale isOpen={isOpen} setIsOpen={setIsOpen} user={user} setUser={setUser} />}
        </div>
    )
}

export default Inscription
