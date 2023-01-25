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
            if(PSW1 === PSW2) {
                DataForTheAccount.Email = email
                navigate('/name', { state : {DataForTheAccount : DataForTheAccount}})
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
    
