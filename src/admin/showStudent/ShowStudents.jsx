import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getPesions, studentGet, télécharger } from '../../utils/api';
import Loading from '../../loading/Loading';

function ShowStudents() {
    const [isLoading, setIsLoading] = useState(true)
    const [students, setStudents] = useState({
        studentsPension: []
    })


    const getStudents = async () => {
        try {
            const { data } = await axios.get(studentGet)
            const arrayStudent = []
            data.map(async (student) => {
                const pensions = await axios.post(getPesions, {
                    id: student.id
                })
                student.pension = [...pensions.data]
                // setPension(pensions + 1)
                // console.log(student);
                arrayStudent.push(student)
                // console.log(arrayStudent);
                setStudents({
                    studentsPension: [...arrayStudent]
                })
            })

        } catch (error) {
            console.log(error);
        }
    }
    // console.log(students.studentsPension.length);
    // console.log(students[0]?.id);
    useEffect(() => {
        getStudents()
    }, [])
    const downloadPdf = async (filname) => {
        const sendFile = filname.replace('/storage/facture/', '')
        console.log(sendFile);
        const response = await axios.post(télécharger, {
            filname: sendFile
        }, {
            responseType: 'arraybuffer'
        });

        // Convertir la réponse en fichier Blob
        const blob = new Blob([response.data], { type: 'application/pdf' });

        // Créer un lien de téléchargement et le déclencher
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = sendFile;
        link.click();
    };
    setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    if (isLoading) {
        return <Loading />
      }
    return (
        <div className='getUsersContainer'>


            {
                students.studentsPension.length ?
                    <>

                        <h2>Liste des étudians</h2>
                        <table style={{ width: '80vw' }}>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>matricule</th>
                                    <th>Pension Payée</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.studentsPension.map((item, index) => {
                                        return <tr key={index}>
                                            <td >{item.firstname}</td>
                                            <td >{item.lastname}</td>
                                            <td >{item.email}</td>
                                            <td >{item.phone}</td>
                                            <td >{item.matricule}</td>
                                            <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column' }}>
                                                {
                                                    item.pension.length ?
                                                        item.pension.map(pension => {
                                                           return <button style={{ width: '70%', margin:'5px', height:'50px' }} onClick={() => downloadPdf(pension.facture)} >
                                                                Télécharger facture tranche {pension.tranche}
                                                            </button>
                                                        }):
                                                        ("aucun paiement enregistré")
                                                }

                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </>
                    :
                    <h2>Vous n'avez pas d'étudiant</h2>
            }



        </div >
    )
}

export default ShowStudents