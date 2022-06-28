import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../component/shared/Spinner/Spinner';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>
    }
    if(!user){
        return <Navigate to="/signIn" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;