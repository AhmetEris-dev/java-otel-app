import React, { useState } from 'react'
import swal from 'sweetalert'
import './LoginPage.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { JavaOtelDispatch } from '../../store';
import { fetchLogin } from '../../store/feature/authSlice';
import { fetchGetProfileByToken } from '../../store/feature/adminSlice';
import logo from '../../img/logo-new.webp'

function Login() {
    document.body.style.backgroundColor = 'white';
    const dispatch = useDispatch<JavaOtelDispatch>();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isEmpty, setIsEmpty] = useState(false);
    const [isUserEmpty, setUserEmpty] = useState(false);
    const [isPasswordEmpty, setPasswordEmpty] = useState(false);

    const navigate = useNavigate();

    const Login = () => {
        setUserEmpty(userName === '');
        setPasswordEmpty(password === '');
        if (userName === '' || password === '') {
            setIsEmpty(true);
            return
        }
        else
            setIsEmpty(false);

        dispatch(fetchLogin({userName, password})).then(data => {
            if(data.payload.code === 200){
                dispatch(fetchGetProfileByToken())
                navigate('/admin')
            }
        })
    }

    return (
        <div className='container'>
            <div className="row  mt-5">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="mb-5 mt-5 text-center">
                        <img src={logo} width={150} height={150} style={{ borderRadius: '100%' }} />
                    </div>
                    {

                        isEmpty
                            ? <div className='alert alert-warning' role='alert'>
                                <h4 className='alert-heading'>Uyarı</h4>
                                <hr />
                                <p> Kullanıcı adı ve şifre boş geçilemez. </p>
                            </div>
                            : null
                    }

                    {
                        isUserEmpty
                            ? <div className="mb-3">
                                <label style={{ color: 'red' }} className="form-label">Kullanıcı Adı</label>
                                <input style={{ borderColor: 'red' }} onChange={evt => { setUsername(evt.target.value) }} type="text" className='form-control' />
                            </div>
                            : <div className="mb-3">
                                <label className="form-label">Kullanıcı Adı</label>
                                <input onChange={evt => { setUsername(evt.target.value) }} type="text" className='form-control' />
                            </div>
                    }
                    {
                        isPasswordEmpty
                            ? <div className="mb-3">
                                <label style={{ color: 'red' }} className="fom-label">Şifre</label>
                                <input style={{ borderColor: 'red' }} onChange={evt => { setPassword(evt.target.value) }} type="password" className='form-control' />
                            </div>
                            : <div className="mb-3">
                                <label className="fom-label">Şifre</label>
                                <input onChange={evt => { setPassword(evt.target.value) }} type="password" className='form-control' />
                            </div>
                    }



                    <div className="mb-4">
                        <div className="row">
                            <div className="col d-grid">
                                <button onClick={Login} className='btn btn-success'>Giriş Yap</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default Login