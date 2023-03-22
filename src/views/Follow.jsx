
import React from 'react'
import { SideBar } from '../components/layout/SideBar';
import { Follow } from '../components/Follow';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const FOLLOW = () => {

    const navigate = useNavigate() 
    const {state} = useLocation()

    const ReturnToPreviousPage = () => {
        navigate("/FinalRoute",{state : {DataForTheAccount : state.DataForTheAccount}})

}

    const Next = () => {
        navigate("/redirected",{state : {DataForTheAccount : state.DataForTheAccount}})

    }

        return (
        <div className='Email-MDP-Page'>
            <SideBar/>
            <Follow Next={Next} ReturnToPreviousPage={ReturnToPreviousPage}/>
        </div>
        )

}
    
