import React, { useContext} from 'react';
import AuthContext from './Context';

const Auth = () => {
    const authC = useContext(AuthContext);

    return (
        <>
        <div className="container d-flex justify-content-center w-25 border p-2 bg-light mt-4 ">
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
