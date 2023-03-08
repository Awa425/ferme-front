import React from 'react'
import { Topbar, SidebarFarm, AddAnimal} from '../components';


const AddAnimalPage = () => {
    return (
        <div>
             <Topbar />
            <div className="farmPageContainer">
            <SidebarFarm active='active'/>
            <AddAnimal po={'Create'}/>
            </div>
        </div>
    )
}

export default AddAnimalPage
