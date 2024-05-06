import React from 'react'

import "./sidebar.css"
import { Link } from 'react-router-dom';
import { FaBlenderPhone, FaNewspaper, FaSchool } from 'react-icons/fa';
function Sidebar({wrapperRef}) {
    const handleClick = (e) => {
        e.preventDefault();
        wrapperRef.current.classList.toggle("collapse");
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
                                inscription
                            </Link></li>
                            <li><Link to="/pension">
                                pension scolaire
                            </Link></li>
                            <li><Link to="/facture">
                                Factures
                            </Link></li>
                        </ul>
                    </div>
                </div>

                <div className="sidebar">
                    <ul>
                        <li><Link to="/inscription">
                            <span className="icon"><FaSchool/></span>
                            <span className="title">Inscription</span>
                        </Link></li>
                        <li><Link to="/pension">
                            <span className="icon"><FaSchool/></span>
                            <span className="title">Pension scolaire</span>
                        </Link></li>
                        <li><Link to="/facture">
                            <span className="icon"><FaNewspaper/></span>
                            <span className="title">Factures</span>
                        </Link></li>
                        <li><Link href="#" className="active">
                            <span className="icon"><FaBlenderPhone/></span>
                            <span className="title">Nos contacter</span>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
