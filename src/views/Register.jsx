import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../components/layout/SideBar';
import { NewAccountFirstStep } from '../components/NewAccountFirstStep';
export const Register = () => {
    
    let navigate = useNavigate()

    const DataForTheAccount = {
        Bio : "",
        Email : "",
        Role : "",
        Name : "",
        Speudo : "",
        FamilyName: "",
        NeuroBalises : [],
    };
    const  EmailAndPassWord = (email , PSW1, PSW2) => {
            //TODO , Mail verification is the email is not already in the DB
            //Todo , create the account in the API
                DataForTheAccount.Email = email
                navigate('/name', { state : {DataForTheAccount : DataForTheAccount}})      
    } 
    const ToLogin = () => {
        navigate('/')
    }
        return (
        <div className='Email-MDP-Page'>
            <SideBar/>
            <NewAccountFirstStep EmailAndPassWord = {EmailAndPassWord} ToLogin={ToLogin}/>
        </div>
        )
}
    
