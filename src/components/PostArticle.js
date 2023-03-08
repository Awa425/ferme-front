import React from 'react'
import { Link } from 'react-router-dom'

const PostArticle = () => {
    return (
        <article className="contact">
            <h3>Post Question</h3>
            <Link to="/collaboration/forum"  className="btn-product1">Back forum</Link>
            <articlee className="contact-form">
                <form className="form-group">
                    <input type="text" name="title" placeholder="title" className="form-control2"/>
                    <textarea name="content" className="form-control2" rows="5" placeholder="content"></textarea>
                    <input type="text" name="type" placeholder="type" className="form-control2"/>
                    <button type="submit" className="btn-product">Save Post</button>
                </form>
            </articlee>
        </article>
    )
}

export default PostArticle
