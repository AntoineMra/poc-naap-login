import React from 'react'
import { UserChoice } from '../components/UserChoice';
import { SideBar } from '../components/layout/SideBar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const Choice = () => {

    const navigate = useNavigate()
    const {state} = useLocation() 

    const ReturnToPreviousPage = () => {
        navigate('/name', {state : {DataForTheAccount : state.DataForTheAccount}})
    }
    const SaveRole = (role) => {
        state.DataForTheAccount.Role = role
        switch(role) {
            case "NEUROATYPIQUE" :
            navigate("/NEUROATYPIQUE",{state : {DataForTheAccount : state.DataForTheAccount}})
            break
            case "Curieux" :
            navigate("/FinalRoute",{state : {DataForTheAccount : state.DataForTheAccount}})
            break
            case "Professionel" :
            navigate("/Professionel",{state : {DataForTheAccount : state.DataForTheAccount}})
            break
            default :
            console.log("Error : The role is not valid")
        };

    }
        //! Role
        return (
            <div className='login-form'>
                <SideBar/>
                <UserChoice saveRole={SaveRole} ReturnToPreviousPage={ReturnToPreviousPage}/>
            </div>
        )
    }
    
