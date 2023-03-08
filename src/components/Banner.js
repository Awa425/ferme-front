import React, { } from 'react'
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <article className="infos-links">
    <div className="best">           
        <section className="content">
            <h3 className="banner-title">Articles Recent</h3>    
            <article className='post-recent'>
                <Link to="/singlePost"><img src={img1} alt="aee" /></Link>
                 <div>
                 <Link to="/singlePost" ><h4 className="banner-title-recent">Les Nouvelles Machinesr</h4></Link>
                    <p>2 days ago</p>
                </div>
            </article>    
            <article className='post-recent'>
            <Link to="/singlePost"><img src={img2} alt="aee" /></Link>
                 <div>
                 <Link to="/singlePost"><h4 className="banner-title-recent">Les Nouvelles Machines</h4></Link>
                    <p>2 days ago</p>
                </div>
            </article>                
            <article className='post-recent'>
            <Link to="/singlePost"><img src={img3} alt="aee" /></Link>
                 <div>
                 <Link to="/singlePost"><h4 className="banner-title-recent">Les Nouvelles Machines</h4></Link>
                    <p>3 days ago</p>
                </div>
            </article>    
        </section>
       
    </div>
    
</article>
  )
}

export default Banner;
