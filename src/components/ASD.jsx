import React from 'react'
import ReturnButton from '../assets/icons/ReturnButton.svg';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";

const ArrayOfTypeToReturn = []

export const Asd = (props) => {
    const navigate = useNavigate()
    const [Other,  SetOther] = useState("");
    const [OtherOn,  SetOtherOn] = useState(false);
    const Next = () => {
        if (OtherOn) {
            ArrayOfTypeToReturn.push(Other) 
        } 
        props.AsdArrayExtraction(ArrayOfTypeToReturn)
    }
    const Addtype = (e) => {
        let AllReadyIn = false
        let Id = 0
        for (const input of ArrayOfTypeToReturn) {
            if (input === e) {
                AllReadyIn = true
                ArrayOfTypeToReturn.splice(Id, 1);
                break
            }
            Id++
        }
        if(AllReadyIn === false) {
            ArrayOfTypeToReturn.push(e) 
        }
    }
    const listItems = props.ASDtype.map((e) =>
     <div className='ASD-Div-Label'>
     <input className='ASD-Checkbox' value={e} type ='checkbox' id = {e} onClick={(e) => Addtype(e.target.value)}/> 
     <label htmlFor={e} className = 'ASD-TextLabel'>{e}</label>
     </div>
    
  );   
   
    return (
        <div className='ASD-Contener'>
            <h1 className='ASD-Title'> Dites nous en plus !</h1>
            <h2 className='ASD-Subtitle'>Les balises apparaîtrons sur votre profile afin de permettre aux autres utilisateurs d'identifier vos caractèristique </h2>
            <img src={ReturnButton} alt="bouton pour retourner à la page précédente" onClick={() => navigate("/userChoice")} className = 'Email-MDP-ButtonToPreviousPage'/>
            <div className='ASD-ItemList'>
                {listItems} 
                <div className='ASD-Div-Label'>
                    <input className='ASD-Checkbox' id = "other" type ='checkbox' /> 
                    <label htmlFor="other" className = 'ASD-TextLabel' onClick={ () => SetOtherOn(!OtherOn) } >Autre</label>
                    <input type="text" className='ASD-Hidden-Input' onChange={(e) => SetOther(e.target.value)} placeholder = "Ex : Dysléxie"/>
                </div>
            </div>
                
            <button className='btn btn-plain form-register-btn ASD-Bnt-Next' onClick={() => Next()}>Suivant</button>
        </div>
    )
} 
