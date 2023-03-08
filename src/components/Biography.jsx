import React from 'react'
import { useState } from "react";
import ReturnButton from '../assets/img/ReturnButton.png'

export const Biography = (props) => {

    const [Bio, SetBio] = useState("");
    return (

        <div className="login-page-container Email-MDP-flex-column">
            <div className='Email-MDP-flex'>
                    <img src={ReturnButton} alt="Bouton pour retourner à la page précédente" onClick={() => props.ReturnToPreviousPage()} className = 'Email-MDP-ButtonToPreviousPage'/>
                    <h1 className='login-header-title'>Racontez nous qui vous êtes...</h1>
                </div> 
            <div className='login-container'>
                <h2 className='login-header-subtitle'>Afin d’interagir avec les autres membres de Naapp et voir leurs publications, veuillez vous connecter à votre compte.</h2>
                <form className='form-container'>
                    
                        <textarea maxlength="744" placeholder='Votre description (0/###)' className='Bio-Text-box' onChange={(e) => { SetBio(e.target.value)}}/>
                    
                    <button className='btn btn-plain form-register-btn Speudo-Bnt-Next-Page' type="submit" onClick={() => props.BioPage(Bio)}>Suivant</button>
                    <button className='Bio-ignore-font  form-register-btn Speudo-Bnt-Next-Page' type="submit" onClick={() => props.BioPage("")}>Passer cette étape</button>
                    
                </form>
            </div>
        </div>
    )
} 

   /*import { Biography } from '../components/Biography';
   const BioPage = (BioEntry) => {
        //Todo check if the bio is ok with web rules
        DataForTheAccount.Bio = BioEntry
    }*/