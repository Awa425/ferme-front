import React from 'react'
import { Topbar, SidebarFarm, DisplaySupplier} from '../components'

const DisplaySupplierPage = () => {
    return (
        <div>
        <Topbar />
          <div className="farmPageContainer">
          <SidebarFarm  active='active' />
          <DisplaySupplier name="Supplier" />
          </div>  
          </div>  
    )
}

export default DisplaySupplierPage
