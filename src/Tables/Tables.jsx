import React from 'react'

import "./table.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { download, getFactures } from '../utils/api'
import Loader from '../Loader/Loader'
import { useTranslation } from 'react-i18next'
function Tables() {
    const student = useSelector(state => state.student.value)
    const language = useSelector(state=>state.language)
    const [factures, setFactures] = useState([])
    const [isLoader, setIsLoader] = useState(true)
    const {i18n, t} = useTranslation()

    useEffect(()=>{
        i18n.changeLanguage(language)
    // eslint-disable-next-line
    },[])

    const showFacture = async () => {
        try {
            const { data } = await axios.get(`${getFactures}/${student[0]._id}`);
            setFactures([
                ...data.pensions,
                ...data.inscriptions
            ])
            setIsLoader(false)
            // console.log(factures);
            // console.log(data);
        } catch (error) {
            setIsLoader(false)
            console.log(error);
        }
    }
    console.log(factures);
    useEffect(() => {
        showFacture()
    //eslint-disable-next-line 
    }, [student])
    const telecharger = async (path) => {
        try {
            const response = await axios.post(download, {
                path: path
            }, {
                responseType: 'arraybuffer'
            });

            // Convertir la réponse en fichier Blob
            const blob = new Blob([response.data], { type: 'application/pdf' });

            // Créer un lien de téléchargement et le déclencher
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = path;
            link.click();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='containerTable'>
            <h2>{t("listFacture")}</h2>
            {
                isLoader ? <Loader /> :
                    <table border="1">
                        <thead>
                            <tr>
                                <th>{t("nom")}</th>
                                <th> {t("niveau")} </th>
                                <th> {t("ecole")} </th>
                                <th> {t("phone")} </th>
                                <th>{t("montant")}</th>
                                <th> {t("slice")} </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                factures.map((facture, index) => {
                                    return(
                                    <tr key={facture._id}>
                                        <td>{facture.name}</td>
                                        <td>{facture.niveau}</td>
                                        <td>{facture.school}</td>
                                        <td>{facture.phone}</td>
                                        <td>{facture.montant}</td>
                                        <td>{facture.tranche}</td>
                                        {
                                            facture.path ? <td>
                                                <button onClick={() => telecharger(facture.path)}> {t("download")} </button>
                                            </td> : <td></td>
                                        }

                                    </tr>)
                                })
                            }
                        </tbody>


                    </table>
            }

        </div>
    )
}

export default Tables
