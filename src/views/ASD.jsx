import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../components/layout/SideBar';
import { useLocation } from 'react-router-dom';
import { Asd } from '../components/ASD';

const ASDtype = ["Dysléxie", "Dyscalculie", "Dysphasie", "Dysorthographique", "Dyspraxie", "Dysgraphie","TDA","Hyperactivité", "TSA","HPI","THPI","HPE","Hypersensibilité","TOC","TOP"]

export const ASD = () => {
    let navigate = useNavigate()
    const { state } = useLocation()
    
    const ReturnToPreviousPage = () => {
        navigate('/userChoice', {state : {DataForTheAccount : state.DataForTheAccount}})
    }

    const AsdArrayExtraction = (array) => {
        state.DataForTheAccount.NeuroBalises = array
        navigate("/FinalRoute",{state : {DataForTheAccount : state.DataForTheAccount}})
    }
        return (
        <div className='Email-MDP-Page'>
            <SideBar/>
            <Asd AsdArrayExtraction={AsdArrayExtraction} ReturnToPreviousPage={ReturnToPreviousPage} ASDtype={ASDtype}/>
        </div>
        )

}
    
