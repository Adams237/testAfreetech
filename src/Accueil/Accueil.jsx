import React from 'react'
import './accueil.css'

import nfc from "../asset/nfc.jpg"
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
function Accueil() {
  const language = useSelector(state=>state.student.language)

  const {i18n, t} = useTranslation()
  useEffect(()=>{
    i18n.changeLanguage(language)
  // eslint-disable-next-line
  },[])

 

  return (
    <div className='containerAccueil'>
      <img src={nfc} alt="nfc" />
      <div className="accueil">
        <h1> {t("firsText")} </h1>
       <h2 style={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: '20px',
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '20px',
       }}> {t("secondText")} </h2>
       <p>  {t("thirdText")} </p>
      </div>
    </div>
  )
}

export default Accueil