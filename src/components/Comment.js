import React from 'react';
import img1 from "../assets/1.jpg";

const Comment = () =>  {
    return(
        <section>
        <div class="comment">
            <div class="comment-box">
                 <img src={img1} alt="" class="avatar" />
                <h4 class="comment-title">
                    <span itemprop="comment-name">Author name</span>
                    <span itemprop="comment-date" class="comment-date">20 Mai 2021</span>
                </h4>
                <div class="comment-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat quibusdam expedita nam exercitationem consequatur dicta dolorum, sint eos vel.</p>
                </div>
            </div>
            <div class="comment-box">
                 <img src={img1} alt="" class="avatar" />
                <h4 class="comment-title">
                    <span itemprop="comment-name">Author name</span>
                    <span itemprop="comment-date" class="comment-date">20 Mai 2021</span>
                </h4>
                <div class="comment-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat quibusdam expedita nam exercitationem consequatur dicta dolorum, sint eos vel.</p>
                </div>
            </div>
            <div class="comment-box">
                 <img src={img1} alt="" class="avatar" />
                <h4 class="comment-title">
                    <span itemprop="comment-name">Author name</span>
                    <span itemprop="comment-date" class="comment-date">20 Mai 2021</span>
                </h4>
                <div class="comment-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat quibusdam expedita nam exercitationem consequatur dicta dolorum, sint eos vel.</p>
                </div>
            </div>
            <div class="comment-box">
                 <img src={img1} alt="" class="avatar" />
                <h4 class="comment-title">
                    <span itemprop="comment-name">Author name</span>
                    <span itemprop="comment-date" class="comment-date">20 Mai 2021</span>
                </h4>
                <div class="comment-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat quibusdam expedita nam exercitationem consequatur dicta dolorum, sint eos vel.</p>
                </div>
            </div>
        </div>
     </section>
    );
};
export default Comment;