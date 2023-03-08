import React from 'react';
import { Veterinarian, SidebarFarm, Topbar, Navbar, Sidebar, Hero2, Submenu, Scroll, Footer } from '../components';

const VeterinarianPage = () => {
    if (localStorage.getItem('role') == 'fermier') {
        return (
            <div>
                <Topbar />
                <div className="farmPageContainer">
                    <SidebarFarm active='active' />
                    <Veterinarian />
                </div>
            </div>
        )
    }
    else return (
        <main>
            <Navbar />
            <Sidebar />
            <Hero2 title="Vétérinaire" />
            <Submenu />
            <Scroll showBelow={250} />
            <Veterinarian />
            <Footer />
        </main>
    )


}

export default VeterinarianPage
