import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import auth from '../Firebase/Firebase.config';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget; // Correctly reference the form
        const formData = new FormData(form); // Extract form data safely

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        console.log(email, password);

        ///signin
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                if(user.emailVerified){
                    navigate('/')
                }
                else{
                    alert('Please verify your email please')
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    /// Forget Password

    const handleForgetPassword = () => {
    
        if (emailRef.current) {
            const email = emailRef.current.value;
            sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                alert(email)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
        }
        
       
    }
    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <form onSubmit={handleSubmit}>
                                    <label className="fieldset-label">Email</label>
                                    <input ref={emailRef} onChange={handleChange} name="email" type="email" className="input" placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input onChange={handleChange} name="password" type="password" className="input" placeholder="Password" />
                                    <div><a onClick={handleForgetPassword} href="#" className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;