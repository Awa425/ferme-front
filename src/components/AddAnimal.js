import React from 'react'
import { Link } from 'react-router-dom'

const AddAnimal = ({po}) => {
    return (
        <div className="homeFarmPage">
            <articlee className="contact-form">
                <h2>{po} Animal</h2>
                <form className="form-group1">
                    <input type="text" name="name" placeholder="name" className="form-control1"/>
                    <input type="email" name="email" placeholder="email" className="form-control1"/>
                    <input type="text" name="contact" placeholder="contact" className="form-control1"/> <input type="text" name="address" placeholder="address" className="form-control1"/> <input type="text" name="city" placeholder="city" className="form-control1"/>
                    <button type="submit" className="btn-product"><Link to="/ListAnimals"> Save</Link></button>
                </form>
            </articlee>
            
        </div>
    )
}

export default AddAnimal
