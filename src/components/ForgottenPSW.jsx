import React from 'react'
import { useState } from "react";
import Email from "../assets/icons/mail.svg";
import ReturnButton from '../assets/icons/ReturnButton.svg';



export const ForgottenPSWComp = (props) => {
    const [passWord, SetPassWord] = useState("");
    const [mail, SetMail] = useState("");
    const [isRemembered, SetIsRemembered] = useState(false);
    const [isPlainPassword, SetIsPlainPassword] = useState(false);

    return (
        <div className="login-page-container">
            <img src={ReturnButton} alt="Bouton pour retourner à la page précédente" onClick={() => props.Connect()} className = 'Email-MDP-ButtonToPreviousPage'/>
            <div className='login-container'>
                <h1 className='login-header-title'>Réinitialisez votre mot de passe</h1>
                <h2 className='login-header-subtitle'>Indiquer l’adresse mail utilisée lors de votre inscription</h2>
                <form className='form-container'>
                    <div className='form-input-container'>
                        <label className='form-input-label' htmlFor="email">Indiquez votre adresse mail</label>
                        <img src={Email} alt="" className='form-input-icon' />
                        <input type="email" placeholder='exemple@mail.fr' className='form-input  form-input-email' id='email' onChange={(e) => { SetMail(e.target.value) }} />
                    </div>
                    
                        <button className='btn btn-plain form-register-btn' onClick={() => props.ToRegister()}>Réinitialiser</button> 
                        <h3 className='form-top-margin-2'>Un email vous sera envoyé avec un lien vous permettant de définir votre nouveau mot de passe.</h3>
                    <button className='btn btn-outlined form-submit form-top-margin-10  ' type="submit" onClick={() => props.Connect()}>Revenir à la page de connexion</button>
                </form>
            </div>
        </div>
    )
}
