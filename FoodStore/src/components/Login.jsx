import React, { FormEvent, useState } from 'react';
import useForm from '../hooks/useForm';
import TextField from '@mui/material/TextField';

const getFreshModel = () => ({
    email: '',
});

const Login = () => {
    const { values, setValues, errors, setErrors, handleInputChange } =
        useForm(getFreshModel);

    return (
        <>
            <div class="module form-module">
                <div class="icon">
                    <h2 style={{ margin: '10px 0px 0px 120px' }}>
                        <i className="material-icons large">account_box</i>
                    </h2>
                </div>
                <div className="form">
                    <h2>Login to your account</h2>
                    <form noValidate>
                        <input
                            name="email"
                            placeholder="email"
                            value={values.email}
                        />
                        {/* <input
                            name="email"
                            type="email"
                            placeholder="email"
                            value={values.email}
                            onChange={handleInputChange}
                        /> */}
                        {/* <input
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleInputChange}
                        /> */}
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div class="cta">
                    <a href="#!">Forgot your password?</a>
                </div>
            </div>
        </>
    );
};

export { Login };
