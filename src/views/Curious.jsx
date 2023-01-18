import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../components/layout/SideBar';
import { Biography } from '../components/Biography';
import { useLocation } from 'react-router-dom';

export const Curious = () => {
    
    const navigate = useNavigate() 
    const {state} = useLocation()
    const DataForTheAccount = state.DataForTheAccount
    const BioPage = (BioEntry) => {
        //Todo check if the bio is ok with web rules
        DataForTheAccount.Bio = BioEntry
        console.log(DataForTheAccount)
        navigate("redirected",{state : {DataForTheAccount : DataForTheAccount}})

    }
        return (
        <div className='login-form'>
            <SideBar/>
            <Biography BioPage={BioPage}/>
        </div>
        )

}
    
