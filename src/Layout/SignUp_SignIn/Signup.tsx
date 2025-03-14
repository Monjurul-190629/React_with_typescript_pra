import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React from 'react';
import auth from '../Firebase/Firebase.config';
import Swal from 'sweetalert2';

const Signup: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget; // Correctly reference the form
        const formData = new FormData(form); // Extract form data safely

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                sendEmailVerification(result.user)
                    .then(() => {
                        // Email verification sent!
                        // ...
                        Swal.fire({
                            title: "User successfully created Now verify your email",
                            icon: "success",
                            draggable: true
                        });
                    });
                
                console.log(result.user)
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error} is happened`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
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
                                    <input onChange={handleChange} name="email" type="email" className="input" placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input onChange={handleChange} name="password" type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Registration</button>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;