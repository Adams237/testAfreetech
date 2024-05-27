import React, { useEffect } from 'react'
import { Modal } from 'react-responsive-modal'


import "./school.css"
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import { createSchool } from '../utils/api'
function Modale({ isOpen, setIsOpen }) {
    const language = useSelector(state => state.student.language)
    const { i18n, t } = useTranslation()
    const [school,setSchool] = useState({})
    const onCloseModal = () => setIsOpen(false)

    useEffect(() => {
        i18n.changeLanguage(language)
    }, [])

    const handleChange = (e) => {
        setSchool({
            ...school, [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async () => {
        try {
            const {data} = await axios.post(createSchool,school)
            console.log(data)
            setIsOpen(false)
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <div>
            <Modal open={isOpen} onClose={onCloseModal} center classNames={{
                modal: 'modalContainer'
            }}>
                <div className="modalHader">
                    <h2>{t("newShool")}</h2>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    marginBottom: "20px"
                }}>
                    <div className='containerInput'>
                        <div className='inputItem' style={{ marginTop: "30px" }}>
                            <label htmlFor="nom">{t("schoolName")} <span>*</span> </label>
                            <input placeholder="Enter your text..." className="input" name="schoolName" onChange={(e) => handleChange(e)} type="text" />
                        </div>
                        <div className='inputItem' style={{ marginTop: "30px" }}>
                            <label htmlFor="numeroBancaire">{t("numCarte")} <span>*</span>  </label>
                            <input placeholder="Enter your text..." className="input" name="numeroBancaire" onChange={(e) => handleChange(e)} type="text" />
                        </div>

                    </div>
                    <div className='containerInput'>
                        <div className='inputItem'>
                            <label htmlFor="adresse">{t("adress")} <span>*</span></label>
                            <input placeholder="Enter your text..." className="input" name="address" onChange={(e) => handleChange(e)} type="text" />
                        </div>
                        <div className='inputItem'>
                            <label htmlFor="email">{t("email")}  </label>
                            <input placeholder="Enter your text..." className="input" name="email" onChange={(e) => handleChange(e)} type="email" />
                        </div>
                    </div>
                    <div className='containerInput'>
                        <div className='inputItem'>
                            <label htmlFor="inscription">{t("inscription")} <span>*</span> </label>
                            <input placeholder="Enter your text..." className="input" name="inscription" onChange={(e) => handleChange(e)} type="number" />
                        </div>
                        <div className='inputItem'>
                            <label htmlFor="pensionTotal">{t("pension")}<span>*</span> </label>
                            <input placeholder="Enter your text..." className="input" name="pensionTotal" onChange={(e) => handleChange(e)} type="number" />
                        </div>
                    </div>
                    <div className='containerInput'>
                        <div className='inputItem'>
                            <label htmlFor="nombreTranche">{t("slice")}  <span>*</span></label>
                            <input placeholder="Enter your text..." className="input" name="nombreTranche" onChange={(e) => handleChange(e)} type="number" />
                        </div>
                    </div>
                </div>

                <button className="animated-button" onClick={handleSubmit}>
                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                    <span className="text" >{t("add")}</span>
                    <span className="circle"></span>
                    <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                </button>
            </Modal>
        </div>
    )
}

export default Modale
