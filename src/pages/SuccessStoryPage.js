import React from 'react'
import {  Footer, Navbar, Submenu, Sidebar, Hero2, Scroll, SuccessStory, Banner} from '../components';

const SuccessStoryPage = () => {
    return (
        <main>
        <Scroll showBelow={250}/>
        <Navbar />
        <Sidebar />
        <Hero2 title="Success Story"/>
        <Submenu />  
        <section class="posts">
                <div class="posts-center">
                <SuccessStory />    
                    <Banner />                   
                </div>
            </section>
          
        <Footer />
     </main>
    )
}

export default SuccessStoryPage
