import React from "react";
import { SideBar } from "../components/layout/SideBarIntenalApp"
import { Account } from "../components/Account"
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



export const Accounts = () => {
    const {state} = useLocation() 
    const navigate = useNavigate()
    return(
        <section className="FlexForApp">
            <SideBar state={state}></SideBar>
            <Account info={state}></Account>
        </section>
    )
}