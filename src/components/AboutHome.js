import React from 'react'
import {Link} from 'react-router-dom'
import img2 from "../assets/2.jpg";


const AboutHome = () => {
    return (
    <section className="section about" id="about">
        <div className="title-wrapper">
            <h2 className="title">about <span className="subtitle">us</span></h2>
        </div>
        <div className="about-center section-center">
           
            <article className="about-img">
                <img src={img2} className="about-photo img" alt="awesome beach" />
            </article>
            
            <article className="about-info">
                <h3>explore the difference</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro adipisci inventore saepe! Reiciendis non ratione quaerat natus numquam tempora soluta.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro adipisci inventore saepe! Reiciendis non ratione quaerat natus numquam tempora soluta.</p>
                <Link to="/about" className="btn-primary">read more</Link>
            </article>
        </div>
        
    </section>

    )
}

export default AboutHome
