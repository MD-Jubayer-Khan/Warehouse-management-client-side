import React from 'react';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../component/shared/Spinner/Spinner';
import auth from '../../firebase.init';

const SignUp = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});


    let from = location.state?.from?.pathname || "/";

    const navigateSignIn = () =>{
        navigate('/SignIn');
    };
   
    if (user) {
        navigate(from, { replace: true });
    }

    if(loading){
        <Spinner></Spinner>
    }


    const handleSignUp = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form'>
        <h2 style={{textAlign: 'center'}}>Please signUp</h2>
        <form onSubmit={handleSignUp}>        
            <input type="email" name="email" id="" placeholder='Email Address' required/>
            
            <input type="password" name="password" id="" placeholder='Password' required/>
            <Button variant="primary" type="submit" value="Register" >
              Sign Up
            </Button>
        </form>
        <p>{error}</p>
        <p className='mt-2'>Already have an account? <Link to="/signIn" className='text-success' onClick={navigateSignIn}>Sign In</Link> </p>
        </div>

 
    );
};

export default SignUp;