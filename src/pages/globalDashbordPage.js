import React from 'react';
import {  Footer, Navbar, Submenu, Sidebar, Hero2, ChartCow1, ChartCow2, Featured1, Scroll} from '../components';

const globalDashbordPage = () => {
    return ( 
    <main>
    <Navbar />
    <Sidebar />
    <Hero2 title="Global Dashboard"/>
    <Submenu />
    <Scroll showBelow={250}/>
    <section className="dashbord1">
    <div class="dashbord-center1">

    <Featured1 />
    
    </div>
    </section>  
    <section className="dashbord">
    <div class="dashbord-center">
        <ChartCow2 />
        <ChartCow1 />
    </div>
    </section> 
     <Footer />
     </main>
        )
    
}

export default globalDashbordPage;