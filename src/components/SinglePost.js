import React from 'react'
import img1 from "../assets/1.jpg";
import { Comment } from '.';
import AddComment from './AddComment';



const SinglePost = () => {
    return(      
          <article>
                <div className="post">
                <img src={img1} alt="images" className="img"/>
                    <div className="infos">
                        <h3>Les nouvelles machines</h3>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis totam natus nobis voluptatibus dignissimos repellat consectetur aliquid veniam debitis expedita!.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis totam natus nobis voluptatibus dignissimos repellat consectetur aliquid veniam debitis expedita!.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis totam natus nobis voluptatibus dignissimos repellat consectetur aliquid veniam debitis expedita!.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis totam natus nobis voluptatibus dignissimos repellat consectetur aliquid veniam debitis expedita!.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis totam natus nobis voluptatibus dignissimos repellat consectetur aliquid veniam debitis expedita!</p>  
                    </div>
                   
                      <div className="foot-infos">
                    
                          </div>                                                        
                </div>  
                <Comment />  
                <AddComment />  
            </article>
    );

}

export default SinglePost