import React from 'react'
import { Navbar,Sidebar,Hero2,Submenu,Footer ,  SinglePost, Banner, Scroll} from '../components'
const SinglePostPage = () => {
  return (
    <main>
    <Navbar />
    <Sidebar />
    <Hero2 title="post 1" />
    <Submenu />
    <Scroll />
    <section className="posts">
        <div className="posts-center">
        <SinglePost />
        <Banner />
        </div>
    </section>
    <Footer/>
    </main>
   
  )
}

export default SinglePostPage