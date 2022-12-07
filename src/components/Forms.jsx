import '../assets/style/Forms.css';
import sms from '../assets/icons/sms.svg'
import key from '../assets/icons/key.svg'

import React from 'react'

export const Forms = () => {
    return (
        <div className="forms-page-container">
            <div className='forms-container'>
                <p>Se connecter</p>
                <div className='logo'>
                    <span className='span'>t</span>
                    <span>te</span>
                    <span>tes</span>
                </div>

                <form className='login-form-container'>
                    <div className='input-container'>
                        <img src={sms} alt="Mail Icon" className='login-input-icons' />
                        <input type="email" className='login-input  login-input-email' />
                    </div>
                    <div className='input-container'>
                        <img src={key} alt="Key Icon" className='login-input-icons' />
                        <input type="password" className='login-input  login-input-password' />
                    </div>
                </form>
            </div>
        </div>
    )
}
