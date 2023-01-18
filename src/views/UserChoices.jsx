import React from 'react'
import { UserChoice } from '../components/UserChoice';
import { SideBar } from '../components/layout/SideBar';
import { useNavigate } from 'react-router-dom';


export const Choice = () => {

    const SaveRole = (role) => {
        console.log(role)
        const navigate = useNavigate()
        navigate('/redirected')



    }




    return (
        <div className='login-form'>
            <SideBar/>
        <UserChoice saveRole={SaveRole}/>
        </div>
    )
}
