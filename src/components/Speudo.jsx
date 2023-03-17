import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import EmailImg from "../assets/icons/mail.svg";
import ReturnButton from '../assets/img/ReturnButton.png'

export const Speudo = (props) => {
    // TODO: 
    const navigate = useNavigate()
    const [Speudo,  SetSpeudo] = useState("");
    const [FirstName, SetFirstName] = useState("");
    const [LastName, SetLastName] = useState("");



    return (
        <div className="login-page-container Email-MDP-flex-column">
                <div className='Email-MDP-flex'>
                    <img src={ReturnButton} alt="Bouton pour retourner à la page précédente" onClick={() => navigate("/register")} className = 'Email-MDP-ButtonToPreviousPage'/>
                    <h1 className='login-header-title'>Renseignez vos informations</h1>
                </div>
            <div className='login-container'>
                <h2 className='Email-MDP-subtitle'>Vos publications et votre profile apparaîtront sous ce nom</h2>
                <form className='form-container'>
                    <div className='form-input-container Speudo-Input-Min-Width'>
                        <label className='form-input-label' htmlFor="email">Pseudonyme</label>
                        <img src={EmailImg} alt="" className='form-input-icon' />
                        <input type="email" placeholder='Pseudonyme' className='form-input  form-input-email' id='email' onChange={(e) => SetSpeudo(e.target.value)}/>
                    </div>
                    <div className='form-input-container form-input-container--password Speudo-Input-Min-Width'>
                        <label className='form-input-label' htmlFor="pwd">Prénom</label>
                        <img src={EmailImg} alt="" className='form-input-icon' />
                        <input type="text" placeholder = "Prénom" className='form-input  form-input-password' id='pwd' onChange={(e) => SetFirstName(e.target.value)}/>
                    </div>
                    <div className='form-input-container form-input-container--password Speudo-Input-Min-Width'>
                        <label className='form-input-label' htmlFor="pwd">Nom</label>
                        <img src={EmailImg} alt="" className='form-input-icon' />
                        <input type="text" placeholder='Nom' className='form-input  form-input-password' id='pwd' onChange={(e) => SetLastName(e.target.value)}/>
                    </div>
                        <button className='btn btn-plain form-register-btn Speudo-Bnt-Next-Page' type="submit" onClick={ () => props.SpeudoDataExtraction(Speudo,FirstName,LastName)} > Continuer </button> 
                </form>
            </div>
        </div>
    )
} 
