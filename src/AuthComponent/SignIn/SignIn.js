import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn'

const SignIn = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    };
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if(loading){
      return  <p>Loading..</p>
    }

   let errMsg ;
    if(error){
        errMsg = <p className='text-danger'>{error?.message}</p>
    }

    const navigateSignUp = () => {
        navigate('/signUp');
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('email sent')

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Sign In</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errMsg}
                <Button variant="primary" type="submit">
                  Sign In
                </Button>
            </Form>
            <p className='mt-3'>Don't have an account? <Link to="/SignUp" className='text-info text-decoration-none' onClick={navigateSignUp}>Sign Up from here</Link> </p>
            <Link to="/SignIn" className='text-decoration-none' onClick={resetPassword}>Forget password?</Link>
            <ToastContainer />
            <GoogleSignIn></GoogleSignIn>
        </div>
        
    );
};

export default SignIn;