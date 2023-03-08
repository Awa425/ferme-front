import React from 'react'

const AddComment = () => {
    return (
        <section className="contact">
            <articlee className="contact-form">
                <form className="form-group">
                    <input type="text" name="name" placeholder="name" className="form-control"/>
                    <input type="email" name="email" placeholder="email" className="form-control"/>
                    <textarea name="commentaire" className="form-control" rows="5" placeholder="Commentaire"></textarea>
                    <button type="submit" className="btn-product">Comment</button>
                </form>
            </articlee>
        </section>
    )
}

export default AddComment
