import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/usericon.png'
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const contextValue=useContext(authContext);
    const {handleLogout,user}=contextValue;
    console.log(user)

    return (
        <div className="navbar bg-base-300">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <NavLink to='/'><li><a>Home</a></li></NavLink>
                <NavLink to='/profile'><li><a>User Profile</a></li></NavLink>
                <NavLink to='/update'><li><a>Update Profile</a></li></NavLink>
            </ul>
            </div>
            <NavLink to='/'><a className="btn btn-ghost text-lg  md:text-2xl text-green-500 animate__animated animate__bounceInLeft animate__repeat-1">Eco-Adventure Experiences</a></NavLink>
        </div>
        {/* ================ */}
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <NavLink to='/'><li><a>Home</a></li></NavLink>
            <NavLink to={ user && user?.email ? '/profile' : '/login'}><li><a>User Profile</a></li></NavLink>
            <NavLink to='/update'><li><a>Update Profile</a></li></NavLink>
            </ul>
        </div>
        {/* ================== */}
        <div className="navbar-end gap-4">
        <div className="animate__animated animate__bounceInDown">
            {user && user?.email ? (
                <div>
                <img title={user.email} className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                {/* <p>{user.displayName}</p> */}
                </div>
            ) : (
                <img className="w-12 h-12 rounded-full" src={userIcon} alt="" />
            )}
        </div>
        {user && user?.email ? (
            <NavLink to='/login' className="btn btn-neutral text-white bg-success rounded-full skeleton">
                <button onClick={handleLogout} className=" btn-neutral ">
                Log-Out
                </button>
            </NavLink>
            ) : (
            <Link to='/login' className="btn btn-neutral text-white bg-success rounded-full skeleton">
                Login
            </Link>
        )}
        </div>
        </div>
    );
};

export default Navbar;