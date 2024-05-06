import React from 'react'
import Modal from 'react-responsive-modal'

import '../Modal/modal.css'
function ModalePension() {
  return (
    <div>
    <Modal open={isOpen} onClose={onCloseModal} center classNames={{
        modal: 'modalContainer'
    }}>
        <div className="modalHader">
            <h2>Choisissez votre méthode de paiement</h2>
        </div>
        <div className="modalHader">
            <h3 style={{ color: "red" }}>Vous serez débité de {montantPayer}</h3>
        </div>

        <div className='modalConteint'>
            <div>
                {
                    choise.input && choise.orange &&
                    <div className='inputItem' style={{ marginTop: "0px", width: "14rem" }} >
                        <input placeholder="numero OM" className="input" name="orange" onChange={(e) => handleChange(e)} type="text" />
                    </div>
                }
                {
                    choise.orange &&
                    <div className='orangeMobile' onClick={() => setChoise({
                        orange: true,
                        input: true,
                        mtn: false,
                        card: false
                    })}>
                        <img src={orange} alt="orange" width={200} height={100} />
                    </div>
                }

            </div>

            <div>
                {
                    choise.input && choise.mtn &&
                    <div className='inputItem' style={{ marginTop: "0px", width: "14rem" }} >
                        <input placeholder=" numero MOMO" className="input" name="mtn" onChange={(e) => handleChange(e)} type="text" />
                    </div>
                }
                {
                    choise.mtn &&
                    <div className='mtnMobile' onClick={() => setChoise({
                        orange: false,
                        input: true,
                        mtn: true,
                        card: false
                    })}>
                        <img src={mtn} alt="mtn" width={200} height={100} />
                    </div>
                }
            </div>
            <div>
                {
                    choise.input && choise.card &&
                    <div className='inputItem' style={{ marginTop: "0px", width: "14rem" }} >
                        <input placeholder=" numere de compte" className="input" name="card" onChange={(e) => handleChange(e)} type="text" />
                    </div>
                }
                {
                    choise.card &&
                    <div className='card' onClick={() => setChoise({
                        orange: false,
                        input: true,
                        mtn: false,
                        card: true
                    })}>
                        <img src={card} alt="card" width={200} height={100} />
                    </div>
                }
            </div>


        </div>
        <div className='btnConteint' >
            {
                choise.input &&
                <button className="btn" onClick={handleSubmit}> payer ici
                </button>
            }
        </div>

    </Modal>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false} />
</div>
  )
}

export default ModalePension
