import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

const AddSupply = ({ po }) => {
    const history = useHistory()

    const [id, setId] = useState('');
    const [nomComplet, setNomComplet] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');
    const [role, setRole] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');
    const [specialite, setSpecialite] = useState('');

    useEffect(() => {
        setRole('veterinaire')
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = { id, nomComplet, password, role, adresse, telephone, specialite };
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

                history.push('/menu/VeterinarianList')
            }).catch((err) => {

            });


        }
        else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'failed',
                showConfirmButton: false,
                timer: 1500
            })
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
        if (specialite === null || specialite === '') {
            isproceed = false;
            errormessage = 'field required';
        }

        if (!isproceed) {
            console.log(errormessage)
            // toast.warning(errormessage)
        }
        return isproceed;
    }

    return (
        <div className="homeFarmPage">
            <articlee className="contact-form">
                <h2>Creation Veterinaire</h2>
                <form className="form-group1" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="nom complet" className="form-control1" value={nomComplet} onChange={e => setNomComplet(e.target.value)} />
                    <input type="text" name="username" placeholder="username" className="form-control1" value={id} onChange={e => setId(e.target.value)} />
                    <input type="password" name="password" placeholder="password" className="form-control1" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="password" name="confPass" placeholder="confirm password" className="form-control1" value={confPass} onChange={e => setConfPass(e.target.value)} />
                    <input type="text" name="address" placeholder="address" className="form-control1" value={adresse} onChange={e => setAdresse(e.target.value)} />
                    <input type="text" name="telephone" placeholder="telephone" className="form-control1" value={telephone} onChange={e => setTelephone(e.target.value)} />
                    <input type="text" name="specialite" placeholder="specialite" className="form-control1" value={specialite} onChange={e => setSpecialite(e.target.value)} />
                    <button type="submit" className="btn-product">Save</button>
                </form>
            </articlee>
        </div>
    )
}

export default AddSupply
