import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

const Registre = () => {
    const history = useHistory()

    const [id, setId] = useState('');
    const [nomComplet, setNomComplet] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');
    const [role, setRole] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');

    useEffect(() => {
        setRole('veterinaire')
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = { id, nomComplet, password, role, adresse, telephone };
        if (IsValidate()) {
            fetch("http://localhost:4000/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(user)

            }).then((res) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })

                history.push('/membre/login')
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });


        }

    }

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = '';
        if (id === null || id === '') {
            isproceed = false;
            errormessage = 'field required';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage = 'field required';
        }
        if (confPass === null || confPass === '' || confPass != password) {
            isproceed = false;
            errormessage = 'pass not conform';
        }
        if (nomComplet === null || nomComplet === '') {
            isproceed = false;
            errormessage = 'field required';
        }
        if (adresse === null || adresse === '') {
            isproceed = false;
            errormessage = 'field required ';
        }
        if (telephone === null || telephone === '') {
            isproceed = false;
            errormessage = 'field required';
        }

        if (!isproceed) {
            console.log(errormessage)
        }
        return isproceed;
    }



    return (
        <article className="wrapper">
            <div className="title-text">
                <div className="title signup">Sign up</div>
            </div>
            <div className="form-container">
                <div className="form-inner">
                    <form action="" className="login" onSubmit={handleSubmit}>
                        <div className="field">
                            <label> <span className="errmsg">*</span></label>
                            <input type="text" placeholder="nomComplet" value={nomComplet} onChange={e => setNomComplet(e.target.value)} />
                        </div>
                        <div className="field">
                            <label> <span className="errmsg">*</span></label>
                            <input type="text" placeholder="username" value={id} onChange={e => setId(e.target.value)} />
                        </div>
                        <div className="field">
                            <label> <span className="errmsg">*</span></label>
                            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="field">
                            <label> <span className="errmsg">*</span></label>
                            <input type="password" placeholder="confirme password" value={confPass} onChange={e => setConfPass(e.target.value)} />
                        </div>
                        <div className="field">
                            <label> <span className="errmsg">*</span></label>
                            <input type="text" placeholder="adresse" value={adresse} onChange={e => setAdresse(e.target.value)} />
                        </div>
                        <div className="field">
                            <label> <span className="errmsg">*</span></label>
                            <input type="text" placeholder="telephone" value={telephone} onChange={e => setTelephone(e.target.value)} />
                        </div>
                        <div className="field">
                            <input type="submit" value="Login" />
                        </div>
                        <div className="signup-link">A member <Link to="/membre/login">login now</Link></div>
                    </form>
                </div>
            </div>
        </article>
    )

}

export default Registre