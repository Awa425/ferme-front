import React from 'react';
import { useGlobalContext } from '../context/contextNavbar';
import { Link } from 'react-router-dom'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Bienvenue<br />
            dans notre ferme
          </h1>
          <p className="hero-paraph">
            Une ferme d'animaux est un lieu où des animaux sont élevés pour la production alimentaire, l'utilisation de leur fourrure ou de leur lait, ou pour des activités récréatives. Les fermes d'animaux...          </p>
          <Link to="/about" className='btn'>about us</Link>
        </article>
      </div>
    </section>
  );
};

export default Hero;
