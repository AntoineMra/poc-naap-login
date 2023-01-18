import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../components/layout/SideBar';
export const Professional = () => {
    let navigate = useNavigate()

        return (
        <div className='login-form'>
            <SideBar/>
            <p>pro</p>
        </div>
        )

}
    
