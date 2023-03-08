import React from 'react'
import { Topbar, SidebarFarm, AddSupply} from '../components';

const AddSupplyPage = () => {
    return (
        <div>
             <Topbar />
            <div className="farmPageContainer">
            <SidebarFarm active='active'/>
            <AddSupply po={'Create'}/>
            </div>
        </div>
    )
}

export default AddSupplyPage
