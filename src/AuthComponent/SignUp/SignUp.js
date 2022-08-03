import React from 'react';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

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
       return <p>Loading...</p>
    }


    const handleSignUp = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='mx-auto text-center'>
        <h2 className='text-center'>signUp Here</h2>
        <form className=' mx-auto' onSubmit={handleSignUp}>        
            <input type="email" name="email" placeholder='Email Address' required/>
            <br />
            <input className='mt-4 mb-3' type="password" name="password" placeholder='Password' required/>
            <br />
            <Button variant="primary" type="submit" value="Register" >
              Sign Up
            </Button>
        </form>
        <p>{error?.message}</p>
        <p className='mt-2'>Already have an account? <Link to="/signIn" className='text-success' onClick={navigateSignIn}>Sign In</Link> </p>

        <GoogleSignIn></GoogleSignIn>
        </div>
 
    );
};

export default SignUp;