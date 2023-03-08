import React from 'react'
import {Banner, Footer, Navbar, Submenu, Sidebar, Hero2, Registre} from '../components'


const RegistrePage = () => {
    return(
        <main>
            <Navbar />
            <Sidebar />
            <Hero2 title="Registre"/>
            <Submenu />
            <section className="posts">
                <div className="posts-center">
                    <Registre />
                    <Banner />
                </div>
            </section>
     <Footer />
     </main>
    )
}

export default RegistrePage