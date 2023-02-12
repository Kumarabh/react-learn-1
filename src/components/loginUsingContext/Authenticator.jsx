import React, { useState } from 'react';
import Auth from './Auth'
import AuthContext from './Context';

function Authenticator () {

    const [authStatus, setAuthStatus] = useState(false);
    const login = () => { console.log('set login as true'); setAuthStatus(true) };

    return (
        <>
        <AuthContext.Provider value={{status: authStatus, login: login}}>
        <Auth />
        </AuthContext.Provider>
        </>
    )

}

export default Authenticator;