import axios from 'axios'
import { t } from 'i18next'
import React from 'react'
import { useState } from 'react'
import { getSchools } from '../utils/api'
import Loader from '../Loader/Loader'

import "./school.css"
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {  useSelector } from 'react-redux'
import Modale from './Modal'

function School() {
    const [loading, setIsLoading] = useState(true)
    const [schools, setSchools] = useState([])
    const language = useSelector(state => state.student.language)
    const [isOpen, setIsOpen] = useState(false)
    const {i18n, t} = useTranslation()



    useEffect(()=>{
        i18n.changeLanguage(language)
    },[])

    const updateSchool = async ()=>{
        setIsLoading(true)
        try {
            const {data} = await axios.get(getSchools)
            console.log(data)
            setSchools(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
        
    }

    useEffect(()=>{
        updateSchool()
    },[isOpen])
  return (
    <div className='containerTable'>
      <h2>{t("listSchool")}</h2>
    {loading? <Loader/>:
      <table border="1">
            <thead>
                <tr>
                    <th>{t("schoolName")}</th>
                    <th>{t("numCarte")}</th>
                    <th>{t("email")}</th>
                    <th>{t("adress")}</th>
                    <th>{t("inscription")}</th>
                    <th>{t("pension")}</th>
                </tr>
            </thead>
            <tbody>
                {
                    schools.map(item=>{
                        return(
                            <tr key={item._id}>
                                <td>{item.schoolName}</td>
                                <td>{item.numeroBancaire}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.inscription}</td>
                                <td>{item.pensionTotal}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
      </table>}
      <div className='buttonContainer'>
        <button onClick={()=>setIsOpen(true)} >{t("add")}</button>
      </div>
      <Modale isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default School
