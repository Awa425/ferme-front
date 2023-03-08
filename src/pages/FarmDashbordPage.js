import React from 'react'
import { Topbar, SidebarFarm, HomeFarm} from '../components';

const FarmDashbordPage = () => {
    return (
        <div>
            <Topbar />
            <div className="farmPageContainer">
            <SidebarFarm active='active'  />
            <HomeFarm />
            </div>
           
        </div>
    )
}

export default FarmDashbordPage
