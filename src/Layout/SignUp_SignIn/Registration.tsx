///import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
//import auth from '../Firebase/Firebase.config';
import { AuthContext } from '../Provider/AuthProvider';

const Registration: React.FC = () => {

    const [error, setError] = useState<string | null>(null);

    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        // check for get Data
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        console.log(email, password)


        /// validation

        const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

        if (!emailRegex.test(email)) {
            setError("Enter a right email")
            return
        }
        else if (password.length < 6 || !passwordRegex.test(password)) {
            setError("Password should have on UpperCase letter and one Lowercase letter.")
            return
        }

        /// create user from context

        createUser(email, password)
         .then((result: unknown) => {
            const user = result.user;
            Swal.fire({
                title: "User Successfully created and email was sent",
                icon: "success",
                draggable: true
            });
            console.log(user)
         }) 
         .catch((error : unknown) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: `${errorCode} ${errorMessage}`
            });
        });


       /* 
       
        //// createUser from raw

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...

                console.log(user)

                sendEmailVerification(user)
                    .then(() => {
                        // Email verification sent!
                        // ...
                        Swal.fire({
                            title: "User Successfully created and email was sent",
                            icon: "success",
                            draggable: true
                        });
                    });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `${errorCode} ${errorMessage}`
                });
            });
       
       
       
       
       
       
       */
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
                                    <input type="email" name="email" className="input w-[300px]" placeholder="Email" />
                                </div>
                                <div>
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" name="password" className="input" placeholder="Password" />
                                </div>
                                <div>
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                </div>
                                <button className="btn btn-primary bg-blue-700 mt-4">Registration</button>
                            </form>
                        </div>
                        <p className='text-red-600 font-bold'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;