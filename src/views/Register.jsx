import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../components/layout/SideBar';
import { NewAccountFirstStep } from '../components/NewAccountFirstStep';
export const Register = () => {
    let navigate = useNavigate()
    const  EmailAndPassWord = (email , PSW1, PSW2) => {
            //TODO , Mail verification is the email is not already in the DB
            //Todo , create the account in the API
            if(PSW1 === PSW2) {
                navigate('/userChoice',{ state : {Email : email}})
            } else {
                //TODO make PSW1 != PSW2
            }
            
            
    } 
        return (
        <div className='login-form'>
            <SideBar/>
            <NewAccountFirstStep EmailAndPassWord = {EmailAndPassWord} />
        </div>
        )

}
    
