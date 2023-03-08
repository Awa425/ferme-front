import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/http/api';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    const history = useHistory()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            history.push("/membre/login")
        }
    }, [])
    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     setValidEmail(validateEmail(email));
    //     setValidPassword(validatePassword(password));
    //     let item = { "email": email, "password": password };
    //     api.post('http://localhost:8000/users/login', item)
    //         .then(res => {
    //             console.log(res.data)
    //             localStorage.setItem('token', res.data.token)
    //             localStorage.setItem('email', res.data.user.email)
    //             localStorage.setItem('pass', res.data.user.password)
    //             if (localStorage.getItem('token')) {
    //                 history.push("/ListAnimals")
    //             }
    //         }).catch(err => {
    //             console.error('error !!!', err);
    //         });

    //     // history.push("/menu/FarmList")

    // }
    //Validation
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        const re = /^.{8,}$/;
        return re.test(password);
    };

    return (
        <article className="wrapper">
            <div class="title-text">
                <div class="title login">Login</div>
                <div class="title signup">Sign up</div>
            </div>
            <div class="form-container">
                <div class="form-inner">
                    <form action="" class="login">
                        <div class="field">
                            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="email address" />
                            <label class="pass-link">{!validEmail && <span>Email is not valid</span>}</label>
                        </div>
                        <div class="field">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                        </div>
                        <div class="pass-link"><Link to="/membre/ForgetPassword">Forgot password</Link></div>
                        <div class="field">
                            <input type="submit" value="Login" />
                        </div>
                        <div class="signup-link">Not a member <Link to='/membre/registre'>Signup now</Link></div>
                    </form>
                </div>
            </div>
        </article>

    )
}

export default Login 