import React from 'react'
import { Common,Navbar, Hero2, Sidebar, Submenu, Banner, Footer, Scroll } from '../components'


const CommonDisease = () => {
    return(
        <>
            <Navbar />
            <Sidebar />
            <Hero2 title="Common Disease"/>
            <Submenu />
            <Scroll showBelow={250}/>
            <section class="posts">
                <div class="posts-center">
                    <Common />   
                    <Banner />                   
                </div>
            </section>
            <Footer />       
     </>
    )
}

export default CommonDisease