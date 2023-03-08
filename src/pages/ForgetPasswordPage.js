import React from 'react'
import {  Banner, Footer, Navbar, Submenu, Sidebar, Hero2, ForgetPassword} from '../components';

const ForgetPasswordPage = () => {
    return (
        <main>
        <Navbar />
        <Sidebar />
        <Hero2 title="Login"/>
        <Submenu />
        <section className="posts">
            <div className="posts-center">
                <ForgetPassword />
                <Banner />
            </div>
        </section>
        <Footer />
     </main>
    )
}

export default ForgetPasswordPage
