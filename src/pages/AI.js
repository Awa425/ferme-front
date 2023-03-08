import React from 'react'
import {  Footer, Navbar, Submenu, Sidebar, Hero2, UsagesOfAI, Scroll, Banner} from '../components';

const AI = () => {
    return (
        <main>
        <Navbar />
        <Sidebar />
        <Hero2 title="Usage Of Artificial Intelligence"/>
        <Submenu /> 
        <Scroll showBelow={250}/>
        <section class="posts">
                <div class="posts-center">
                <UsagesOfAI />
                 <Banner />                   
                </div>
            </section>
        <Footer />

        </main>
    )
}

export default AI
