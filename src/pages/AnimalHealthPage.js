import React from 'react'
import { Footer, Navbar, Submenu, Sidebar, Hero2, AnimalHealth, Banner, Scroll, Comment} from '../components';


const AnimalHealthPage = () => {
    return (
        <div>
        <Navbar />
       <Sidebar />
       <Hero2 title="Question"/>
       <Submenu />
       <Scroll showBelow={250}/>
       <section class="forum">
           <div class="forum-center">
           <article>
           <AnimalHealth />
           <Comment />
           </article>
           <Banner />
           </div>
       </section>
   
       
       
      
       <Footer />
       
   </div>
    )
}

export default AnimalHealthPage
