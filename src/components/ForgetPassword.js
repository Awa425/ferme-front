import React from 'react'
import { Link } from 'react-router-dom';


const ForgetPassword = () => {
    return (
        <article className="wrapper">
        <div class="title-text">
        <div class="title login">new password</div>
    </div>
    <div class="form-container">
        <div class="form-inner">
        <form action="" class="login">
            <div class="field">
                <input type="text" placeholder="Username or e-mail address *" />
            </div>
            <div class="field">
                <input type="submit" value="E-mail new password" />
            </div>
            <div class="signup-link">Not a member <Link to='/membre/registre'>Signup now</Link></div>
        </form>
        </div>
    </div>
    </article>
    )
}

export default ForgetPassword
