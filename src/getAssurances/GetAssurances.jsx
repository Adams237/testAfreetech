import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

function GetAssurances() {
    const allAssurance = localStorage.getItem('INTIAASSURANCE') ? [...JSON.parse(localStorage.getItem('INTIAASSURANCE'))] : []
    // const navigate= useNavigate()
    const [ assurances, setAssurances ] = useState(allAssurance)
    const deleteAssurance = (name)=>{
        let newArr=assurances.filter((item)=> item.name !== name ) 
        setAssurances(newArr);
        const assurSet = JSON.stringify(newArr)
        localStorage.setItem('INTIAASSURANCE', assurSet)
        alert("Deleted Successfully")
    }
    // const updateUser = (id)=>{
    //     navigate({pathname:`/updateUser/${id}`, id})
    // }
  return (
    <div className='getUsersContainer'>
        <h2>Liste des Assurances</h2>
    {
        allAssurance.length &&
        <table>
            <thead>
                <tr>
                    <th>titre Assurance</th>
                    <th>prix FCFA</th>
                    <th>validité</th>
                    <th>action</th>
                </tr>
            </thead>
            {
                assurances.map((item, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.prix}</td>
                                <td>{item.validite}</td>
                                <td>
                                    <button onClick={()=> deleteAssurance(item.name)}>supprimer</button>
                                    {/* <button onClick={()=>updateUser(item.name)}>modifier</button> */}
                                </td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>
    }

</div>
  )
}

export default GetAssurances