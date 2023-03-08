import React from 'react'
import { Navbar, Hero2, Sidebar, Submenu, Banner, Footer, Scroll, DailySector } from '../components'


const DairySectorPage = () => {
    return (
        <main>
            <Navbar />
            <Sidebar />
            <Hero2 title="Technologie dans le secteur laitier" />
            <Submenu />
            <Scroll showBelow={250} />
            <section className="dairy">
                <div className="dairy-center">
                    <DailySector />
                    <Banner />
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default DairySectorPage
