import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()
    const url = 'https://api-ferme.onrender.com/users/'


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            // console.log('goddd!!!')
            await fetch(url + username)
                .then((res) => {
                    return res.json()
                }).then((resp) => {
                    if (Object.keys(resp).length === 0) {
                        Swal.fire({
                            title: 'Error!',
                            text: 'username or password incorect',
                            icon: 'error',
                            confirmButtonText: 'ok'
                        })

                    }
                    else if (resp.password === password) {
                        localStorage.setItem('username', resp.id)
                        localStorage.setItem('nomComplet', resp.nomComplet)
                        localStorage.setItem('role', resp.role)
                        history.push("/")

                        // if (resp.role == 'fermier') { history.push("/") }
                        // else if (resp.role == 'veterinaire') { history.push("/") }
                        // else  { history.push("/") }

                        console.log(resp)
                    }
                    else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'username or password incorect',
                            icon: 'error',
                            confirmButtonText: 'ok'
                        })
                    }
                }).catch((err) => console.log(err))
        }
        else { console.log('not goddd!!!') }
    }

    const validation = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false
            // toast.warning()
        }
        if (password === '' || password === null) {
            result = false
            // toast.warning()
        }
        return result
    }

    return (
        <article className="wrapper">
            <div className="title-text">
                <div className="title login">Login</div>
                <div className="title signup">Sign up</div>
            </div>
            <div className="form-container">
                <div className="form-inner">
                    <form action="" className="login" onSubmit={handleSubmit}>
                        <div className="field">
                            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="pass-link"><Link to="/membre/ForgetPassword" >Forgot password</Link></div>
                        <div className="field">
                            <input type="submit" value="Login" />
                            {/* <button type="submit" className="btn btn-primary" >Login</button> */}
                        </div>
                        {/* <div className="signup-link">Not a member <Link to='/membre/registre'>Signup now</Link></div> */}
                    </form>
                </div>
            </div>
        </article>

    )
}

export default Login 