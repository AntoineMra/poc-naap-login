import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../components/layout/SideBar';
import { NewAccountFirstStep } from '../components/NewAccountFirstStep';
export const Register = () => {
    
    let navigate = useNavigate()

    const DataForTheAccount = {
        Email : "",
        Role : "",
    };

    const  EmailAndPassWord = (email , PSW1, PSW2) => {
            //TODO , Mail verification is the email is not already in the DB
            //Todo , create the account in the API
                DataForTheAccount.Email = email
                navigate('/name', { state : {DataForTheAccount : DataForTheAccount}})      
    } 
        return (
        <div className='Email-MDP-Page'>
            <SideBar/>
            <NewAccountFirstStep EmailAndPassWord = {EmailAndPassWord}/>
        </div>
        )
}
    
