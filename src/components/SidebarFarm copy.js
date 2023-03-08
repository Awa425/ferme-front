import React from 'react'
import { Link } from 'react-router-dom'
import { DataUsage, HeightRounded, Home, List } from '@material-ui/icons'

const SidebarFarm = active => {
    const value = active.value ? 'active' : ''
    return (
        <div className="farmPageSidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/FarmPage'><li className={`sidebarListItem ${value}`}><span className="sidebarIcon"><Home /></span>Home </li></Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Animales</h3>
                    <ul className="sidebarList">
                        <Link to='/ListAnimals'><li className={`sidebarListItem ${value}`}><span className="sidebarIcon"><List /></span>List animals</li></Link>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Gestion des données</h3>
                    <ul className="sidebarList">
                        <Link><li className="sidebarListItem"><span className="sidebarIcon"><HeightRounded /></span> Troupeaux</li></Link>
                        <Link to="/SensorsData"><li className="sidebarListItem"><span className="sidebarIcon"><DataUsage /></span> Données des Capteurs</li></Link>
                        <Link to="/AiData"><li className="sidebarListItem"><span className="sidebarIcon"><DataUsage /></span>Données IA</li></Link>
                        <Link to="/SupplyManagement"><li className="sidebarListItem"><span className="sidebarIcon"><List /></span> Fournisseurs</li></Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Employés</h3>
                    <ul className="sidebarList">
                        <Link to='/ListEmployers'><li className="sidebarListItem"><span className="sidebarIcon"><List /></span>List employers</li></Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Employersfghjk</h3>
                    <ul className="sidebarList">
                        <Link to='/ListEmployers'><li className="sidebarListItem"><span className="sidebarIcon"><List /></span>List employers</li></Link>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarFarm
