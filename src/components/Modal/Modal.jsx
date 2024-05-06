import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal'
import { useState } from 'react';
import { useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
// import { Document, Page, Text, View, Table } from '@react-pdf/renderer';

import orange from "../../asset/orangeMobile.png"
import mtn from "../../asset/mtnMobile.jpg"
import card from "../../asset/card.jpg"
import "./modal.css"
import axios from 'axios';
import { inscription, pension } from '../../utils/api';
import { useNavigate } from 'react-router-dom';




function Modale({ isOpen, setIsOpen, user, setUser }) {
    const onCloseModal = () => setIsOpen(false);
    const student = useSelector(state => state.student.value)
    const navigate = useNavigate()
    const montantPayer = Number(user.montant) + 500
    const [choise, setChoise] = useState({
        orange: true,
        mtn: true,
        card: true,
        input: false
    })
    // const MyDocument = () => (
    //     <Document>
    //         <Page size="A4">
    //             <View style={{ padding: 20 }}>
    //                 <Table style={{ border: 1, width: '100%' }}>
    //                     <thead>
    //                         <tr>
    //                             <th style={{ backgroundColor: '#ccc' }}>En-tête 1</th>
    //                             <th style={{ backgroundColor: '#ccc' }}>En-tête 2</th>
    //                             <th style={{ backgroundColor: '#ccc' }}>En-tête 3</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         <tr >
    //                             <td>test1</td>
    //                         </tr>
    //                         <tr >
    //                             <td>test1</td>
    //                         </tr>
    //                         <tr >
    //                             <td>test1</td>
    //                         </tr>
    //                     </tbody>
    //                 </Table>
    //             </View>
    //         </Page>
    //     </Document>
    // );
    const handleChange = (e) => {
        setUser({
            ...user, phonePay: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        // const doc = await MyDocument.create()
        console.log(student);
        if (!user.phonePay) {
            toast.error("veillez entrer le numero")
            return
        }
        console.log(user.tranche);
        if (user.tranche) {
            try {
                const data = await axios.post(`${pension}/${student[0]._id}`, {
                    ...user,
                    montant: montantPayer
                })
                console.log(data);
                toast.success("inscription reussit")
                navigate('/facture')
            } catch (error) {
                toast.error("error")
                console.log(error);
            }
            return
        }
        else {
            try {
                const data = await axios.post(`${inscription}/${student[0]._id}`, {
                    ...user,
                    montant: montantPayer
                })
                console.log(data);
                toast.success("inscription reussit")
                navigate('/facture')
            } catch (error) {
                toast.error("error")
                console.log(error);
            }
        }

    }


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




export default Modale
