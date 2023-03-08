import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
return ( 
    <footer id="main-footer" className="py-2">
      <div className="container footer-container">
      <div>
        {/* <img src="img/logo_light.png" alt="NewsGrid" /> */}
        LOGO
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt assumenda enim non? Ratione ipsum voluptates fuga eos earum vitae.</p>
      </div>
      <div>
        <h3>Email Newsletter</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form>
        <input type="email" placeholder="Enter Email..." />
          <input type="submit" value="Subscribe" className="btn btn-primary" />
        </form>
      </div>
      <div>
        <h2>Join Our Club</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nesciunt!</p>
        <Link to=""  className="btn btn-secondary">Join Now</Link>
      </div>
      <div>
        <p>
          Copyright &copy; 2021, All Rights Reserved
        </p>
      </div>
      </div>
    </footer>
    )
}

export default Footer