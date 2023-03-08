import React from 'react';
import { Footer, Navbar, Submenu, Sidebar, Hero2, Farm, Scroll, SidebarFarm, Topbar } from '../components';

const FarmPage = () => {
    if (localStorage.getItem('role') == "fermier") {
        return (
            <div>
                <Topbar />
                <div className="farmPageContainer">
                    <SidebarFarm active='active' />
                    <Farm />
                </div>
            </div>
        )
    }
    else return (
        (
            <main>
                <Navbar />
                <Sidebar />
                <Hero2 title="Fermes" />
                <Submenu />
                <Scroll showBelow={250} />
                <Farm />
                <Footer />
            </main>
        )
    )


}

export default FarmPage;