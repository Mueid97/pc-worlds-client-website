import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../../src/hooks/useToken';
import Loading from '../pages/Share/Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updatError] = useUpdateProfile(auth);

    

    //const [token] = useToken(user || gUser);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user , gUser, from, navigate])

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updatError) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }
    

    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password);
        updateProfile(data.name);
        console.log(data);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-center text-2xl font-bold text-primary">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-black">Name</span>

                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs text-black"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    }

                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>

                        {/* email */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-black">Email</span>

                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs text-black"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required',
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'provide a valid email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/* password */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-black">Password</span>

                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs text-black"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn  w-full max-w-xs  bg-gradient-to-r from-primary to-secondary' type="submit" value='Sign up' />
                    </form>
                    <p className='text-black'>Already Have an Account? <Link to='/login' className='text-primary ' >Please Login</Link></p>
                    <div className="divider text-black">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline bg-gradient-to-r from-primary to-secondary ">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;