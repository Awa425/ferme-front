import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/contextNavbar';

const Hero2 = ({title}) => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero-page' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
      <article className='hero-info'>
          <h3 >   
          {title}      
          </h3>
          <p><Link to="/">Home</Link> / {title}</p>
        </article>
      </div>
    </section>
  );
};

export default Hero2;
