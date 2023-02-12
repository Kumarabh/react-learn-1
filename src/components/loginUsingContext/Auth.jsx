import React, { useContext} from 'react';
import AuthContext from './Context';

const Auth = () => {
    const authC = useContext(AuthContext);

    return (
        <>
        <div className="container-fluid d-flex justify-content-center border p-3">
            {
                authC.status ? <h6>You are logged In 😊 </h6>
                : <button className='btn btn-outline-secondary' 
                onClick={authC.login}>Login now</button>
            }
            
        </div>
        </>
    )
}

export default Auth;
