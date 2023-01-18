import React from 'react'
import { useState } from "react";

export const Speudo = (props) => {
    // TODO: 

    const [Speudo,  SetSpeudo] = useState("");
    const [Prenom, SetPrenom] = useState("");
    const [Nom, SetNom] = useState("");



    return (
        <div className="forms-page-container">
            <div className='forms-container'>
                <h1 className='form-header-title'>Renseigner vos informations</h1>
                <form className='login-form-container'>
                    <div className='input-container'>
                        <input type="Speudo" placeholder='Entrer votre Speudo' className='login-input  login-input-Speudo' onChange={(e) => { SetSpeudo(e.target.value)}}/>
                    </div>

                    <div className='input-container'>
                        <input type="Prenom" placeholder='Entrer votre Prénom' className='login-input  login-input-Prenom' onChange={(e) => { SetPrenom(e.target.value)}}/>
                    </div>

                    <div className='input-container'>
                        <input type="Nom" placeholder='Entrer votre Nom' className='login-input  login-input-Nom' onChange={(e) => { SetNom(e.target.value)}}/>
                    </div>
                    <button className='login-form-submit LeftMargin-Button18' type="submit" onClick={() => props.UserInfo(Speudo , Prenom , Nom)}>Suivant</button>
                    
                </form>
            </div>
        </div>
    )
} 
