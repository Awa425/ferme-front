import React from 'react'
import { Link } from 'react-router-dom'
import {  FaComment } from 'react-icons/fa';
import { Footer, Navbar, Submenu, Sidebar, Hero2, AnimalManagement, Banner,  Scroll,} from '../components';

const ForumPage = () => {
    return (
        <div>
             <Navbar />
            <Sidebar />
            <Hero2 title="Forum"/>
            <Submenu />
            <Scroll showBelow={250}/>
            <section class="forum">
                <div class="forum-center">
                <article>
                <Link className="btn-upload" to="/PostArticle"><FaComment /> New Post</Link>
                <AnimalManagement />
                </article>
                <Banner />
                </div>
            </section>         
            <Footer />
            
        </div>
    )
}

export default ForumPage
