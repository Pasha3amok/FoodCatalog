import React, { useEffect } from 'react';
import { Login } from '../components/Login';
import { Registration } from '../components/Registration';

function LoginPage() {
    let username = sessionStorage.getItem('username');

    return <>{!username === null ? <Registration /> : <Login />}</>;
}

export { LoginPage };
