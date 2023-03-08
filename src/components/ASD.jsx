import React from 'react'
import ReturnButton from '../assets/img/ReturnButton.png'

export const Asd = (props) => {
    const ArrayOfTypeToReturn = []
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
     <>
     <input className='ASD-Checkbox' value={e} type ='checkbox' id = {e} onClick={(e) => Addtype(e.target.value)}/> 
     <label htmlFor={e}>{e}</label>
     </>
    
  );   
   
    return (
        <div >
            <img src={ReturnButton} alt="bouton pour retourner à la page précédente" onClick={() => props.ReturnToPreviousPage()} className = 'Email-MDP-ButtonToPreviousPage'/>
            {listItems}
            <button className='ASD-Button' onClick={() => props.AsdArrayExtraction(ArrayOfTypeToReturn)}>Valider</button>
        </div>
    )
} 
