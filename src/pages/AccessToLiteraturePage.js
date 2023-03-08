import React from 'react'
import { Footer, Navbar, Submenu, Sidebar, Hero2, AccessToLiterature, Scroll, Banner } from '../components';


const AccessToLiteraturePage = () => {
    return (
        <main>
            <Navbar />
            <Sidebar />
            <Hero2 title="Informations" />
            <Submenu />
            <Scroll showBelow={250} />
            <section className="dairy">
                <div className="dairy-center">
                    <AccessToLiterature />
                    <Banner />
                </div>
            </section>

            <Footer />

        </main>
    )
}

export default AccessToLiteraturePage
