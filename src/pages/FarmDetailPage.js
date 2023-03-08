import React from 'react'
import { FarmDetail,Navbar, Hero2, Sidebar, Submenu, Banner, Footer, Scroll } from '../components'


const FarmDetailPage = () => {
    return (
        <>
        <Navbar />
        <Sidebar />
        <Hero2 title="Fam "/>
        <Submenu />
        <Scroll showBelow={250}/>
        <section class="posts">
            <div class="posts-center">
                <FarmDetail />   
                <Banner />                   
            </div>
        </section>
        <Footer />       
 </>
    )
}

export default FarmDetailPage
