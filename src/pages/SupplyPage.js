import React from 'react';
import { Topbar, SidebarFarm, Supply} from '../components';

const SupplyPage = () => {
    return (
        <div>
            <Topbar />
            <div className="farmPageContainer">
            <SidebarFarm active='active'/>
            <Supply />
            </div>
           
        </div>
    )
}

export default SupplyPage
