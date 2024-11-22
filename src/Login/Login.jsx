import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const contextValue=useContext(authContext);
    // console.log(contextValue);
    const navigate=useNavigate()
    const {handleLogin,setUser,handleGoogleLogin,setForgetemail}=contextValue;
    const [error,setError]=useState('');
    const location=useLocation();
    console.log(location);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        handleLogin(email, password)
            .then((result) => {
                // console.log(result)
                const user = result.user;
                // console.log(user)
                setUser(user);
                // console.log(stateEmail);
                e.target.reset();
                toast.success('successfully Login');
                navigate(location?.state ? location.state : "/");
                // <Navigate to='location?.state ? location.state : "/"'></Navigate>
            })
            .catch((error) => {
                const errorMessage=error.message;
                // const errorCode=error.code;
                console.log(errorMessage);
                // console.log(errorCode);
                // alert(error.message);
                // setError({ ...error, login: err.code });
                setError(errorMessage)
            });
    };

    const handleLogInByGoogle=()=>{
        handleGoogleLogin()
        .then((result)=>{
            console.log(result)
            navigate("/");
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }


    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-6">
            <h2 className="text-2xl font-semibold text-center">
                Login your account
            </h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    onChange={(e)=>setForgetemail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                />
                {error && (
                    <label className="label text-sm text-red-600">
                    {error}
                    </label>
                )}
                <label className="label">
                    <Link to='/forgetpassword'>
                        <a href="#" className="btn label-text-alt link link-hover text-blue-700">
                        Forgot password?
                        </a>
                    </Link>
                </label>
                </div>
                <div className="form-control mt-6 gap-4">
                    <button className="btn btn-neutral text-white bg-success rounded-full skeleton">Login</button>
                </div>
            </form>
            <p className="text-center font-semibold">
                Dont’t Have An Account ?{" "} Please{' '}
                <Link className="text-red-500" to="/register">
                Register
                </Link>
            </p>
            <h2 className="mx-auto font-semibold text-green-600 text-lg">Or</h2>
                <button onClick={handleLogInByGoogle} className="btn btn-neutral text-white bg-success rounded-full skeleton">Login with Google</button>
            </div>
        </div>
    );
};
export default Login;