import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ChevronR from '../assets/icons/chevronR.svg';
import ReturnButton from '../assets/icons/ReturnButton.svg';



export const UserChoice = (props) => {
    const navigate = useNavigate()
    const [role, SetRole] = useState("");




    return (
        <div className="forms-page-container">
            <div className='forms-container'>
                <div className="previousPageSection">
                    <img src={ReturnButton} alt="Bouton pour retourner à la page précédente" onClick={() => navigate("/name")} className="ButtonToPreviousPage" />
                </div>
                <h1 className='form-header-title title-header'>Indiquez nous qui vous êtes !</h1>
                <h2 className='form-header-subtitle'>Afin de vous orienter au mieux sur Naapp, identifiez vous sous un certain profil</h2>
                <div className="radio-container" onChange={(e) => { SetRole(e.target.value) }}>
                    <input type="radio" id="NEUROATYPIQUE" name="role" value="NEUROATYPIQUE" className="role" />
                    <label htmlFor="NEUROATYPIQUE">Neuroatypique / Proche d’un.e neuroatypique <img src={ChevronR} alt="" className='form-input-icon-chevron' /></label>
                    <h2 className='form-header-subtitle2'>Je suis concerné.e par la neuroatypie directement et/ou c’est le cas de quelqu’un dans mon entourage</h2>
                    <input type="radio" id="Curieux" name="role" value="Curieux" className="role" />
                    <label htmlFor="Curieux">Je suis curieux.se / Je m’informe <img src={ChevronR} alt="" className='form-input-icon-chevron' /></label>
                    <h2 className='form-header-subtitle2'>Je ne suis pas directement concerné.e par le sujet mais je souhaite en apprendre plus </h2>
                    <input type="radio" id="Professionel" name="role" value="Professionel" className="role" />
                    <label htmlFor="Professionel">Professionel.le de santé <img src={ChevronR} alt="" className='form-input-icon-chevron' /></label>
                    <h2 className='form-header-subtitle2'>Je suis familier/familière avec le sujet grâce à mon métier et je suis apte à délivrer des informations sûres</h2>
                </div>
                <div className="button-container">
                    <button type="submit" className="button" onClick={() => props.saveRole(role)}>Suivant</button>
                </div>



            </div>
        </div>
    )
}