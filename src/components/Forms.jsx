import React from 'react'
import { useState } from "react";

export const Forms = (props) => {
    // TODO: Create a var with useState foreach input (Email & Pwd)
    const [passWord, SetPassWord] = useState("");
    const [Mail, SetMail] = useState("");
    return (
        <div className="login-page-container">
            <div className='login-container'>
                <h1 className='login-header-title'>Se connecter</h1>
                <h2 className='login-header-subtitle'>Afin d’interagir avec les autres membres de Naapp et voir leurs publications, veuillez vous connecter à votre compte.</h2>
                <form className='form-container'>
                    <div className='form-input-container'>
                        <input type="email" className='form-input  form-input-email' onChange={(e) => { SetMail(e.target.value) }} />
                    </div>
                    <div className='form-input-container--password'>
                        <input type="password" className='form-input  form-input-password' onChange={(e) => { SetPassWord(e.target.value) }} />
                    </div>

                    <button className='form-submit' type="submit" onClick={() => props.handleSubmit(Mail, passWord)}>Envoyer</button>

                    <a className='form-register-btn' href='/register'>crée un compte</a>

                </form>
            </div>
        </div>
    )
}
