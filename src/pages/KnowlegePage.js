import React from 'react'
import {  Footer, Navbar, Submenu, Sidebar, Hero2,  Scroll, Knowledge} from '../components';

const KnowlegePage = () => {
    return (
        <main>
        <Scroll showBelow={250}/>
        <Navbar />
        <Sidebar />
        <Hero2 title="Knowledge Base"/>
        <Submenu />
        <Knowledge />   
        <Footer />
        </main>
    )
}

export default KnowlegePage
