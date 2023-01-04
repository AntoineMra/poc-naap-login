import React from 'react'
import { SideBar } from '../components/layout/SideBar';
import { NewAccountFirstStep } from '../components/NewAccountFirstStep';
export const Register = () => {



    const  EmailAndPassWord = (Email , PSW1 , PSW2) => {
        console.log(Email ,PSW1 , PSW2)  
    }



    return (
        <div className='login-form'>
            <SideBar EmailAndPassWord = {EmailAndPassWord}/>
            <NewAccountFirstStep/>
        </div>
    )
}