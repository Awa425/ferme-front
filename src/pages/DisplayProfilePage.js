import React from 'react';
import { Topbar, SidebarFarm,  DisplayProfile} from '../components';

const DisplayProfilePage = () => {
    return (
        <div>
          <Topbar />
            <div className="farmPageContainer">
            <SidebarFarm  active='active' />
            <DisplayProfile name="Animal" />
            </div>  
        </div>
    )
}

export default DisplayProfilePage
