import React from 'react'
import { Forms } from '../components/Forms';
import { SideBar } from '../components/layout/SideBar';
import { useNavigate } from 'react-router-dom';

//Data test 
let Data = [
    {
        'Email': "gurvan@y.com",
        'mdp': 'ynov',
        'InterestCenter' : [],
        'NeuroBalises' : [],
        "Name" : "Gurvan",
        'FamilyName' : "Nicolas",
        'Role' : "fatiguer",
        "Speudo" : "",
        "Bio" : "Bonjour je suis un dev web qui aime react",
        "From" : "",
    },
    {
        'Email': "noa@y.com",
        'mdp': 'ynov',
        'InterestCenter' : ["Sport", "Cinéma", "Gastronomie","Dessin/Art","Nature"],
        'NeuroBalises' : ["Dysléxie", "Dyscalculie", "Dysphasie","TDA"],
        "Name" : "Noa",
        "FamilyName" : "LeFaux",
        'Role' : "NeuroAtypique",
        "Speudo" : "",
        "Bio" : "Bonjour je suis un dev web qui aime le code et les jeux video",
        "From" : "",
    }
]

export const Login = () => {

    let navigate = useNavigate()

    const handleSubmit = (email, psw) => {
        let id = -1
        let lenght = (Data.length - 1)
        while (lenght !== -1) {
            if (Data[lenght].Email === email) {
                if (Data[lenght].mdp === psw) {
                    id = lenght
                    onAuthenticationSucces(id)
                }
                break
            }
            lenght--
        }
        if (id === -1) {
            console.log('wrong passWord or Email')
        }
        // Here check if the given email & password match any data in our api
    }

    const onAuthenticationSucces = (id) => {
        // Must redirect to the '/redirected url once user is loged   
        navigate('/MainInApp' , {state : {Data : Data[id]}})

    }
    const ToRegister = () => {
        navigate('/register' , {state : {Data : Data}})
    }
    const ForgottenPassWord = () => {
        navigate('/ForgottenPSW')
    }

    return (
        <div className='login-form'>
            <SideBar />
            <Forms handleSubmit={handleSubmit} ToRegister={ToRegister} ForgottenPassWord={ForgottenPassWord} />
        </div>
    )
}
