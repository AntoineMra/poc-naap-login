import React from 'react'
import { UserChoice } from '../components/UserChoice';
import { SideBar } from '../components/layout/SideBar';

export const Choice = () => {
    return (
        <div className='login-form'>
            <SideBar/>
            <UserChoice/>
        </div>
    )
}
