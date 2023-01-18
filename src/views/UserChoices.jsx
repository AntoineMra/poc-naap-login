import React from 'react'
import { UserChoice } from '../components/UserChoice';
import { SideBar } from '../components/layout/SideBar';
import { Biography } from '../components/Biography';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Choice = () => {
    const navigate = useNavigate()
    const {state} = useLocation()
    const DataForTheAccount = {
        Bio : "",
        Email : state.Email,
        Role : -1
    };

    let Bio = ""   
        const BioPage = (BioEntry) => {
            //Todo check if the bio is ok with web rules
            DataForTheAccount.Bio = BioEntry
        }

    return (
        <div className='login-form'>
            <SideBar/>
            <Biography BioPage = {BioPage}/>
        </div>
    )
}
//<UserChoice/>