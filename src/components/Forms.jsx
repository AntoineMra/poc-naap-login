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
                    <a href="https://fr.linkedin.com" target="_blank" rel='noreferrer'>
                        <i className="form-header-image fa fa-brands fa-google"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'>
                        <i className="form-header-image fa fa-brands fa-github"></i>
                    </a>
                    <a href="https://fr-fr.facebook.com/" target="_blank" rel='noreferrer'>
                        <i className="form-header-image fa fa-brands fa-facebook"></i>
                    </a>
                </div>

                <form className='login-form-container'>
                    <div className='input-container'>
                        
                        <input type="email" className='login-input  login-input-email' onChange={(e) => { SetMail(e.target.value)}}/>
                    </div>
                    <div className='input-containerpsw'>
                        
                        <input type="password" className='login-input  login-input-password' onChange={(e) => { SetPassWord(e.target.value)}}/>
                    </div>
                    <a className='new-account-button'href='/register'>crée un compte</a>

                    <button className='login-form-submit' type="submit" onClick={() => props.handleSubmit(Mail , passWord)}>Envoyer</button>
                </form>
            </div>
        </div>
    )
}
