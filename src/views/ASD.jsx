import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../components/layout/SideBar';
import { useLocation } from 'react-router-dom';
import { Asd } from '../components/ASD';

export const ASD = () => {
    let navigate = useNavigate()
    const { state } = useLocation()
    const AsdArrayExtraction = (array) => {
        state.NeuroBalises = array 
        console.log(state)//! Nerobalise don't cross the navigate 
        navigate("/FinalRoute",{state : {DataForTheAccount : state.DataForTheAccount}})
    }
        return (
        <div className='login-form'>
            <SideBar/>
            <Asd AsdArrayExtraction={AsdArrayExtraction}/>
        </div>
        )

}
    
