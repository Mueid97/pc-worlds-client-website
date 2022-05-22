import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const NavBar = () => {
    const [user] = useAuthState(auth);
    const signUp = () => {
        signOut(auth);
    };
    const manuBar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='purchase'>Purchase</Link></li>
        <li><Link to='blogs'>Blogs</Link></li>
        <li><Link to='reviews'>Reviews</Link></li>
        {
            user && <li><Link to='deshboard' className='lg:block hidden'>DeshBoard</Link></li>
        }
        {user ? <button onClick={signUp} className="btn bg-gradient-to-r from-primary to-secondary">Sign Out</button> :
            <li><Link to='login'>Login</Link></li>}
    </>
    return (
        <div>
            <div className="flex justify-between bg-base-300 lg:px-14 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                manuBar
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">PC WORLDS</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            manuBar
                        }
                    </ul>
                </div>
                <div className='py-4'>
                    <label htmlFor="my-drawer-2" className="btn btn-ghost bg-gradient-to-r from-primary to-secondary drawer-button btn-xs sm:btn-sm md:btn-md lg:btn-lg lg:hidden">Dashboard</label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;