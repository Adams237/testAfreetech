import React from 'react'

import "./sidebar.css"
import { Link, useNavigate } from 'react-router-dom';
import { FaBlenderPhone, FaNewspaper, FaSchool } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { deconecter, updateLanguage } from '../../redurcers/studentSlice';
import { useEffect } from 'react';

function Sidebar({ wrapperRef }) {
    const language = useSelector(state => state.student.language)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { i18n, t } = useTranslation()
    const changLanguage = () => {
        const newLanguage = language === 'fr' ? 'en' : 'fr'
        i18n.changeLanguage(newLanguage)
        console.log(newLanguage);
        dispatch(updateLanguage(newLanguage))
    }
    const handleClick = (e) => {
        e.preventDefault();
        wrapperRef.current.classList.toggle("collapse");
    }
    useEffect(() => {
        i18n.changeLanguage(language)
        // eslint-disable-next-line
    }, [])
    const disconect = () => {
        dispatch(deconecter())
        navigate('/auth')

    }
    return (
        <div>
            {/* <script src="https://kit.fontawesome.com/b99e675b6e.js"></script> */}

            <div  >

                <div className="top_navbar">
                    <div className="hamburger" onClick={(e) => handleClick(e)}>
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                    <div className="top_menu">
                        <Link to="/" className="logo">
                            NFC BANK && GOBUYK
                        </Link>
                        <ul>
                            <li><Link to="/inscription">
                                {t("inscription")}
                            </Link></li>
                            <li><Link to="/pension">
                                {t("pension")}
                            </Link></li>
                            <li><Link to="/facture">
                                {t("factures")}
                            </Link></li>


                        </ul>

                        <div className='button'>
                            <select style={{
                                width: "50px",
                                height: "30px",
                                fontSize: "20px",
                                border: "none",
                                outline: "none",
                                backgroundColor: "transparent",
                                color: "white"
                            }}
                                onChange={changLanguage}
                            >
                                <option style={{ color: "black" }} value={language}> {language}</option>
                                {language === "en" && <option style={{ color: "black" }} value="fr"> fr</option>}
                                {language === "fr" && <option style={{ color: "black" }} value="en"> en</option>}

                            </select>
                            <button onClick={disconect}>
                                {t("deconnexion")}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <ul>
                        <li><Link to="/inscription">
                            <span className="icon"><FaSchool /></span>
                            <span className="title"> {t("inscription")}</span>
                        </Link></li>
                        <li><Link to="/pension">
                            <span className="icon"><FaSchool /></span>
                            <span className="title"> {t("pension")}</span>
                        </Link></li>
                        <li><Link to="/facture">
                            <span className="icon"><FaNewspaper /></span>
                            <span className="title">{t("factures")}</span>
                        </Link></li>
                        <li><Link href="#" className="active">
                            <span className="icon"><FaBlenderPhone /></span>
                            <span className="title">Nos contacter</span>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
