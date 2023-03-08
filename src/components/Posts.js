import React, {  } from 'react'
// import Banner from './Banner'
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";


const Posts = () => {



  return (
    <section className="posts">
        <h1 className="posts-title">All post</h1>
        <div className="posts-center">
            <article>
                <div className="post">
                    <div className="infos">
                        <h3>Les nouvelles machines</h3>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis totam natus nobis voluptatibus dignissimos repellat consectetur aliquid veniam debitis expedita!</p>
                        <Link to="/singlePost" className="link">voir plus</Link>
                    </div>
                    <img src={img1} alt="images" className="img"/>
                      <div className="foot-infos">
                          <span className="date">
                              <i className="icon">21 <FaComment /></i>
                              <i className="icon">21 comments</i>
                              <i className="icon">21 comments</i>
                          </span>
                          </div>                                                                 
                </div>
                <div className="post">
                    <div className="infos">
                        <h3>Les nouvelles machines</h3>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis totam natus nobis voluptatibus dignissimos repellat consectetur aliquid veniam debitis expedita!</p>
                        <Link to='/singlePost' className="link">voir plus</Link>
                    </div>
                    <img src={img2} alt="images" className="img"/>
                      <div className="foot-infos">
                          <span className="date">
                              <i className="icon">21 <FaComment /></i>
                              <i className="icon">21 comments</i>
                              <i className="icon">21 comments</i>
                          </span>
                          </div>                                                                 
                </div>
                <div className="post">
                    <div className="infos">
                        <h3>Les nouvelles machines</h3>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis totam natus nobis voluptatibus dignissimos repellat consectetur aliquid veniam debitis expedita!</p>
                        <Link to="/singlePost" className="link">voir plus</Link>
                    </div>
                    <img src={img1} alt="images" className="img"/>
                      <div className="foot-infos">
                          <span className="date">
                              <i className="icon">21 <FaComment /></i>
                              <i className="icon">21 comments</i>
                              <i className="icon">21 comments</i>
                          </span>
                          </div>                                                                 
                </div>
                <div className="post">
                    <div className="infos">
                        <h3>Les nouvelles machines</h3>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis totam natus nobis voluptatibus dignissimos repellat consectetur aliquid veniam debitis expedita!</p>
                        <Link to="/singlePost"  className="link">voir plus</Link>
                    </div>
                    <img src={img3} alt="images" className="img"/>
                      <div className="foot-infos">
                          <span className="date">
                              <i className="icon">21 <FaComment /></i>
                              <i className="icon">21 comments</i>
                              <i className="icon">21 comments</i>
                          </span>
                          </div>                                                                 
                </div>
            </article>
            <article className="infos-links">
            <div className="best">           
                <section className="content">
                    <h3>Articles Recent</h3>    
                    <article className='post-recent'>
                        <img src={img1} alt="aee" />
                         <div>
                            <h4>devoir</h4>
                            <p>age years</p>
                        </div>
                    </article>    
                    <article className='post-recent'>
                        <img src={img1} alt="aee" />
                         <div>
                            <h4>devoir</h4>
                            <p>age years</p>
                        </div>
                    </article>                
                    <article className='post-recent'>
                        <img src={img1} alt="aee" />
                         <div>
                            <h4>devoir</h4>
                            <p>age years</p>
                        </div>
                    </article>    
                </section>
               
            </div>
            
        </article>
        </div>

    </section>
  )
}

export default Posts
