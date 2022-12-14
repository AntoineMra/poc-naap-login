import React from 'react'
import { Forms } from '../components/Forms';
import { SideBar } from '../components/layout/SideBar';
import { useNavigate } from 'react-router-dom';

//Data test 
let Data = [
    {
        'email' : "g@y.com",
        'mdp' : 'ynov'
    },
    {
        'email' : "k@y.com",
        'mdp' : 'ynov'
    }
]



export const Login = () => {
    const handleSubmit = (email , psw) => {
        console.log('passe')
        let id = -1
        let lenght = (Data.length - 1 )
        while(lenght != -1){
            if(Data[lenght].email === email){
                if(Data[lenght].mdp === psw){
                    id = lenght
                    onAuthenticationSucces(id)
                }
                break
            }
            lenght--
        }
        if(id === -1){
            console.log('wrong passWord or Email')
        }
        // Here check if the given email & password match any data in our api
    }
let navigate = useNavigate()
    const onAuthenticationSucces = (id) => {
        // Must redirect to the '/redirected url once user is loged   
        navigate('/redirected')

    }

    return (
        <div className='login-form'>
            <SideBar />
            <Forms handleSubmit={handleSubmit} onAuthenticationSucces={onAuthenticationSucces}/>
        </div>
    )
}
