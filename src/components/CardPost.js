import React, {useEffect} from 'react'
import img7 from "../assets/7.jpg";
import img6 from "../assets/6.jpg";
import img9 from "../assets/9.jpg";
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'


const CardPost = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <section className="cardPost">
            <div className="infosCard">
                <h2>The latest.</h2>
            <p>Articles, news, and important updates from BC Dairy</p>
            <Link to='/AllPost' className="btn-primary">View All</Link>
            </div>
        <section  className="card ">
        <div data-aos="fade-up" className="card-center">
            <div className="card-image">
                <img src={img7} alt="images" className=""/>
            </div>
                <div className="card-text">
                    <span className="card-date">2 days ago</span>
                    <h2>Post One</h2>
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
                    <Link to="/singlePost"  className="suite">More</Link>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <div className="value">20</div>
                        <div className="type">read</div>
                    </div>
                    <div className="stat border">
                        <div className="value">20</div>
                        <div className="type">Comment</div>
                    </div>
                    <div className="stat">
                        <div className="value">20</div>
                        <div className="type">views</div>
                    </div>
                </div>
            
          </div>
          <div data-aos="fade-up" className="card-center">
            <div className="card-image">
                <img src={img6} alt="images" className=""/>
            </div>
                <div className="card-text">
                    <span className="card-date">2 days ago</span>
                    <h2>Post Two</h2>
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
                    <Link to="/singlePost" className="suite">More</Link>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <div className="value">20</div>
                        <div className="type">read</div>
                    </div>
                    <div className="stat border">
                        <div className="value">20</div>
                        <div className="type">Comment</div>
                    </div>
                    <div className="stat">
                        <div className="value">20</div>
                        <div className="type">views</div>
                    </div>
                </div>
            
          </div>
          <div data-aos="fade-up" className="card-center">
            <div className="card-image">
                <img src={img9} alt="images" className=""/>
            </div>
                <div className="card-text">
                    <span className="card-date">2 days ago</span>
                    <h2>Post Tree</h2>
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
                    <Link to="/singlePost" className="suite">More</Link>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <div className="value">20</div>
                        <div className="type">read</div>
                    </div>
                    <div className="stat border">
                        <div className="value">20</div>
                        <div className="type">Comment</div>
                    </div>
                    <div className="stat">
                        <div className="value">20</div>
                        <div className="type">views</div>
                    </div>
                </div>
            
          </div>
             
    </section>
    </section>
    )
}

export default CardPost
