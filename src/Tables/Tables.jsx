import React from 'react'

import "./table.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { download, getFactures } from '../utils/api'
import Loader from '../Loader/Loader'
function Tables() {
    const student = useSelector(state => state.student.value)
    const [factures, setFactures] = useState([])
    const [isLoader, setIsLoader] = useState(true)

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
            <h2>Liste des facture</h2>
            {
                isLoader ? <Loader /> :
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Niveau/classe</th>
                                <th>ecole</th>
                                <th>N° telephone</th>
                                <th>Montant</th>
                                <th>Tranche</th>
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
                                                <button onClick={() => telecharger(facture.path)}>Télécharger</button>
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
