import React from 'react'
import Product from './Product'
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";

const ProductsAll = () => {
    return (
        <section className="productAll">
            <h2>All products</h2>
            <div className="underline2"></div>
            <div className='productAll-center feat'>
                <Product img={img15} />
                <Product img={img16} />
                <Product img={img17} />
                <Product img={img15} />
                <Product img={img16} />
                <Product img={img17} />
                <Product img={img15} />
                <Product img={img16} />
                <Product img={img17} />
                
            </div>           
        </section>
    )
}

export default ProductsAll
