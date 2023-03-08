import React from 'react'
import {  Footer, Navbar, Submenu, Sidebar, Hero2, ProductsAll, Scroll} from '../components';

const ListProducts = () => {
    return (
        <main>
            <Navbar />
            <Sidebar />
            <Hero2 title="Shop online"/>
            <Submenu />
            <Scroll />
            <ProductsAll/>
              
     <Footer />
     </main>
    )
}

export default ListProducts
