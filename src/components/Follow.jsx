

import React from 'react'
import ReturnButton from '../assets/icons/ReturnButton.svg';

export const Follow = (props) => {

    return (

        <div className="login-page-container Email-MDP-flex-column">
            <div className='Email-MDP-flex'>
                    <img src={ReturnButton} alt="Bouton pour retourner à la page précédente" onClick={() => props.ReturnToPreviousPage()} className = 'Email-MDP-ButtonToPreviousPage'/>
                    <h1 className='login-header-title'>Entourez-vous !</h1>
                </div> 
            <div className='login-container'>
                <h2 className='login-header-subtitle'>Trouvez vos premiers abonnements pour créer encore plus de liens.</h2>
                <form className='form-container'>
                    <div className="Suggestion">
                    
                    <div className='Follow-Box'>
                            <img src="https://picsum.photos/200/300" alt="Photo de profil" className='Follow-Box-Img-Photo'/>
                            <div className='Follow-Box-Text'>
                                <h3 className='Follow-Box-Text-Name'>Nom</h3>
                                <p className='Follow-Box-Text-tag'>Description</p>
                                </div>
                            <button className='btn btn-plain form-register-btn Follow-Box-Btn' type="submit" >Suivre</button>
                    </div>
                    <div className='Follow-Box'>
                            <img src="https://picsum.photos/200/300" alt="Photo de profil" className='Follow-Box-Img-Photo'/>
                            <div className='Follow-Box-Text'>
                                <h3 className='Follow-Box-Text-Name'>Nom</h3>
                                <div className="Tag">
                                <p className='Follow-Box-Text-tag'>Description</p>
                                <p className='Follow-Box-Text-tag'>Autres</p>
                                </div>
                                </div>
                            <button className='btn btn-plain form-register-btn Follow-Box-Btn' type="submit" >Suivre</button>
                    </div>
                    <div className='Follow-Box'>
                            <img src="https://picsum.photos/200/300" alt="Photo de profil" className='Follow-Box-Img-Photo'/>
                            <div className='Follow-Box-Text'>
                                <h3 className='Follow-Box-Text-Name'>Nom</h3>
                                <p className='Follow-Box-Text-tag'>Description</p>
                                </div>
                            <button className='btn btn-plain form-register-btn Follow-Box-Btn' type="submit" >Suivre</button>
                    </div>
                </div>
                

                    
                    <button className='btn btn-plain form-register-btn Speudo-Bnt-Next-Page' type="submit"  onClick={() => props.Next()}>Suivant</button>
                    <button className='Bio-ignore-font  form-register-btn Speudo-Bnt-Next-Page' type="submit"onClick={() => props.Next()} >Passer cette étape</button>
                    
                </form>
            </div>
        </div>
    )
} 

