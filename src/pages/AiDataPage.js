import React from 'react'
import { Topbar, SidebarFarm, AiData} from '../components';

const AiDataPage = () => {
    return (
        <div>
            <Topbar />
            <div className="farmPageContainer">
            <SidebarFarm  active='active' />
            <AiData />
            </div>
           
        </div>
    )
}

export default AiDataPage
