import React from 'react';
import { Login , Banner, Footer, Navbar, Submenu, Sidebar, Hero2} from '../components';

const LoginPage = () => {
    return ( 
    <main>
        <Navbar />
    <Sidebar />
    <Hero2 title="Login"/>
    <Submenu />
    <section className="posts">
        <div className="posts-center">
            <Login />
            <Banner />
        </div>
     </section>
     <Footer />
     </main>
        )
    
}

export default LoginPage 