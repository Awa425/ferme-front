import React from 'react';
import {  Footer, Navbar, Submenu, Sidebar, Hero2, About, Scroll} from '../components';

const AboutPage  = () => {
    return ( 
    <main>
        <Scroll showBelow={250}/>
    <Navbar />
    <Sidebar />
    <Hero2 title="About"/>
    <Submenu />
    
    <About />   
     <Footer />
     </main>
        )
    
}

export default AboutPage;