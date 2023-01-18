import React from 'react'
import { UserChoice } from '../components/UserChoice';
import { SideBar } from '../components/layout/SideBar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Choice = () => {

    const IndexStep = 1
    const navigate = useNavigate()
    const {state} = useLocation()

    const DataForTheAccount = {
        Bio : "",
        Email : state.Email,
        Role : "",
        Name : "",
        Pseudo : "",
        FamilyName: "",
        NeuroBalises : [],
    };

    const SaveRole = (role) => {
        console.log(role)
        DataForTheAccount.Role = role
        switch(role) {
            case "NEUROATYPIQUE" :
            navigate("ASD")
            break
            case "Curieux" :
            navigate("Curious",{state : {DataForTheAccount : DataForTheAccount}})
            break
            case "Professionel" :
            navigate("Professional")
            break
        };

    }
    switch(IndexStep) {
        case 0: //! Name , Family-Name & Pseudo 
        return (
            <div className='login-form'>
                <SideBar/>

            </div>
        )
        case 1: //! Role
        return (
            <div className='login-form'>
                <SideBar/>
                <UserChoice saveRole={SaveRole}/>
            </div>
        )
    }
    
}
