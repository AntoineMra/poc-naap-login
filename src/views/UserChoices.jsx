import React from 'react'
import { UserChoice } from '../components/UserChoice';
import { SideBar } from '../components/layout/SideBar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Speudo } from '../components/Speudo'
export const Choice = () => {

    const navigate = useNavigate()
    const {state} = useLocation() 

    console.log(state.DataForTheAccount)
    const SpeudoDataExtraction = (Speudo , FirstName , LastName) => {
        state.DataForTheAccount.Speudo = Speudo
        state.DataForTheAccount.Name = FirstName
        state.DataForTheAccount.FamilyName = LastName
        navigate('/userChoice', {state : {DataForTheAccount : state.DataForTheAccount}})
    }
    const SaveRole = (role) => {
        console.log(role)
        state.DataForTheAccount.Role = role
        switch(role) {
            case "NEUROATYPIQUE" :
            navigate("/ASD",{state : {DataForTheAccount : state.DataForTheAccount}})
            break
            case "Curieux" :
            navigate("/FinalRoute",{state : {DataForTheAccount : state.DataForTheAccount}})
            break
            case "Professionel" :
            navigate("/Professional")
            break
        };

    }
    if(state.DataForTheAccount.Name === "") {
        //! Name , Family-Name & Pseudo 
        return (
            <div className='login-form'>
                <SideBar/>
                <Speudo SpeudoDataExtraction={SpeudoDataExtraction}/>
            </div>
        )
        
    } else {
        //! Role
        return (
            <div className='login-form'>
                <SideBar/>
                <UserChoice saveRole={SaveRole}/>
            </div>
        )
    }
    
}
