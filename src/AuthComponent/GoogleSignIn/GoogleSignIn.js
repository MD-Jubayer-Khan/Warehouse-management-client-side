import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleSignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    let from = location.state?.from?.pathname || "/";


    if (user) {
        navigate(from, { replace: true });
    };
    return (    
          <div>
            {error}
             <Button onClick={()=>signInWithGoogle()} className='btn btn-dark mt-4 text-white border-none d-block mx-auto'>Google Sign In</Button>
            </div>
    );
};

export default GoogleSignIn;