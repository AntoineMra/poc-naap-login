import React from "react";
import { SideBar } from "../components/layout/SideBarIntenalApp"
import { Coming } from "../components/coming"
import { useLocation } from 'react-router-dom';

export const Parameters = () => {
    const {state} = useLocation();
    return(
        <section className="FlexForApp">
            <SideBar state={state}></SideBar>
            <Coming></Coming>
        </section>
    )
}