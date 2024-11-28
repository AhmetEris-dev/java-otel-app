import React, { useState } from 'react'
import swal from 'sweetalert'

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { JavaOtelDispatch } from '../../store';
import { fetchLogin } from '../../store/feature/authSlice';
import { fetchGetProfileByToken } from '../../store/feature/adminSlice';
import logo from '../../img/logo-new.webp'
import './LoginPage.css'

function Login() {
   
    const dispatch = useDispatch<JavaOtelDispatch>();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

  
    const [isUserEmpty, setUserEmpty] = useState(false);
    const [isPasswordEmpty, setPasswordEmpty] = useState(false);

    const navigate = useNavigate();

    const Login = () => {
        setUserEmpty(userName === '');
        setPasswordEmpty(password === '');
     

        if (userName !== '' || password !== '') {
            dispatch(fetchLogin({ userName, password })).then(data => {
                if (data.payload.code === 200) {
                    dispatch(fetchGetProfileByToken())
                    navigate('/admin')
                }
            })
        }

    }

    return (
        <div  id="login-page" className='container'>
            <div className="row" style={{marginTop: '80px'}}>

                <div className="col-3"></div>

                <div className="col-6 login-body" style={{border: '1px solid gray', borderRadius: '20px'}}>
                    <div className="mb-5 mt-5 text-center">
                        <img src={logo} width={150} height={150} style={{ borderRadius: '100%' }} />
                        <h6 className='mt-2 text-center login-header' style={{ color: '#D4AF37' }}>Admin Paneline Giriş Yap</h6>
                    </div>
                    {
                        isUserEmpty
                            ? <div className="mb-4 ms-5">
                                <input style={{ borderColor: 'red' }} onChange={evt => { setUsername(evt.target.value) }}  type="text" className='form-control x-input' placeholder='Kullanıcı Adınızı Giriniz...'/>
                            </div>
                            : <div className="mb-4 ms-5">
                                <input onChange={evt => { setUsername(evt.target.value) }} type="text" className='form-control x-input' placeholder='Kullanıcı Adınızı Giriniz...' />
                            </div>
                    }
                    {
                        isPasswordEmpty
                            ? <div className="mb-4 ms-5">
                                <input style={{ borderColor: 'red' }} onChange={evt => { setPassword(evt.target.value) }} type="password" className='form-control x-input' placeholder='Şifrenizi Giriniz...' />
                            </div>
                            : <div className="mb-4 ms-5">
                                <input onChange={evt => { setPassword(evt.target.value) }} type="password" className='form-control x-input' placeholder='Şifrenizi Giriniz...' />
                            </div>
                    }



                    <div className="mt-5 mb-5">
                        <div className="row">
                            <div className="col text-center">
                                <button onClick={Login} className='btn btn-outline-dark' style={{width: '170px', height: '50px'}}>Giriş Yap</button>
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