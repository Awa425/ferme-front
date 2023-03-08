import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";

const FeaturedProducts = () => {
    return (
        <section className="products">
       <div className="products-title">
           <h2>products</h2>
           <div className="underline2"></div>
       </div>
       <div className="section-center-product feat">
            <Product img={img15} />
            <Product img={img16}  />
            <Product img={img17}  />
               
       </div>
       <Link to='/order-online' className="btn-product">All products</Link>
    </section>
    )
}

export default FeaturedProducts
