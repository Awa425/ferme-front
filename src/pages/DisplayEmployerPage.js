import React from 'react'
import { Topbar, SidebarFarm,  DisplayEmployer} from '../components';


const DisplayEmployerPage = () => {
    return (
        <div>
        <Topbar />
          <div className="farmPageContainer">
          <SidebarFarm  active='active' />
          <DisplayEmployer name="Employer" />
          </div>  
          </div>  
    )
}

export default DisplayEmployerPage
