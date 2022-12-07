import React from 'react'
import '../assets/style/login.css'
import { Forms } from '../components/Forms';
import { SideBar } from '../components/layout/SideBar';

export const Login = () => {
    return (
        <div className='login-form'>
            <SideBar />
            <Forms />
        </div>
    )
}
