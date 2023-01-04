import logo from '../assets/img/logo192.png'
import React from 'react'
import { useState } from "react";

export const Forms = (props) => {
    // TODO: Create a var with useState foreach input (Email & Pwd)
    const [passWord, SetPassWord] = useState("");
    const [Mail, SetMail] = useState("");
    return (
        <div className="forms-page-container">
            <div className='forms-container'>
                <h1 className='form-header-title'>Se connecter</h1>
                <div className='form-header-socials'>
                    <img className='form-header-image' src={logo} alt="Social Media 3rd part connection logo" />
                    <img className='form-header-image' src={logo} alt="Social Media 3rd part connection logo" />
                    <img className='form-header-image' src={logo} alt="Social Media 3rd part connection logo" />
                </div>

                <form className='login-form-container'>
                    <div className='input-container'>
                        
                        <input type="email" className='login-input  login-input-email' onChange={(e) => { SetMail(e.target.value)}}/>
                    </div>
                    <div className='input-container'>
                        
                        <input type="password" className='login-input  login-input-password' onChange={(e) => { SetPassWord(e.target.value)}}/>
                    </div>

                    <button className='login-form-submit' type="submit" onClick={() => props.handleSubmit(Mail , passWord)}>Envoyer</button>
                </form>
            </div>
        </div>
    )
}
