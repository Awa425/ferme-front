import React from 'react'
import {  Person } from '@material-ui/icons'

const Dropdown = () => {
    return (
        <div className="dropdown"> 
            <button className="dropdown_toggle">
            <Person className="icon"/>
            </button>
            <div className="dropdown_content">
            <ul>
                <li className="dropdown_toggle-badge">Profil</li>
                <li className="dropdown_toggle-badge">Setting</li>
                <li className="dropdown_toggle-badge">Profil</li>
                <li className="dropdown_toggle-badge">Profil</li>
            </ul>
            </div>
        </div>
    )
}

export default Dropdown
