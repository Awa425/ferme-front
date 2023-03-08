import React from 'react'
import { Topbar, SidebarFarm, AddEmployer} from '../components';

const AddEmployerPage = () => {
    return (
        <div>
             <Topbar />
            <div className="farmPageContainer">
            <SidebarFarm active='active'/>
            <AddEmployer po={'Create'}/>
            </div>
        </div>
    )
}

export default AddEmployerPage
