import React from 'react'
import { Topbar, SidebarFarm } from '../components';
import TroupeauxDashboard from '../components/TroupeauxDashboard';

const TroupeauxDashboardPage = () => {
    return (
        <div>
            <Topbar />
            <div className="farmPageContainer">
                <SidebarFarm active='active' />
                <TroupeauxDashboard />
            </div>

        </div>
    )
}

export default TroupeauxDashboardPage
