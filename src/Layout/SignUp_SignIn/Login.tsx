import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useRef } from 'react';
import auth from '../Firebase/Firebase.config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login: React.FC = () => {

    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null)

    const {signIn} = useContext(AuthContext);




    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        console.log(email, password)

        /// signIn from authContext

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: `${errorCode} : ${errorMessage}`
            });
        });


        //// signin with email and password

        /*
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.emailVerified) {
                    navigate('/');
                    console.log(user)
                }
                else{
                    alert("Verify your email please")
                }

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `${errorCode} : ${errorMessage}`
                });
            });

        
        
        
        */
    }

    //// Forget Password

    const handleForgetPassword = () => {
        if (emailRef.current) {
            const email = emailRef.current.value;

            sendPasswordResetEmail(auth, email)
                .then(() => {
                    // Password reset email sent!
                    // ..
                    console.log("password email has been sent")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: `${errorCode} : ${errorMessage}`
                    });
                });
        }
    }



    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-3xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className="fieldset-label">Email</label>
                                    <input ref={emailRef} type="email" name="email" className="input w-[300px]" placeholder="Email" />
                                </div>
                                <div>
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" name="password" className="input" placeholder="Password" />
                                </div>
                                <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;