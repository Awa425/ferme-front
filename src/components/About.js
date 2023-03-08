import React from 'react'
import img3 from "../assets/3.jpg";

const About = () => {
    return( <section className="about">
    <div className="about-center">
        <article>
            <div className="about-infos">
                <h1>About our History</h1>
                <p className="paraph" >Capitalize on low hanging fruit to identify a ballpark value added</p>
                <p>
                    Wauia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipiscil.
                </p>
            </div>
            <img src={img3} alt="" className="img" />
        </article>
        <article>
            <div className="about-infos">
                <h1>Our Mission</h1>
                
                <p>
                    Wauia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipiscil.
                </p>
            </div>
            <div className="about-infos">
                <h1>Our Mission</h1>
                <p>
                    Wauia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipiscil.
                </p>
                <p>
                    Wauia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipiscil.
                </p>
            </div>
        </article>
    </div>
</section>
);
}

export default About