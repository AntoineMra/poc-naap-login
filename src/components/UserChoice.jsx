import React from 'react'

export const UserChoice = () => {
    return (
        <div className="forms-page-container">
            <div className='forms-container'>
                <h1 className='form-header-title title-header'>Test</h1>
            <div className="radio-container">
                <input type="radio" id="Professionel" name="role" value="Professionel" className="role"/>
                <label for="Professionel">Professionel</label>
                <input type="radio" id="NEUROATYPIQUE" name="role" value="NEUROATYPIQUE" className="role" />
                <label for="NEUROATYPIQUE">NEUROATYPIQUE</label>
                <input type="radio" id="Curieux" name="role" value="Curieux" className="role"/>
                <label for="Curieux">Curieux</label>
                </div>



            </div>
        </div>
    )
}