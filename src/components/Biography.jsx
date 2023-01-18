import React from 'react'
import { useState } from "react";

export const Biography = (props) => {

    const [Bio, SetBio] = useState("");

    return (
        <div className="forms-page-container">
            <div className='forms-container'>
                <h1 className='form-header-title'>Dites nous en plus sur vous</h1>
                <form className='login-form-container'>
                    
                        <textarea  placeholder='écriver votre biographie' className='Bio-Text-box' onChange={(e) => { SetBio(e.target.value)}}/>
                    
                    <button className='login-form-submit LeftMargin-Button35' type="submit" onClick={() => props.BioPage(Bio)}>Suivant</button>
                    
                </form>
            </div>
        </div>
    )
} 
