import React from 'react'
import { Topbar, SidebarFarm, SensorsData, Scroll, Navbar, Sidebar, Hero2, Submenu, Footer } from '../components';


const SensorsDataPage = () => {
    if (localStorage.getItem('role') == 'fermier') {
        return (

            <div>
                <Topbar />
                <div className="farmPageContainer">
                    <SidebarFarm active='active' />
                    <SensorsData />
                </div>
            </div>
        )
    }
    return (
        <main>
            <Scroll showBelow={250} />
            <Navbar />
            <Sidebar />
            <Hero2 title="Données Capteurs" />
            <Submenu />

            <SensorsData />
            <Footer />
        </main>

        // <div>
        //     <Topbar />
        //     <Navbar />
        //     <div className="farmPageContainer">
        //         <SensorsData />
        //     </div>
        // </div>
    )

}

export default SensorsDataPage
