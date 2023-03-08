import React from 'react'
import { Navbar,Sidebar,Hero2,Submenu,Footer , Scroll, CardPostAll} from '../components'

const CardAllPage = () => {
    return (
        <div>
        <Navbar />
        <Sidebar />
        <Hero2 title="All post" />
        <Submenu />
        <Scroll showBelow={250}/>
        <CardPostAll />
        <Footer />

        </div>
    )
}

export default CardAllPage
