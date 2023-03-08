import React from 'react'
import { PostArticle,Navbar, Hero2, Sidebar, Submenu, Banner, Footer, Scroll } from '../components'

const PostArticlePage = () => {
    return (
        <>
        <Navbar />
        <Sidebar />
        <Hero2 title="Post Question"/>
        <Submenu />
        <Scroll showBelow={250}/>
        <section class="posts">
            <div class="posts-center">
                <PostArticle />   
                <Banner />                   
            </div>
        </section>
        <Footer />       
 </>
    )
}

export default PostArticlePage
