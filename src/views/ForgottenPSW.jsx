import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../components/layout/SideBar';
import { ForgottenPSWComp } from '../components/ForgottenPSW';
export const ForgottenPSW = () => {
    
    let navigate = useNavigate()


    const  Connect = (email) => {
        //TODO use the email to send a mail to the user with a link to change his password
        navigate('/')      
    } 

    return (
    <div className='Email-MDP-Page'>
        <SideBar/>
        <ForgottenPSWComp Connect = {Connect}/>
    </div>
    )
}