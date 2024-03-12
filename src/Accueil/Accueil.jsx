import React, { useEffect, useState } from 'react'
import './accueil.css'
import { useNavigate } from 'react-router-dom'
import Loading from '../loading/Loading'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { getPesions, télécharger } from '../utils/api'
function Accueil() {
  const student = useSelector(state => state.student.value)
  // console.log(student[0].id);
  const [isLoading, setIsLoading] = useState(true)
  const [pensions, setPension] = useState({})
  const navigate = useNavigate()
  console.log(student.length);

 


  // const changeScreen = (text) => {
  //   navigate(text)
  // }
  const showPension = async () => {
    if (student.length>0) {
      try {
        const { data } = await axios.post(getPesions, {
          id: student[0].id
        })
        if (data.length) {
          setPension(data)
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }


  }
  useEffect(() => {
    showPension()
  }, [student.length])
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)
  if (isLoading) {
    return <Loading />
  }
  if(student.length=== 0){
    navigate('/student/inscription')
    return
  }
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
  return (
    <div className='getUsersContainer'>
      <h2>Liste prix des pensions</h2>
      <table style={{ width: '80vw' }}>
        <thead>
          <tr>
            <th>N° tranche</th>
            <th>Prix</th>
            <th>Télécharger</th>
          </tr>
        </thead>
        {
          pensions.length ?
            <tbody>
              {
                pensions.map((item, index) => {
                  return <tr key={index}>
                    <td >{item.tranche}</td>
                    <td >{item.montant}</td>
                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <button style={{ width: '50%' }} onClick={() => downloadPdf(item.facture)} >
                        Télécharger
                      </button>
                    </td>
                  </tr>
                })
              }
            </tbody>
            :

            <tbody>
              <td >test</td>
              <td>50000 FCFA</td>
              <td>test</td>
              <tr>
                <td >test</td>
                <td>80000 FCFA</td>
                <td>test</td>
              </tr>
              <tr>
                <td >test</td>
                <td>20000 FCFA</td>
                <td>test</td>
              </tr>
            </tbody>
        }

      </table>

    </div >
  )
}

export default Accueil