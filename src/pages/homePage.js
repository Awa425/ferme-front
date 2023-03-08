import React from 'react'
import { Navbar,Sidebar,Hero,Submenu,Footer ,  CardPost, AboutHome, Scroll, FeaturedProducts} from '../components'
const HomePage = () => {
  return (
    <main>
    <Navbar />
    <Sidebar />
    <Hero />
    <Submenu />
    <Scroll showBelow={250}/>
    <CardPost />
    <AboutHome />
    <FeaturedProducts />
    <Footer/>
    </main>
   
  )
}

export default HomePage