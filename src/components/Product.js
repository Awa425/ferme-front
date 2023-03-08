import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Product = ({img}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <article data-aos="fade-up">
                <div className="container-product ">
                    <img src={img} alt="" className="img-product img" />
                    <Link to="" className="link-product ">
                        <FaSearch />
                    </Link>
                    
                </div>
                <footer className="footer-product">
                    <h5>product1</h5>
                    <p>34$</p>
                </footer>
                
            </article>
    )
}

export default Product
