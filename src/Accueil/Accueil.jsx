import React from 'react'
import './accueil.css'

import nfc from "../asset/nfc.jpg"
function Accueil() {

  return (
    <div className='containerAccueil'>
      <img src={nfc} alt="nfc" />
      <div className="accueil">
        <h1>Payer vos factures scolaires sans vous deplacer</h1>
       <h2 style={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: '20px',
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '20px',
       }}>Simplifiez la vie scolaire avec notre application!</h2>
       <p>  Fini les files d’attente interminables et les déplacements inutiles.
            Avec notre application de paiement de facture scolaire en ligne,
             vous pouvez régler toutes vos factures scolaires en un clic, où que vous soyez et à tout moment.
              Plus de stress, plus de retard, juste la tranquillité d’esprit. 
              Rejoignez-nous aujourd’hui et découvrez une nouvelle façon de gérer les frais scolaires.
           Parce que chez nous, nous croyons que l’éducation mérite simplicité et efficacité</p>
      </div>
    </div>
  )
}

export default Accueil