import React from 'react'
import {  Footer, Navbar, Submenu, Sidebar, Hero2, UsageSensor,Banner, Scroll} from '../components';

const SensorPage = () => {
    return (
        <main>
        <Navbar />
        <Sidebar />
        <Hero2 title="Usage Of Sensor"/>
        <Submenu /> 
        <Scroll showBelow={250}/>
        <section class="posts">
                <div class="posts-center">
                <UsageSensor /> 
                    <Banner />                   
                </div>
            </section>
        
        <Footer />

        </main>
    )
}

export default SensorPage
