import React from 'react'
import { Topbar, SidebarFarm, Animals, Navbar, Sidebar, Hero2, Submenu, Scroll, Footer } from '../components';


const AnimalsPage = () => {
    if (localStorage.getItem('role') == 'fermier') {
        return (
            <div>
                <Topbar />
                <div className="farmPageContainer">
                    <SidebarFarm active='active' />
                    <Animals />
                </div>
            </div>
        )
    }
    else if (localStorage.getItem('role') == 'employe') {
        return (
            <main>
                <Navbar />
                <Sidebar />
                <Hero2 title="Gestion des Animaux" />
                <Submenu />
                <Scroll showBelow={250} />
                <Animals />
                <Footer />
            </main>
        )
    }

}

export default AnimalsPage

