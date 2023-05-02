import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { News } from '../components/NewsComponent';
import { SideBar } from '../components/layout/SideBarIntenalApp';
export const NewsPage = ()=> {
    const {state} = useLocation() 
    const navigate = useNavigate()
return (
    <section className='FlexForApp'>
        <SideBar state={state}/>
        <News info={state}></News>
    </section>

)

}