import React from 'react'
import { Topbar, SidebarFarm, Employers} from '../components';


const EmployersPage = () => {
    return (
        <div>
            <Topbar />
            <div className="farmPageContainer">
            <SidebarFarm active='active'/>
            <Employers />
            </div>
           
        </div>
        )
}

export default EmployersPage
