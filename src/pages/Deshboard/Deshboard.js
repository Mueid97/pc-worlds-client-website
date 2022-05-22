import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Deshboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-4">
            <h1 className='text-secondary text-2xl'>Welcome To Your DashBoard</h1>
            <Outlet />
   
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu lg:px-12 overflow-y-auto w-70 bg-base-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/deshboard'>My Order</Link></li>
                    <li><Link to='/deshboard/myreview'>Add Review</Link></li>
                    <li><Link to='/deshboard/profile'>Add Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Deshboard;